import React, { useState } from "react";
import { TabContent } from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section>
      <div className=" w-[90%]  flex space-x-2 ml-[2rem] mt-10  ">
        {TabContent.map((tab) => (
          <section className=" w-full">
            <div
              onClick={() => setActiveTab(tab.id)}
              className={`w-full border-b-2 flex cursor-pointer justify-center pb-2 ${
                tab.id === activeTab
                  ? "border-b-4 border-gray-400 font-bold rounded-sm"
                  : ""
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
        {TabContent.map((tab) => (
          <div className=" w-[100%]">
            {tab.id === activeTab && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
