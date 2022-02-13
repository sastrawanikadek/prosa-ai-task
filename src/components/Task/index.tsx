import clsx from "clsx";
import Avatar from "components/Avatar";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { getDuration, JoinEachFirstLetter } from "helpers/functions";
import { TAG_COLORS } from "helpers/constants";

const Task: React.FC<TaskProps> = ({
  issue_id,
  title,
  assignee,
  start_date,
  end_date,
  tags,
  index,
  uniqueTags,
}) => {
  return (
    <Draggable draggableId={issue_id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-gray-100 rounded-md p-4 w-full mt-4"
        >
          <h5 className="text-base font-bold mb-2">{title}</h5>
          <div className="flex items-center">
            <Avatar shape="CIRCLE" size="XS">
              {JoinEachFirstLetter(assignee)}
            </Avatar>
            {tags.map((v) => (
              <div
                key={v}
                className={clsx(
                  TAG_COLORS[uniqueTags.indexOf(v) % TAG_COLORS.length],
                  "text-center py-[2px] px-2 ml-3 bg-opacity-10 rounded-full"
                )}
              >
                <span className="font-extrabold text-xs text-current uppercase">
                  {v}
                </span>
              </div>
            ))}
            <div className="flex-1" />
            <span className="text-sm font-bold text-gray-500">
              {getDuration(start_date, end_date)} days
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
