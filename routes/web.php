<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get("/user",function(){
    return Inertia::render("User",[
        "time" =>now()->toTimeString()
    ]);
});


Route::get("/settings",function(){
    return Inertia::render("Settings");
});

Route::post("/logout",function(){
    dd(request('food')); //this is request from Nav.vue page (:data bind method)
});
