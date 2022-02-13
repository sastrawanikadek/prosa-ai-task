import React from "react";
import Avatar from "components/Avatar";

const SidebarTeamItem: React.FC<SidebarTeamItemProps> = ({
  name,
  seed,
  count,
}) => {
  return (
    <div className="flex items-center p-2">
      <span className="text-white font-bold">{name}</span>
      <div className="flex-1"></div>
      {[...new Array(count)].map((_, i) => (
        <Avatar
          key={i}
          shape="CIRCLE"
          size="XS"
          image={`https://picsum.photos/seed/${seed}-${i + 1}/200`}
          className="mr-1"
        />
      ))}
    </div>
  );
};

export default SidebarTeamItem;
