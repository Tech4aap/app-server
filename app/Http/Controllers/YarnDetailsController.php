<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\product_name;

class YarnDetailsController extends Controller
{
    //

    public function create_YarnName(Request $request)
    {
        //
        $validatedData = $request->validate([
            'NAME' => 'required|max:255',
        ]);
        echo "hi";
        
        $productName = new product_name();
        $productName->NAME = $request->input('Productname');
        $productName->save();

        return response()->json(['message' => 'Successfully created user!'], 201);
    }
}
