import React, {Component} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {dracula} from "@uiw/codemirror-theme-dracula";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

class GenerarPreguntaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link : '',
            pregunta: '',
            codigo: '',
            respuesta: '',
            dificultad: '',
        };
        this.codigoInicial = '#Escriba el enunciado de su pregunta y el código a continuación\nprint(\'Hola Mundo!\')';
    }

    changePregunta = event => {
        this.setState({
            pregunta: event.target.value
        });
        console.log(this.state.pregunta)
    };

    changeCodigo = (value) => {
        this.setState({
            codigo: value
        });
        console.log(this.state.codigo)
    };

    changeRespuesta = event => {
        this.setState({
            respuesta: event.target.value
        });
        console.log(this.state.respuesta)
    };

    changeDificultad = event => {
        const value = event.target.value;
        if (value === '1') {
            this.setState({
                dificultad: value,
                link: 'http://localhost:8080/facil'
            });
        } else if (value === '2') {
            this.setState({
                dificultad: value,
                link: 'http://localhost:8080/medio'
            });
        } else if (value === '3') {
            this.setState({
                dificultad: value,
                link: 'http://localhost:8080/dificil'
            });
        }
        console.log(this.state.dificultad)
    };

    guardarPregunta = event => {
        event.preventDefault();
        const MySwal = withReactContent(Swal);
        if(this.state.pregunta === '')
        {
            MySwal.fire({
                title: <strong>Error en pregunta</strong>,
                html: <i>Porfavor escriba una pregunta válido</i>,
                icon: 'error'
            });
        }
        else if(this.state.codigo === '')
        {
            MySwal.fire({
                title: <strong>Error en codigo</strong>,
                html: <i>Porfavor escriba codigo válido</i>,
                icon: 'error'
            });
        }
        else if(this.state.respuesta === '')
        {
            MySwal.fire({
                title: <strong>Error en respuesta</strong>,
                html: <i>Porfavor escriba una respuesta válida</i>,
                icon: 'error'
            });
        }
        else if(this.state.dificultad === '')
        {
            MySwal.fire({
                title: <strong>Error en dificultad</strong>,
                html: <i>Porfavor seleccione una dificultad válida</i>,
                icon: 'error'
            });
        }
        else
        {   
           
            fetch(this.state.link,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pregunta: this.state.pregunta,
                    codigo: this.state.codigo,
                    respuesta: this.state.respuesta,
                }),
            })
            .catch(err => console.error(err));

            MySwal.fire({
                title: <strong>Exito!</strong>,
                html: <i>Se ha añadido la pregunta correctamente</i>,
                icon: 'success'
            });
            this.setState({link: ''});
            this.setState({pregunta: ''});
            this.setState({codigo: ''});
            this.setState({respuesta: ''});
            this.setState({dificultad: ''});

            event.target.reset();
        }
        
    }

    render() {
        return (
            <div>
                <GlobalStyle/>
                <nav>
                    <ul className={"btn-secondary-container"}>
                        <li className={"btn-secondary"}><a href="/">Volver al menú principal</a></li>
                    </ul>
                </nav>
                <div>
                    <h1 style={{color: "#fff"}}>Ingrese la nueva pregunta</h1>
                    <br/>
                    <div>
                        <form onSubmit={this.guardarPregunta}>
                            <ul className="registration-form">
                                <li>
                                    <label>Pregunta</label>
                                    <input type="text" placeholder="Ingrese la pregunta" id="pregunta"
                                        name="pregunta" onChange={this.changePregunta}/>
                                </li>
                                <li className="codigo-input-container">
                                    <label>Codigo</label>
                                    <CodeMirror
                                        value={this.codigoInicial}
                                        height="200px"
                                        extensions={[python()]}
                                        theme={dracula}
                                        onChange={this.changeCodigo}
                                    />
                                </li>
                                <li>
                                    <label>Respuesta</label>
                                    <input type="text" placeholder="Ingrese la respuesta" id="respuesta"
                                         name="respuesta" onChange={this.changeRespuesta}/>
                                </li>
                                <li>
                                    <label>Dificultad</label>
                                    <select id="dificultad" name="dificultad" onChange={this.changeDificultad}>
                                        <option value="" selected>Seleccione una dificultad</option>
                                        <option value="1">Novato</option>
                                        <option value="2">Intermedio</option>
                                        <option value="3">Avanzado</option>
                                    </select>
                                </li>
                                <li className="btn-secondary-container">
                                    <input className="btn-secondary" type="submit" value="Ingresar pregunta"/>
                                </li>
                            </ul> 
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default GenerarPreguntaComponent;

const GlobalStyle = createGlobalStyle`

body {
    margin: 10%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  
  .divContent
  {
    margin: auto;
  }
  

  
body {
    margin-top: 0;
    background-color: #83BCFF;
    color: #000;
    font-family: Arial, sans-serif;
}
  

  
nav {
    background-color: #97D2FB;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 0 0 10px 10px;
}

  
.btn-secondary-container {
    display: flex;
    justify-content: center;
}
  
.btn-secondary {
    display: inline-block;
    padding: 10px 20px;
    background-color: #80FFE8;
    color: #1D4E89;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
}
  
  ul.registration-form {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  
  ul.registration-form li {
    margin-bottom: 20px;
  }
  
  ul.registration-form label {
    display: block;
    font-weight: bold;
    color: #1D4E89;
    margin-bottom: 5px;
  }
  
  ul.registration-form input[type="text"],
  ul.registration-form input[type="email"],
  ul.registration-form input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 2px solid #1D4E89;
    border-radius: 10px;
  }
  
  ul.registration-form input[type="submit"] {
    padding: 10px 20px;
    background-color: #80FFE8;
    color: #1D4E89;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  
  ul.registration-form input[type="submit"]:hover {
    background-color: #1D4E89;
  }
  
  .codigo-input-container {
    margin: 0;
  }
  
  .codigo-input {
    font-family: 'Courier New', monospace;
    padding: 10px;
    width: 500px;
    height: 200px;
    background-color: #282a36;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: white;
  }

`;