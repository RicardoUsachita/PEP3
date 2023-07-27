package pep3.dificil.clases;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "preguntas_dificil")
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