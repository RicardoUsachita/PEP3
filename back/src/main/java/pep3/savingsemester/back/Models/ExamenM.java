package pep3.savingsemester.back.Models;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import pep3.savingsemester.back.Entities.PreguntaE;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class ExamenM {
    public List<PreguntaE> preguntas;
    public List<Double> notas;
    public Double notaFinal;


    public ExamenM(List<PreguntaE> preguntas) {
        this.preguntas = preguntas;
        List<Double> notas = new ArrayList<>();
        for (int i = 0; i < preguntas.size(); i++) {
            notas.add(0.0);
        }
        this.notas = notas;
        this.notaFinal = 0.0;
    }
}
