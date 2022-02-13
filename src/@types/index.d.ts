interface TaskInterface {
  issue_id: string;
  title: string;
  assignee: string;
  start_date: string;
  end_date: string;
  tags: string[];
}

interface BoardInterface {
  board_id: string;
  title: string;
  taskIds: string[];
}
