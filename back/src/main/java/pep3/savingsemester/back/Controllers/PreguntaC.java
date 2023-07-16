package pep3.savingsemester.back.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pep3.savingsemester.back.Entities.PreguntaE;
import pep3.savingsemester.back.Services.PreguntaS;

import java.util.List;

@RestController("/pregunta")
public class PreguntaC {
    @Autowired
    PreguntaS servicioPregunta;


    @GetMapping("/preguntas")
    public ResponseEntity<List<PreguntaE>> obtenerPreguntas() {
        return ResponseEntity.ok(servicioPregunta.getPreguntas());
    }
    @GetMapping("/{id}")
    public ResponseEntity<PreguntaE> preguntaPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(servicioPregunta.getPregunta(id));
    }
    @PostMapping("/agregar-pregunta")
    public ResponseEntity<Boolean> guardarPregunta(@RequestParam PreguntaE pregunta) {
        servicioPregunta.savePregunta(pregunta);
        return ResponseEntity.ok(true);
    }

    @GetMapping("/generar-examen")
    public ResponseEntity<List<PreguntaE>> generarExamen(@RequestParam Integer dificultad) {
        return ResponseEntity.ok(servicioPregunta.generarExamen(dificultad));
    }
}
