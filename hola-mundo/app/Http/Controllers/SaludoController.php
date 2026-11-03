<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SaludoController extends Controller
{
    public function index()
    {
        $mensaje = 'Hola mundo desde Laravel';
        $nombre = 'Josue Misael Cruz Santos';
        $asignatura = 'ISC-305 Programación Web';
        $carrera = 'Ingeniería en Sistemas Computacionales';

        return view('hola', [
            'mensaje'    => $mensaje,
            'nombre'     => $nombre,
            'asignatura' => $asignatura,
            'carrera'    => $carrera
        ]);
    }
}