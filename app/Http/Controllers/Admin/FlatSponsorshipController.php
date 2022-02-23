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
    public function store(Request $request){
        $sponsorValue= $request->only('sponsorship');
        $slug = $request->route('slug');
        $flat= Flat::where('slug', $slug)->first();
        $sponsorship= Sponsorship::findOrFail(1);
        
        $nonceFromTheClient = $request->payment_method_nonce;
        $braintree = config('braintree');
        $result = $braintree->transaction()->sale([
            'amount' => '10.00',
            'paymentMethodNonce' => $nonceFromTheClient,
            'options' => [
            'submitForSettlement' => True
            ]
        ]);

        if ($result->success) {
            $transactionId = $result->transaction->id;
            $flat->sponsorships()->attach(1, ['expiration_date'=> Carbon::now()->addDays(2), 'payment_id'=> $transactionId ]);
    
            return back()->with('message', 'Transazione avvenuta con successo');
        } else {
            $errorString = "";
            foreach ($result->errors->deepAll() as $error) {
                $errorString .= 'Error: ' . $error->code . ": " . $error->message . "\n";
            }
            return back()->withErrors('Errore');
        }
        return  redirect()->route('admin.sponsorship', $slug)->with('message','Ottimo');
    }
}
