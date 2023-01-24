<?php

namespace App\Http\Controllers;

use App\Models\product_name;
use Illuminate\Http\Request;


class YarnController extends Controller
{

    public function create_YarnName(Request $request)
    {
        //
        $validatedData = $request->validate([
            'NAME' => 'required|max:255',
        ]);
        echo "hi";
        
        $productName = new product_name();
        $productName->NAME = $request->input('NAME');
        $productName->save();

        return response()->json(['message' => 'Successfully created user!'], 201);
    }

}
