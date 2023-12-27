import Button from "../button";
import Relogio from "./relogio";
import style from'./Cronometro.module.scss';
import { ITarefa } from "../../types/Tarefas";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
    selecionado:ITarefa | undefined,
    finalizarTarefa: ()=>void;
}

export default function Cronometro({selecionado,finalizarTarefa} :Props){
    const [tempo,setTempo] = useState<number>();

    useEffect(() =>{
        if(selecionado?.tempo) setTempo(timeToSeconds(selecionado.tempo));
    }, [selecionado])

    function regressive(contador:number = 0){
        setTimeout(() =>{
            if(contador>0) {
                setTempo(contador -1);
                return regressive(contador-1);
            }
            finalizarTarefa();
        },1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo = {tempo}/>
            </div>
            <Button onClick={()=>regressive(tempo)}>
                Começar!
            </Button>
        </div>
    )
}