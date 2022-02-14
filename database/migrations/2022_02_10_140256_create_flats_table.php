<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flats', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->foreignId("user_id")->constrained();
            $table->unsignedTinyInteger("n_rooms");
            $table->unsignedTinyInteger("n_beds");
            $table->unsignedTinyInteger("n_bathrooms");
            $table->integer("sq_metres");
            $table->boolean("visible");
            $table->string("address");
            $table->string("lat");
            $table->string("lon");
            $table->decimal("night_price");
            $table->string("cover_img");
            $table->string('slug');
            $table->softDeletes();
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
        Schema::dropIfExists('flats');
    }
}
