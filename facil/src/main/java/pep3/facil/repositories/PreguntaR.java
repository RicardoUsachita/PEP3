package pep3.facil.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pep3.facil.entities.PreguntaE;
@Repository
public interface PreguntaR extends JpaRepository<PreguntaE, Integer> {
}
