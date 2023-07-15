package pep3.savingsemester.back.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "pregunta")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PreguntaE {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pregunta")
    private Integer id;

    public Integer numPregunta;
    public Integer dificultad;
    public String link;
    public Integer respuesta;
}
