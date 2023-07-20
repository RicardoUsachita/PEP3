package pep3.facil.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pep3.facil.entities.PreguntaE;
import pep3.facil.repositories.PreguntaR;

import java.util.List;

@Service
public class PreguntaS {
    @Autowired
    private PreguntaR repositorio;

    public List<PreguntaE> obtenerData(){
        return (List<PreguntaE>) repositorio.findAll();
    }
}
