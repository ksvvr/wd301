import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    discription: string;
    todoDueDate: string;
  }
  
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "",
          discription: "",
          todoDueDate: "",
        }
      }
    
  inputRef = React.createRef<HTMLInputElement>();
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (this.state.title != "" && this.state.todoDueDate.toString() != ""){
        const newTask = {
          title: this.state.title,
          discription: this.state.discription,
          todoDueDate: this.state.todoDueDate,
        };
        this.props.addTask(newTask);
    }
    // this.setState({ title: "", discription: "", todoDueDate: new Date().toISOString() });
  };
  

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  discriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ discription: event.target.value });
  };

  todoDueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDueDate: event.target.value });
  };
  
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input type="text" id="todoTitle" value={this.state.title} onChange={this.titleChanged} required/>
        <input type="text" id="todoDescription" onChange={this.discriptionChanged} value={this.state.discription}/>
        <input type="date" id="todoDueDate" onChange={this.todoDueDateChanged} value={this.state.todoDueDate} required/>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    )
  }



}
 export default TaskForm;
