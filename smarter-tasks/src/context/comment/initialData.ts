import { TaskData } from "./types";

const initialData: TaskData = {
  comments: {
    "1": {
      id: 1,
      title: "Sample Task",
      taskID: 1,
      description: "Sample description about the task which is to be completed",
      dueDate: "",
      state: "in_progress",
      assignee: undefined,
      assignedUserName: undefined
    },
    "2": {
      id: 2,
      taskID: 1,
      title: "Another Sample Task",
      description: "Sample description about the task which is to be completed",
      dueDate: "",
      state: "pending",
      assignee: undefined,
      assignedUserName: undefined
    },
  },
};

export default initialData;