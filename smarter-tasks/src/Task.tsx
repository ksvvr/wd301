// // //import React from "react";
// // import "./TaskCard.css";
// // import { TaskItem } from "./types";

// // const Task = (props: TaskItem) => {
// //   return (
// //     <li>
// //       <div className="TaskItem shadow-md border border-slate-100">
// //         <h2 className="text-base font-bold my-1">{props.title}</h2>
// //         <p className="text-sm text-slate-500">{props.todoDueDate}</p>
// //         <p className="text-sm text-slate-500">Description: {props.description}</p>
// //         <button className="deleteTaskButton">Delete</button>
// //       </div>
// //     </li>
// //   );
// // };

// // export default Task;

// // Task.tsx
// import "./TaskCard.css";
// import { TaskItem } from "./types";

// interface Props extends TaskItem {
//   onDelete: () => void;
// }

// const Task = (props: Props) => {
//   const handleRemove = () => {
//     props.onDelete();
//   };

//   return (
//     <li>
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{props.title}</h2>
//         <p className="text-sm text-slate-500">{props.todoDueDate}</p>
//         <p className="text-sm text-slate-500">Description: {props.description}</p>
//         <button className="deleteTaskButton bg-red-300" onClick={handleRemove}>
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// };

// export default Task;


import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  removeTask: (task: TaskItem) => void;
}
const Task = (props: TaskProps) => {
  const { item, removeTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.todoDueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(item)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
