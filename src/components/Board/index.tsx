import Button from "components/Button";
import Task from "components/Task";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { MdAdd } from "react-icons/md";

const Board: React.FC<BoardProps> = ({
  board_id,
  title,
  taskIds,
  tasks,
  uniqueTags,
  onShowModal,
}) => {
  return (
    <div className="flex-1 shadow-md rounded-md border border-gray-300 p-6 mx-4 first:ml-0 last:mr-0">
      <div className="flex items-center mb-8">
        <h4 className="text-xl font-bold flex-1">{title}</h4>
        <Button
          variant="OUTLINED"
          rounded={50}
          className="text-sm capitalize bg-primary-400"
          style={{
            color: "white",
            borderColor: "rgb(52 211 153)",
            paddingTop: 4,
            paddingBottom: 4,
          }}
          onClick={onShowModal}
        >
          <div className="flex items-center">
            <MdAdd size={24} className="mr-2" />
            Add Task
          </div>
        </Button>
      </div>
      <Droppable droppableId={board_id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="h-full"
          >
            {taskIds.map((id, i) => (
              <Task
                key={tasks[id].issue_id}
                index={i}
                uniqueTags={uniqueTags}
                {...tasks[id]}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
