import { TaskItem } from "./types";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
// interface State {}
// class TaskList extends React.Component<Props, State> {
  
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} discription={task.discription} todoDueDate={task.todoDueDate} />
//     ));
//   }
// }
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
