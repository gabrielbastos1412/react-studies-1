import { ITarefa } from "../../types/Tarefas";
import style from "./List.module.scss";
import Item from "./item";

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionado:ITarefa) => void
}

function List({tarefas, selecionaTarefa} : Props){ 
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index) =>(
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={index}
                    tarefa={item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;