package pep3.facil.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "preguntas-facil")
@NoArgsConstructor
@AllArgsConstructor
public class PreguntaE {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String pregunta;
    private String codigo;
    private String respuesta;
}
