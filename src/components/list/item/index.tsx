import { ITarefa } from '../../../types/Tarefas';
import style from './Item.module.scss'

interface Props{
    tarefa:ITarefa,
    selecionaTarefa: (tarefaSelecionado:ITarefa) => void
}

export default function Item ({tarefa, selecionaTarefa}:Props) {
    return(
        <li className={`${style.item} ${tarefa.selecionado ? style.itemSelecionado : ''} ${tarefa.completado ? style.itemCompletado: ''}`} 
            onClick={() =>
            !tarefa.completado && selecionaTarefa({
                ...tarefa
            })}
        >
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
            {tarefa.completado && <span className={style.concluido} aria-label='Tarefa completada!'></span>}
        </li>
    )
}