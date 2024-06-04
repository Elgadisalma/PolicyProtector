<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }
        $user = $request->user();
        $token = $user->createToken('Access Token');
        $user->access_token = $token->accessToken;
        return response()->json([
            'message' => 'Login successful',
            'redirect_url' => 'http://localhost:3000/dashboard'
        ], 200
    )->header('Location', 'http://localhost:3000/dashboard');
    }
    
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => "User logged out successfully"
        ], 200);
    }

    public function index()
    {
        return response()->json([
            'message' => 'Hello world'
        ], 200);
    }
}