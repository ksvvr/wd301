// import { TaskItem } from "./types";
// import Task from "./Task";
// interface Props {
//   tasks: TaskItem[];
// }

// const TaskList = (props: Props) => {
//   const list = props.tasks.map((task, idx) => (
//     <Task
//       key={idx}
//       title={task.title}
//       description={task.description}
//       todoDueDate={task.todoDueDate}
//     />
//   ));
//   return <>{list}</>;
// };


// export default TaskList;

// TaskList.tsx
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

const TaskList = (props: Props) => {
  const handleRemove = (index: number) => {
    props.onDelete(index);
  };

  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      todoDueDate={task.todoDueDate}
      onDelete={() => handleRemove(idx)}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
