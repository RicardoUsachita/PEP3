package pep3.facil.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pep3.facil.entities.PreguntaE;
import pep3.facil.services.PreguntaS;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/facil")
public class PreguntaC {
    @Autowired
    private PreguntaS servicio;
    @GetMapping
    public ResponseEntity<ArrayList<PreguntaE>> obtenerPreguntas(){
        ArrayList<PreguntaE> preguntas = servicio.obtenerAleatorias();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @PostMapping
    public void guardarPregunta(@RequestBody PreguntaE pregunta){
        servicio.guardarData(pregunta);
    }
}
