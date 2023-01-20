<?php

namespace App\Http\Controllers;

use App\Models\product_name;


class YarnController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function NamePost(Request $request)
    {
        //
        $validatedData = $request->validate([
            'Pname' => 'required|max:255',
        ]);

        $productName = new product_name();
        $productName->NAME = $validatedData['Pname'];
        $productName->save();

        return response()->json(['message' => 'Successfully created user!'], 201);
    }

}
