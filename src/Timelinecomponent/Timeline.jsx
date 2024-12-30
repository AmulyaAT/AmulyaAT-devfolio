import React, { useState } from "react";
import "./_Timeline.scss";
import "./_Mediatimeline.scss";

const Timeline = () => {
  // State to handle the selected radio button
  const [selectedWork, setSelectedWork] = useState("work1");

  // Handler function to update the selected work
  const handleWorkChange = (event) => {
    setSelectedWork(event.target.id);
  };

  const timelineData = [
    {
      id: "work1",
      date: "July 2024",
      content: "Front-End Intern @ iVoyant Systems Pvt Ltd",
      detailedContent:
        "During my internship at iVoyant Systems Pvt Ltd, I focused on building expertise in React, JavaScript, TypeScript, Redux, RTK/RTK Query, Ant Design, and SCSS, gaining hands-on experience with these technologies and enhancing my front-end development skills.",
    },
    {
      id: "work2",
      date: "2020 - 2024",
      content: "Bapuji Institute of Engineering and Technology, Davanagere",
      detailedContent:
        "Bachelor of Engineering in Information Science and Engineering",
      cgpa: "8.24 / 10",
    },
    {
      id: "work3",
      date: "2018 - 2020",
      content: "Expert Pre-University College, Mangalore",
      detailedContent:
        "Graduated with a focus on science subjects [PCMB] ",
      percentage: "77.66%",
    },
    {
      id: "work4",
      date: "2006 - 2018",
      content: "St. John's Convent School, Davanagere",
      detailedContent:
        "Completed high school with a percentage of 88.16%, excelling in academics.",
      percentage: "88.16%",
    },
  ];

  return (
    <div className="timelinecontainer">
      <h2 className="timelinetitle">Education & Experience</h2>
      <ul id="timeline">
        {timelineData.map((item) => (
          <li className="work" key={item.id}>
            <input
              className="radio"
              id={item.id}
              name="works"
              type="radio"
              checked={selectedWork === item.id}
              onChange={handleWorkChange}
            />
            <div className="relative">
              <label htmlFor={item.id}>{item.content}</label>
              <span className="date">{item.date}</span>
              <span className="circle"></span>
            </div>
            <div className="content">
              <p>{selectedWork === item.id ? item.detailedContent : item.content}</p>
              {selectedWork === item.id && item.cgpa && (
                <p><strong>CGPA:</strong> {item.cgpa}</p>
              )}
              {selectedWork === item.id && item.percentage && (
                <p><strong>Percentage:</strong> {item.percentage}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;