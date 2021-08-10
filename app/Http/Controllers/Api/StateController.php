<?php

namespace App\Http\Controllers\Api;

use App\Models\State;
use App\Http\Controllers\Controller;

class StateController extends Controller
{
    public function index()
    {
        return response(State::all(), 200);
    }
}
