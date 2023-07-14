package pep3.savingsemester.back.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pep3.savingsemester.back.Entities.PreguntaE;
import pep3.savingsemester.back.Repositories.PreguntaR;

import java.util.List;

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
}
