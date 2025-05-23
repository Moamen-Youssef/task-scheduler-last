import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export function useTaskByID(id) {
  const { status, data, error } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTasks(id),
  });

  return { isLoading: status === "pending", data, error };
}
