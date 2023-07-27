import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


export default function HomeComponent() {
  
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
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

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h1 className="text-center">
          <b>
            {" "}
            <i>
              {" "}
              <u>¡Bienvenido a CodeChallenger!</u>
            </i>
          </b>
        </h1>
        <h3 className="text-center">
          {" "}
          <b>
            Selecciona tu nivel de dificultad y comienza a resolver los
            desafíos.{" "}
          </b>
        </h3>
        <br></br>
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
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #97D2FB;
}
`;

const HomeStyle = styled.nav`

.options-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
}

.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
    font-family: "Source Code Pro", sans-serif;
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
`;