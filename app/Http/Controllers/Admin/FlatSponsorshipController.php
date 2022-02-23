<?php

namespace App\Http\Controllers\Admin;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Sponsorship;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FlatSponsorshipController extends Controller
{
    public function create($slug){
        $sponsorData= Sponsorship::all();
        $braintree = config('braintree');
        $clientToken = $braintree->clientToken()->generate();
        return view('admin.sponsorship', compact('sponsorData', 'slug', 'clientToken'));
    }
    public function store(Request $request, $slug){
        $sponsorPlan= $request->only('plan');
        // $slug = $request->route('slug');
        $flat= Flat::where('slug', $slug)->first();
        $sponsorship= Sponsorship::where('name', $sponsorPlan)->first();

        if ($flat->activeSponsorships()->first()) {
            return  back()->with('error', 'Appartamento già sponsorizzato' );
        }

        $nonceFromTheClient = $request->payment_method_nonce;
        $braintree = config('braintree');
        $result = $braintree->transaction()->sale([
            'amount' => $sponsorship->price,
            'paymentMethodNonce' => $nonceFromTheClient,
            'options' => [
            'submitForSettlement' => True
            ]
        ]);

        if ($result->success) {
            $transactionId = $result->transaction->id;
            $flat->sponsorships()->attach($sponsorship->id, ['expiration_date'=> Carbon::now()->addHour($sponsorship->duration), 'payment_id'=> $transactionId ]);
    
            return back()->with('message', 'Transazione avvenuta con successo');
        } else {
            $errorString = "";
            foreach ($result->errors->deepAll() as $error) {
                $errorString .= 'Error: ' . $error->code . ": " . $error->message . "\n";
            }
            return back()->withErrors('error', $errorString);
        }
        return  redirect()->route('admin.sponsorship', $slug)->with('message','Ottimo');
    }
}
