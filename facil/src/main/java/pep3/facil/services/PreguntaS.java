package pep3.facil.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pep3.facil.entities.PreguntaE;
import pep3.facil.repositories.PreguntaR;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class PreguntaS {
    @Autowired
    private PreguntaR repositorio;

    public ArrayList<PreguntaE> obtenerData(){
        return (ArrayList<PreguntaE>) repositorio.findAll();
    }

    public ArrayList<PreguntaE> obtenerAleatorias() {
        ArrayList<PreguntaE> preguntas = obtenerData();
        ArrayList<PreguntaE> preguntasAleatorias = new ArrayList<>();
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

    public void guardarData(PreguntaE pregunta){
        repositorio.save(pregunta);
    }

}
