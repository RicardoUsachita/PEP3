package pep3.dificil.clases;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PreguntaR extends JpaRepository<PreguntaE, Integer> {
}