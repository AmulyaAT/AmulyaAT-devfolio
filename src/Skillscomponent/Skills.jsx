import React from "react";
import { Tooltip } from "antd";
import "./_Skills.scss";
import "./_Mediaskill.scss";
import html from "./Icons/html.svg";
import css from "./Icons/css.svg";
import javascript from "./Icons/javascript.svg";
import antd from "./Icons/antd.svg";
import react from "./Icons/react.svg";
import typescript from "./Icons/typescript.svg";
import tailwind from "./Icons/tailwind.svg";
import redux from "./Icons/redux.svg";
import figma from "./Icons/figma.svg";
import github from "./Icons/github.svg";
import Jest from "./Icons/Jest.svg";

const colorMapping = {
  html: "#f50",
  css: "#2db7f5",
  javascript: "#fadb14",
  typescript: "#108ee9",
  react: "#61dafb",
  redux: "#764abc",
  antd: "#1890ff",
  tailwind: "#38b2ac",
  jest: "#c21325",
  github: "#333",
  figma: "#a259ff",
};

const Skills = () => {
  return (
    <div className="Skill-container">
      <div className="Skill__heading">
        <h3>Skills</h3>
      </div>
      <div className="Skill-grid">
        <Tooltip title="HTML" color={colorMapping.html} placement="bottom">
          <div className="Skill__icon">
            <img src={html} alt="HTML" />
          </div>
        </Tooltip>
        <Tooltip title="CSS" color={colorMapping.css}>
          <div className="Skill__icon">
            <img src={css} alt="CSS" />
          </div>
        </Tooltip>
        <Tooltip title="JavaScript" color={colorMapping.javascript} placement="bottom">
          <div className="Skill__icon">
            <img src={javascript} alt="JavaScript" />
          </div>
        </Tooltip>
        <Tooltip title="TypeScript" color={colorMapping.typescript}>
          <div className="Skill__icon">
            <img src={typescript} alt="TypeScript" />
          </div>
        </Tooltip>
        <Tooltip title="React" color={colorMapping.react} placement="bottom">
          <div className="Skill__icon">
            <img src={react} alt="React" />
          </div>
        </Tooltip>
        <Tooltip title="Redux" color={colorMapping.redux}>
          <div className="Skill__icon">
            <img src={redux} alt="Redux" />
          </div>
        </Tooltip>
        <Tooltip title="Ant Design" color={colorMapping.antd} placement="bottom">
          <div className="Skill__icon">
            <img src={antd} alt="Ant Design" />
          </div>
        </Tooltip>
        <Tooltip title="Tailwind" color={colorMapping.tailwind}>
          <div className="Skill__icon">
            <img src={tailwind} alt="Tailwind" />
          </div>
        </Tooltip>
        <Tooltip title="Jest" color={colorMapping.jest} placement="bottom">
          <div className="Skill__icon">
            <img src={Jest} alt="Jest" />
          </div>
        </Tooltip>
        <Tooltip title="GitHub" color={colorMapping.github}>
          <div className="Skill__icon">
            <img src={github} alt="GitHub" />
          </div>
        </Tooltip>
        <Tooltip title="Figma" color={colorMapping.figma} placement="bottom">
          <div className="Skill__icon">
            <img src={figma} alt="Figma" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Skills;
