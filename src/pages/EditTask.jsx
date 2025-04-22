import { useParams } from "react-router-dom";

import AddTaskForm from "../features/tasks/AddTaskForm";
import { useTaskByID } from "../features/tasks/useTaskByID";
import Spinner from "../ui/Spinner";
function EditTask() {
  const { taskId } = useParams();
  const { data: task, isLoading } = useTaskByID(taskId);
  if (isLoading) return <Spinner />;

  return <AddTaskForm taskToEdit={task} />;
}

export default EditTask;
