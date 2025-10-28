import { useState } from "react";
import Profile from "./profile.js";
import Interests from "./interests.js";
import Settings from "./settings.js";
import "./style.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState({
    name: "Sriya",
    age: 30,
    email: "tsriya6@gmail.com",
    interests: ["Coding", "Cooking", "Music"],
    theme: "dark",
  });
  const tabsConfig = [
    { name: "Profile", component: Profile },
    { name: "Interests", component: Interests },
    { name: "Settings", component: Settings },
  ];

  const ActiveComponent = tabsConfig[activeTab].component;

  const handleNextButton = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePrevButton = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Final form data : ", data);
  };

  return (
    <div>
      <div className="tab-header-container">
        {tabsConfig.map((tab, index) => (
          <div
            className="tab-header"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveComponent data={data} setData={setData} />
      </div>
      <div className="button-container">
        <div className="button">
          {activeTab < tabsConfig.length - 1 && activeTab > 0 && (
            <button onClick={handlePrevButton}>Prev</button>
          )}
        </div>
        <div className="button">
          {activeTab > 1 ||
            (activeTab < tabsConfig.length - 1 && (
              <button onClick={handleNextButton}>Next</button>
            ))}
        </div>

        <div className="button">
          {activeTab === tabsConfig.length - 1 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
