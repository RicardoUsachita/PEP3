package pep3.savingsemester.back.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pep3.savingsemester.back.Entities.PreguntaE;

import java.util.List;

@Repository
public interface PreguntaR extends JpaRepository<PreguntaE,Integer> {

}
