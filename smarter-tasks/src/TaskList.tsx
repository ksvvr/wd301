import { TaskItem } from "./types";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      todoDueDate={task.todoDueDate}
    />
  ));
  return <>{list}</>;
};


export default TaskList;
