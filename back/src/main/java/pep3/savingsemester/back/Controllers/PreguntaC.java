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
    PreguntaS servicio;

    @GetMapping("/preguntas")
    public ResponseEntity<List<PreguntaE>> obtenerPreguntas() {
        return ResponseEntity.ok(servicio.getPreguntas());
    }
    @GetMapping("/{id}")
    public ResponseEntity<PreguntaE> preguntaPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(servicio.getPregunta(id));
    }
    @PostMapping("/agregar-pregunta")
    public ResponseEntity<Boolean> guardarPregunta(@RequestParam PreguntaE pregunta) {
        servicio.savePregunta(pregunta);
        return ResponseEntity.ok(true);
    }
}
