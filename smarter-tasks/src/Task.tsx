//import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

// interface TaskProp {
//   title: string;
//   description: string;
//   todoDueDate: string;
// }


// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//         <p className="text-sm text-slate-500">
//           Due Date: {this.props.todoDueDate}
//         </p>
//         <p className="text-sm text-slate-500">
//           Description: {this.props.discription}
//         </p>
//       </div>
//     );
//   }

// }

const Task = (props: TaskItem) => {
  return (
    <li>
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.todoDueDate}</p>
        <p className="text-sm text-slate-500">Description: {props.description}</p>
        <button className="deleteTaskButton">Delete</button>
      </div>
    </li>
  );
};

export default Task;