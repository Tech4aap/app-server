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
        Schema::create('finance_cost', function (Blueprint $table) {
            $table->comment('');
            $table->integer('FIID', true);
            $table->float('Finance', 10, 0);
            $table->float('Gross Profit', 10, 0);
            $table->float('Debbs', 10, 0);
            $table->float('Insurance', 10, 0);
            $table->float('CFreight', 10, 0);
            $table->float('Freight', 10, 0);
            $table->float('Custom Fee', 10, 0);
            $table->float('Online Holding Cost', 10, 0);
            $table->float('Defective Allowance', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('finance_cost');
    }
};
