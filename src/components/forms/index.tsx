import React, { useState } from "react";
import Button from "../button";
import style from "./Forms.module.scss";
import { ITarefa } from "../../types/Tarefas";
import {v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Forms ({setTarefas}:Props){
    const [tarefa,setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function addTarefa(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
      
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
             {
                tarefa,
                tempo,
                selecionado:false,
                completado:false,
                id: uuidv4()
            }])
            setTarefa("");
            setTempo("00:00");
    }
    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    placeholder="O que você deseja estudar?"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
    )
}


export default Forms