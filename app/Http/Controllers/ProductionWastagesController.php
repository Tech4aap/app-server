<?php

namespace App\Http\Controllers;

use App\Models\production_wastages;
use App\Http\Requests\Storeproduction_wastagesRequest;
use App\Http\Requests\Updateproduction_wastagesRequest;

class ProductionWastagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Storeproduction_wastagesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storeproduction_wastagesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\production_wastages  $production_wastages
     * @return \Illuminate\Http\Response
     */
    public function show(production_wastages $production_wastages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\production_wastages  $production_wastages
     * @return \Illuminate\Http\Response
     */
    public function edit(production_wastages $production_wastages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updateproduction_wastagesRequest  $request
     * @param  \App\Models\production_wastages  $production_wastages
     * @return \Illuminate\Http\Response
     */
    public function update(Updateproduction_wastagesRequest $request, production_wastages $production_wastages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\production_wastages  $production_wastages
     * @return \Illuminate\Http\Response
     */
    public function destroy(production_wastages $production_wastages)
    {
        //
    }
}
