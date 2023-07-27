import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function ResultadosComponent() {
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    console.log()
    window.location.href = "/prueba-facil";
  };
  const ComenzarMedio = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba-medio";
  };
  const ComenzarDificil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba-dificil";
  };
  const AddAsk = () => {
    window.location.href = "/agregar-pregunta";
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [segundos, setSegundos] = useState(
    localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
  );

  const [minutos, setMinutos] = useState(
    localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
  );

  const [horas, setHoras] = useState(
    localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
  );

  return (
    <>
      <GlobalStyle />
      <HomeStyle>
        <br></br>
        <div className="resultados">
          <h1>
            <b>
              <u>Tu calificación es: {puntaje}/ 7.0</u>
            </b>
          </h1>
          <h1>Tu tiempo fue de:</h1>
          <h1>
            <b>
              {horas} horas, {minutos} minutos y {segundos} segundos.
            </b>
          </h1>
          {puntaje == 7 ? (
            <h1>¡Felicidades! Has completado el desafio con éxito.</h1>
          ) : (
            <h1>¡Puedes mejorar! Sigue intentandolo.</h1>
          )}
        </div>
        <br></br>
        <div className="texto-resultados">
          <h1>
            <b>
              ¿Buscas otros desafios? Intentalo denuevo, aumenta la dificultad o
              crea tu propio desafio.
            </b>
          </h1>
        </div>
        <div className="options-container">
          <div className="facil">
            <h2>
              <b>Modo Básico </b>
            </h2>
            <h3>
              Para principiantes en Python que quieren sumergirse en el mundo de
              la programación y aprender con desafios básicos y rápidos.
            </h3>           
              <button type="button" class="btn btn-primary" onClick={ComenzarFacil}>
                Comenzar
              </button>
          </div>
          <br></br>
          <div className="medio">
            <h2>
              <b>Modo Intermedio </b>
            </h2>
            <h3>
              Para aquellos que ya tienen conocimientos en Python y quieren poner
              a prueba sus habilidades con desafios de dificultad media.
            </h3>
            <button type="button" class="btn btn-primary" onClick={ComenzarMedio}>
              Comenzar
            </button>
          </div>
          <br></br>
          <div className="dificil">
            <h2>
              <b>Modo Avanzado </b>
            </h2>
            <h3>
              Para aquellos expertos en Python que buscan los mayores desafios.
            </h3>
            
            <button type="button" class="btn btn-primary" onClick={ComenzarDificil}>
              Comenzar
            </button>
            
          </div>

          <br></br>
          <div className="nueva-pregunta">
            <h2>
              <b>Agregar un nuevo desafio </b>
            </h2>
            <h3>
              ¿Has creado un desafio y quieres ver como otros se enfrentan a el?
              Accede a esta opción para agregar a un nuevo desafio.
            </h3>
            
            <button type="button" class="btn btn-primary" onClick={AddAsk}>
              Acceder
            </button>
            
          </div>
          <br></br>
        </div>
      </HomeStyle>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #97D2FB;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
}
.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #0F889E;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.options-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  margin: 0 auto;
  max-width: 900px; 
}
.facil, .medio, .dificil, .nueva-pregunta {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: #83BCFF;
  border-radius: 25px;
  padding: 20px;
  width: 60%;
  margin: 10px;
  border: 5px solid #80FFE8;
}
.texto-resultados{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    width: 80%;
    margin: auto;
    padding: 20px;
`;