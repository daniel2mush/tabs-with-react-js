import React, { useState } from "react";
import { TabContent } from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabContent[0].id);
  return (
    <section>
      <div className=" w-[90%]  flex ml-[2rem] mt-10 border-b  border-gray-200  ">
        {TabContent.map((tab) => (
          <section className=" w-full ">
            <div
              onClick={() => setActiveTab(tab.id)}
              className={`w-full cursor-pointer justify-center pb-2 ${
                tab.id === activeTab
                  ? "border-b-2 border-gray-400 font-bold "
                  : "boder-b"
              }`}>
              <div className=" flex text-[12px] text-gray-500 justify-center items-center">
                {tab.icon}
                <div className=" mr-2"></div>
                {tab.name}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className=" w-[95%]">
        {TabContent.find((tab) => tab.id === activeTab)?.content}
      </div>
    </section>
  );
};

export default Tabs;
