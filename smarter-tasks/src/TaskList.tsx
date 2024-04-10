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
  item={{
    id: task.id,
    title: task.title,
    description: task.description,
    todoDueDate: task.todoDueDate
  }}
  removeTask={() => handleRemove(idx)}
/>
  ));
  return <>{list}</>;
};

export default TaskList;
