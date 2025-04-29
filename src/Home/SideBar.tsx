import { Home, Search, Settings, User } from "lucide-react";
import React, { ReactNode, useState } from "react";

const SideBar = () => {
  const [iconIndex, setIconIndex] = useState(1);
  const [isHover, setIsHover] = useState(false);

  console.log(iconIndex);

  interface navIconType {
    id: number;
    name: string;
    icons: ReactNode;
  }

  const topIcons: navIconType[] = [
    {
      id: 1,
      name: "home",
      icons: (
        <Home className="hover:size-8 transition-all duration-150 active:size-7 hover:text-white" />
      ),
    },
    {
      id: 2,
      name: "User",
      icons: (
        <User className="hover:size-8 transition-all duration-150 active:size-7 hover:text-white" />
      ),
    },
    {
      id: 3,
      name: "Search",
      icons: (
        <Search className="hover:size-8 transition-all duration-150 active:size-7 hover:text-white" />
      ),
    },
  ];

  const bottonIcons: navIconType[] = [
    {
      id: 4,
      name: "settings",
      icons: (
        <Settings className="hover:size-8 transition-all duration-150 active:size-7 hover:text-white" />
      ),
    },
    {
      id: 5,
      name: "profile",
      icons: (
        <User className="hover:size-8 transition-all duration-150 active:size-7 hover:text-white" />
      ),
    },
  ];

  return (
    <aside className=" fixed  top-0 left-0 bg-[#1A1C1E] h-screen w-20 z-50">
      <ul className=" flex flex-col justify-between items-center pt-5 h-full pb-10  ">
        <div>
          {topIcons.map((icons) => {
            return (
              <li
                onClick={() => setIconIndex(icons.id)}
                className={`top text-gray-400  px-2 py-3 active:text-red-100 ${
                  icons.id === iconIndex && "text-red-100"
                }  `}>
                {icons.icons}
              </li>
            );
          })}
        </div>

        <div>
          {bottonIcons.map((icons) => {
            return (
              <li
                onClick={() => setIconIndex(icons.id)}
                className={`top text-gray-400  px-2 py-3 active:text-red-100 ${
                  icons.id === iconIndex && "text-red-100"
                }  `}>
                {icons.icons}
              </li>
            );
          })}
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
