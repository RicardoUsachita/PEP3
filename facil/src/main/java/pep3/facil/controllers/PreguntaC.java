package pep3.facil.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pep3.facil.entities.PreguntaE;
import pep3.facil.services.PreguntaS;

import java.util.List;

@RestController
@RequestMapping("/pregunta")
public class PreguntaC {
    @Autowired
    private PreguntaS servicio;
    @GetMapping
    public ResponseEntity<List<PreguntaE>> obtenerPreguntas(){
        List<PreguntaE> preguntas = servicio.obtenerData();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }
}
