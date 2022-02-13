import React from "react";
import Avatar from "components/Avatar";
import SidebarTaskStatItem from "components/SidebarTaskStatItem";
import SidebarMenuItem from "components/SidebarMenuItem";
import SidebarTeamItem from "components/SidebarTeamItem";
import Button from "components/Button";
import { MdAdd, MdMoreHoriz, MdSearch } from "react-icons/md";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-primary-500 p-6">
      <div className="flex items-center text-white mb-10">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 font-bold bg-transparent outline-none placeholder:text-white"
        />
        <MdSearch size={24} />
      </div>
      <div className="flex items-center mb-4">
        <Avatar
          shape="CIRCLE"
          size="M"
          image="https://avatars.githubusercontent.com/u/37144427?v=4"
        />
        <div className="flex-1 mx-3">
          <h4 className="text-white text-base font-bold">Kadek Sastrawan</h4>
          <h5 className="text-sm text-gray-200 font-bold">
            Front-End Engineer
          </h5>
        </div>
        <Button
          variant="ICON"
          className="text-gray-200"
          size={20}
          icon={<MdMoreHoriz />}
          style={{ padding: 4 }}
        />
      </div>
      <div className="flex items-center mb-10">
        <SidebarTaskStatItem name="Completed Tasks" value={372} />
        <SidebarTaskStatItem name="Open Tasks" value={11} />
      </div>
      <div className="mb-10">
        <h6 className="text-sm font-bold">MENU</h6>
        <SidebarMenuItem>Home</SidebarMenuItem>
        <SidebarMenuItem>My Tasks</SidebarMenuItem>
        <SidebarMenuItem>
          <div className="flex items-center">
            Notifications
            <Avatar
              shape="CIRCLE"
              className="ml-3 text-xs font-bold bg-white text-black"
              style={{ width: "1.25rem", height: "1.25rem" }}
            >
              3
            </Avatar>
          </div>
        </SidebarMenuItem>
      </div>
      <div className="mb-10">
        <h6 className="text-sm font-bold">TEAMS</h6>
        <SidebarTeamItem name="Researchers" seed="researchers" count={3} />
        <SidebarTeamItem name="FE/BE Team" seed="fe-be-team" count={2} />
        <SidebarTeamItem name="PM Team" seed="pm-team" count={4} />
        <Button
          rounded={4}
          className="text-left font-bold text-prim"
          style={{ color: "rgb(167, 243, 208)" }}
          fullWidth
        >
          <div className="flex items-center">
            <MdAdd size={24} className="mr-2" />
            Add a Team
          </div>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
