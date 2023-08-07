import React, { Component } from "react";
import './Main.css'

// icones do formulário
import {FaPlus} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import {FaWindowClose} from 'react-icons/fa'

export default class Main extends Component{ //Component é o nome de uma classe herança, que já vem 

    state = {
                novaTarefa: '',
                tarefas:[
                    "Tomar banho",
                    "Café da manhã",
                    "Estudar"
                ]
            };

    mudaInput = (e) =>{
        this.setState({
            novaTarefa: e.target.value
        })
    }

    render(){
        const {novaTarefa, tarefas} = this.state
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>
                <form action="#" className="form">
                    <input onChange={this.mudaInput} type="text"></input>
                    <button type="submit"><FaPlus/></button>
                </form>
                <ul className="listaTarefas">
                    {tarefas.map(tarefa =>{
                       return <li key={tarefa}>
                            {tarefa}
                            <div>
                                <FaEdit className="edit"/>
                                <FaWindowClose className="close" />
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}