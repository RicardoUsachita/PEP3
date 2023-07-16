package pep3.savingsemester.back.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pep3.savingsemester.back.Entities.PreguntaE;
import pep3.savingsemester.back.Repositories.PreguntaR;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class PreguntaS {
    @Autowired
    PreguntaR respositorio;
    public List<PreguntaE> getPreguntas() {
       return respositorio.findAll();
    }

    public PreguntaE getPregunta(Integer id) {
        return respositorio.findById(id).orElse(null);
    }

    public PreguntaE savePregunta(PreguntaE pregunta) {
        return respositorio.save(pregunta);
    }
    public PreguntaE deletePregunta(Integer id) {
        PreguntaE pregunta = respositorio.findById(id).orElse(null);
        respositorio.deleteById(id);
        return pregunta;
    }

    public List<PreguntaE> generarExamen(Integer dificultad) {
        List<PreguntaE> preguntas = respositorio.findByDificultad(dificultad);
        List<PreguntaE> preguntasExamen = obtenerAleatorias(preguntas);
        return obtenerAleatorias(preguntas);
    }
    public List<PreguntaE> obtenerAleatorias(List<PreguntaE> preguntas) {
        List<PreguntaE> preguntasAleatorias = new ArrayList<>();
        Random random = new Random();

        if (preguntas.size() <= 4) {
            preguntasAleatorias.addAll(preguntas);
        } else {
            List<Integer> indicesSeleccionados = new ArrayList<>();

            while (preguntasAleatorias.size() < 4) {
                int indiceAleatorio = random.nextInt(preguntas.size());

                if (!indicesSeleccionados.contains(indiceAleatorio)) {
                    preguntasAleatorias.add(preguntas.get(indiceAleatorio));
                    indicesSeleccionados.add(indiceAleatorio);
                }
            }
        }
        return preguntasAleatorias;
    }
}
