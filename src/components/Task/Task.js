import { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import './Task.css';

export default function Task ({name}){
    const [isVisible, setIsVisible] = useState(true); //хук, состояние, хранится вне компонента
    const [count, setCount] = useState(1);
    function taskRemove() {
        setIsVisible(false);
        console.log("Удаление");
    }
    function taskEdit() {
        setCount(count + 1);
        console.log("Редактирование");
    }
    return(
        <div className={isVisible? "task" : "hide"}>
            <span>{name}</span>
            <PencilFill className='btn-edit' onClick={taskEdit} />
            <TrashFill className='btn-remove' onClick={taskRemove} />
            {count}
        </div>
    );
}
//export default Task