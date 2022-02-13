import React from "react";
import Avatar from "components/Avatar";
import Board from "components/Board";
import Button from "components/Button";
import data from "data.json";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { MdMoreHoriz } from "react-icons/md";
import { dataToBoard, dataToTask, getUniqueTags } from "helpers/functions";
import Sidebar from "components/Sidebar";
import Modal from "components/Modal";
import TextInput from "components/TextInput";

const initialBoards = [
  {
    board_id: "backlog",
    title: "Backlog",
    taskIds: ["issue-3", "issue-4", "issue-8"],
  },
  {
    board_id: "todo",
    title: "To Do",
    taskIds: ["issue-1", "issue-2", "issue-6"],
  },
  {
    board_id: "done",
    title: "Done",
    taskIds: ["issue-5", "issue-7"],
  },
];
const uniqueTags = getUniqueTags(data);

const App: React.FC = () => {
  const [tasks] = React.useState<{ [key: string]: TaskInterface }>(
    dataToTask(data)
  );
  const [boards, setBoards] = React.useState<{ [key: string]: BoardInterface }>(
    dataToBoard(initialBoards)
  );
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskAssignee, setTaskAssignee] = React.useState("");
  const [taskStartDate, setTaskStartDate] = React.useState("");
  const [taskEndDate, setTaskEndDate] = React.useState("");
  const [taskTags, setTaskTags] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const handleDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (draggableId && destination && source) {
      const tempBoards = dataToBoard(Object.values(boards));
      tempBoards[source.droppableId].taskIds.splice(source.index, 1);
      tempBoards[destination.droppableId].taskIds.splice(
        destination.index,
        0,
        draggableId
      );
      setBoards(tempBoards);
    }
  };

  return (
    <div className="w-full min-h-screen flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 px-12 py-16">
        <div className="flex items-center">
          <img src="/logo.png" alt="Prosa" className="w-10" />
          <h1 className="text-3xl font-extrabold ml-5">Kanban Prosa</h1>
          <div className="flex-[0.1]" />
          <Button
            variant="ICON"
            className="text-gray-400"
            size={20}
            icon={<MdMoreHoriz />}
            style={{ background: "rgba(209, 213, 219, 0.3)", padding: 4 }}
          />
          <div className="flex-1" />
          {[...new Array(3)].map((_, i) => (
            <Avatar
              key={i}
              shape="CIRCLE"
              size="S"
              image={`https://picsum.photos/seed/${i + 1}/200`}
              className="mr-1"
            />
          ))}
          <div className="text-center py-1 px-6 ml-3 bg-black bg-opacity-10 rounded-full">
            <span className="text-sm font-bold text-current">70 Members</span>
          </div>
        </div>
        <div className="flex mt-20">
          <DragDropContext onDragEnd={handleDragEnd}>
            {Object.values(boards).map((v) => (
              <Board
                key={v.board_id}
                tasks={tasks}
                uniqueTags={uniqueTags}
                onShowModal={() => setShowModal(true)}
                {...v}
              />
            ))}
          </DragDropContext>
        </div>
      </main>
      <Modal
        show={showModal}
        title="New Task"
        footer={
          <Button
            variant="OUTLINED"
            rounded={8}
            className="px-8 bg-primary-500"
            style={{
              color: "white",
              borderColor: "rgb(16 185 129)",
            }}
          >
            Save
          </Button>
        }
        onClose={() => setShowModal(false)}
      >
        <div className="w-full">
          <TextInput
            variant="OUTLINED"
            label="Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <TextInput
            variant="OUTLINED"
            label="Assignee"
            value={taskAssignee}
            onChange={(e) => setTaskAssignee(e.target.value)}
          />
          <TextInput
            variant="OUTLINED"
            label="Start Date"
            value={taskStartDate}
            onChange={(e) => setTaskStartDate(e.target.value)}
          />
          <TextInput
            variant="OUTLINED"
            label="End Date"
            value={taskEndDate}
            onChange={(e) => setTaskEndDate(e.target.value)}
          />
          <TextInput
            variant="OUTLINED"
            label="Tags"
            value={taskTags}
            onChange={(e) => setTaskTags(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
