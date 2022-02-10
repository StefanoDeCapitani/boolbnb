<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlatSponsorshipTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flat_sponsorship', function (Blueprint $table) {
            $table->id();
            $table->foreignId("sponsorship_id")->constrained();
            $table->foreignId("flat_id")->constrained();
            $table->date('expiration_date');
            $table->string("payment_id");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flat_sponsorship');
    }
}
