/* eslint-disable react/prop-types */
import React from 'react'
import './TaskCard.css'
import { title } from 'process'

interface TaskCardd {
    title: string
    assigneeName: string
}

class dueCard implements TaskCardd {
    title: string
    assigneeName: string
    dueDate: string

    constructor(title:string, assigneeName:string, dueDate: string){
        this.title = title
        this.assigneeName = assigneeName
        this.dueDate = dueDate
    }
}

class completedCard implements TaskCardd {
    title: string
    assigneeName: string
    completedAtDate: string

    constructor(title:string, assigneeName:string, completedAtDate: string){
        this.title = title
        this.assigneeName = assigneeName
        this.completedAtDate = completedAtDate
    }
}

const TaskCard = (props) => {
    if (props.dueDate != null){
        const item = new dueCard(props.title, props.assigneeName, props.dueDate)
        return (
            <>
                <div className='TaskItem mt-3 m-3'>
                    <h1 className='font-bold text-3xl'>{item.title}</h1>
                    <p>Due on: {item.dueDate}</p>
                    <p>Assignee: {item.assigneeName}</p>
                </div>
            </>
        )
    } else{ 
        const item = new completedCard(props.title, props.assigneeName, props.completedAtDate)
        return (
            <>
                <div className='TaskItem mt-3 m-3'>
                    <h1 className='font-bold text-3xl'>{item.title}</h1>
                    <p>Completed on: {item.completedAtDate}</p>
                    <p>Assignee: {item.assigneeName}</p>
                </div>
            </>
        )
    }
}
export default TaskCard