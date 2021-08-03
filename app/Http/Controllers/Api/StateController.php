<?php

namespace App\Http\Controllers\Api;

use App\Models\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StateController extends Controller
{
    public function index()
    {
        return State::all();
    }

    public function show($id)
    {
        return  State::where('id', $id)->get();
    }
}
