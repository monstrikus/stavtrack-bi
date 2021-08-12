<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registration(Request $request)
    {
        $fields = $request->validate([
            "name" => "required|string",
            "email" => "required|string|unique:users,email",
            "password" => "required|string|confirmed"
        ]);

        $user = User::create([
            "name" => $fields["name"],
            "email" => $fields["email"],
            "password" => bcrypt($fields["password"]),
        ]);

        $token = $user->createToken("$user->id|$user->name|$user->email")->plainTextToken;

        return response(["user" => $user, "token" => $token], 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            "email" => "required|string",
            "password" => "required|string"
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) return response(["message" => 'Unauthenticated.'], 401);

        $token = $user->createToken("$user->id|$user->name|$user->email")->plainTextToken;

        return response(["user" => $user, "token" => $token], 200);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response(["message" => "success logged out."], 200);
    }
}
