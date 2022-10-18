import React from "react";
import "./MySkill.scss";
const MySkill = () => {
  return (
    <div className="myskill">
      <div className="container">
        <h2 className="text-5xl text-white my-5">My Skill</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="HTML"
          >
            <img
              src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"
              alt="HTML"
              className="h-20"
            />
          </div>
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="CSS"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
              alt="CSS"
              className="h-20"
            />
          </div>{" "}
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="SCSS"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
              alt="SCSS"
              className="h-20"
            />
          </div>{" "}
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="JS"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JS"
              className="h-20"
            />
          </div>{" "}
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="ReactJS"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="Reactjs"
              className="h-20"
            />
          </div>{" "}
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="Tailwindcss"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
              alt="Tailwindcss"
              className="h-20"
            />
          </div>{" "}
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="Redux"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/redux.svg"
              alt="Redux"
              className="h-20"
            />
          </div>{" "}
          <div
            className="skill-item p-5 flex items-center justify-center border border-slate-800 transition-all grayscale opacity-30 cursor-pointer hover:grayscale-0 hover:border-slate-700 hover:opacity-100"
            title="VSCode"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              alt="VSCode"
              className="h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
