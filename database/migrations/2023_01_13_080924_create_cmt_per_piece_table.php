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
        Schema::create('cmt_per_piece', function (Blueprint $table) {
            $table->comment('');
            $table->integer('COPID', true);
            $table->float('Stitching', 10, 0);
            $table->float('Lable', 10, 0);
            $table->float('StitchingThread', 10, 0);
            $table->float('PolyBag', 10, 0);
            $table->float('Zipper', 10, 0);
            $table->float('Velcru', 10, 0);
            $table->float('Elastic', 10, 0);
            $table->float('TagCard', 10, 0);
            $table->float('GarmentWash', 10, 0);
            $table->float('ElasticBand', 10, 0);
            $table->float('BasicCarton', 10, 0);
            $table->float('FancyCarton', 10, 0);
            $table->float('Embriodery', 10, 0);
            $table->float('TagPin', 10, 0);
            $table->float('Twill', 10, 0);
            $table->float('BallyBand', 10, 0);
            $table->float('Hanger', 10, 0);
            $table->float('RFIDtag', 10, 0);
            $table->float('Inlay', 10, 0);
            $table->float('Bailing', 10, 0);
            $table->float('rebated', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cmt_per_piece');
    }
};
