package pep3.savingsemester.back.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pep3.savingsemester.back.Entities.PreguntaE;
import pep3.savingsemester.back.Models.RespuestaM;
import pep3.savingsemester.back.Models.ResultadoM;

import java.util.List;

@Service
public class ResultadoS {
    @Autowired
    PreguntaS preguntaS;
    public ResultadoM obtenerResultado(List<RespuestaM> respuestas, Double tiempo) {
        ResultadoM resultado = new ResultadoM();
        resultado.setNotaFinal(calcularNota(respuestas));
        resultado.setTiempo(tiempo);
        return resultado;
    }
    public Double calcularNota(List<RespuestaM> respuestas) {
        Double nota = 0.0;

        for (RespuestaM respuesta : respuestas) {
            PreguntaE pregunta = preguntaS.getPregunta(respuesta.getIdPregunta());
            if (pregunta.getRespuesta().equals(respuesta.getRespuesta())) {
                nota += 7.0;
            }else{
                nota += 1.0;
            }
        }
        return nota/respuestas.size();
    }

}
