<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Custom Api model routes
use App\Models\Reports;
use App\Models\production_wastages;
use App\Models\apparel_information;
use App\Models\operating_cost;
use App\Models\piece_information;
use App\Models\product_type;
use App\Models\product_name;
use App\Models\product_information;
use App\Models\basic_information;
use App\Models\cmt_per_pack;
use App\Models\cmt_per_piece;
use App\Models\fabric_information;
use App\Models\finance_cost;
use App\Models\onborading;

use app\Http\Controllers\YarnDetailsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/pname', function () {
    return product_name::all()->pluck('NAME');
});



Route::post('/pname', 'YarnDetailsController@create_YarnName');






