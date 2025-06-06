import Task from "../Task/Task";
import './Container.css';

export default function Container(){
    let tasks = ['Сходить в кино', 'Зайти в магазин', 'Поехать домой']
    return (
        <div className="container">
            {
                tasks.map((item, index)=>(
                    <Task 
                        name={item} 
                        key={index}
                    />
                ))
            }
        </div>
    );
}