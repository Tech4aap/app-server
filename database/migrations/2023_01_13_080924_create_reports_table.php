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
        Schema::create('reports', function (Blueprint $table) {
            $table->comment('');
            $table->integer('RDID', true);
            $table->text('Name');
            $table->float('BID', 10, 0);
            $table->float('YID', 10, 0);
            $table->float('PID', 10, 0);
            $table->float('FID', 10, 0);
            $table->float('WID', 10, 0);
            $table->float('COPID', 10, 0);
            $table->float('CWPID', 10, 0);
            $table->float('OID', 10, 0);
            $table->float('FIID', 10, 0);
            $table->boolean('Status')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
};
