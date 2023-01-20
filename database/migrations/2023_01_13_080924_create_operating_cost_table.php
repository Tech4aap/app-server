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
        Schema::create('operating_cost', function (Blueprint $table) {
            $table->comment('');
            $table->integer('OID', true);
            $table->float('ExportTax', 10, 0);
            $table->float('Sample', 10, 0);
            $table->float('Testing', 10, 0);
            $table->float('Inspection', 10, 0);
            $table->float('Factory', 10, 0);
            $table->float('Domestic', 10, 0);
            $table->float('SalesCommission', 10, 0);
            $table->float('Exhibition', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('operating_cost');
    }
};
