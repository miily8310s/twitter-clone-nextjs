import { FC } from "react";
import { SidebarLogo } from "./SidebarLogo";
// import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";

export const Sidebar: FC = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: FaUser,
      label: "Profile",
      // href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ];
  return (
    <div>
      <div>
        <div>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              href={item.href}
              auth={item.auth}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
