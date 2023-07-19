package pep3.savingsemester.back.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pep3.savingsemester.back.Models.RespuestaM;
import pep3.savingsemester.back.Models.ResultadoM;
import pep3.savingsemester.back.Services.ResultadoS;

import java.util.List;

@RestController("/resultado")
public class ResultadoC {
    @Autowired
    ResultadoS servicioResultado;

    @GetMapping("/resultado")
    public ResultadoM obtenerResultado(@RequestParam List<RespuestaM> respuestas, Double tiempo){
        return servicioResultado.obtenerResultado(respuestas, tiempo);
    }
}
