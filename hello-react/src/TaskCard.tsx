/* eslint-disable react/prop-types */
import './TaskCard.css'
const TaskCard = (props) => {
    if (props.dueDate != null){
        return (
            <>
                <div className='TaskItem mt-3 m-3'>
                    <h1 className='font-bold text-3xl'>{props.title}</h1>
                    <p>Due on: {props.dueDate}</p>
                    <p>Assignee: {props.assigneeName}</p>
                </div>
            </>
        )
    } else{ 
        return (
            <>
                <div className='TaskItem mt-3 m-3'>
                    <h1 className='font-bold text-3xl'>{props.title}</h1>
                    <p>Completed on: {props.completedAtDate}</p>
                    <p>Assignee: {props.assigneeName}</p>
                </div>
            </>
        )
    }
}
export default TaskCard