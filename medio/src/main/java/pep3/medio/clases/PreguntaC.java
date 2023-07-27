package pep3.medio.clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/medio")
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