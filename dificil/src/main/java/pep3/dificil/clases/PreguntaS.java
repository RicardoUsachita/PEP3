package pep3.dificil.clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class PreguntaS {
    @Autowired
    private PreguntaR repositorio;

    public List<PreguntaE> obtenerData(){
        return (List<PreguntaE>) repositorio.findAll();
    }
}
