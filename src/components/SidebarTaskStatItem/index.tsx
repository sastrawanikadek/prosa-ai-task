import React from "react";

const SidebarTaskStatItem: React.FC<SidebarTaskStatItemProps> = ({
  name,
  value,
}) => {
  return (
    <div className="flex-1 first:mr-2 last:ml-2">
      <h3 className="text-white text-lg font-extrabold">{value}</h3>
      <h5 className="text-sm text-gray-100 font-bold">{name}</h5>
    </div>
  );
};

export default SidebarTaskStatItem;
