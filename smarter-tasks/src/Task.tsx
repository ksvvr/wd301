// //import React from "react";
// import "./TaskCard.css";
// import { TaskItem } from "./types";

// const Task = (props: TaskItem) => {
//   return (
//     <li>
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{props.title}</h2>
//         <p className="text-sm text-slate-500">{props.todoDueDate}</p>
//         <p className="text-sm text-slate-500">Description: {props.description}</p>
//         <button className="deleteTaskButton">Delete</button>
//       </div>
//     </li>
//   );
// };

// export default Task;

// Task.tsx
import "./TaskCard.css";
import { TaskItem } from "./types";

interface Props extends TaskItem {
  onDelete: () => void;
}

const Task = (props: Props) => {
  const handleRemove = () => {
    props.onDelete();
  };

  return (
    <li>
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.todoDueDate}</p>
        <p className="text-sm text-slate-500">Description: {props.description}</p>
        <button className="deleteTaskButton bg-red-300" onClick={handleRemove}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
