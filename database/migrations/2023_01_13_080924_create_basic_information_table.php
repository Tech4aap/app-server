<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('basic_information', function (Blueprint $table) {
            $table->comment('');
            $table->integer('BID', true);
            $table->text('Employee Name');
            $table->text('Client Name');
            $table->integer('Product Type');
            $table->text('Product Description');
            $table->integer('No of Yarn');
            $table->boolean('Stock Type')->default(true);
            $table->integer('Payment Terms');
            $table->boolean('isCurrency');
            $table->text('Currency name');
            $table->float('Currency Rate', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('basic_information');
    }
};
