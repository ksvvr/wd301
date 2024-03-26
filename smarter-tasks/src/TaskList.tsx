import React from "react";
import { TaskItem } from "./types";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface State {}
class TaskList extends React.Component<Props, State> {
  
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} />
    ));
  }
}
export default TaskList;
