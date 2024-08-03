import React from "react";
import { Icons } from "../utils/icons";
import renderSvg from "../utils/renderSvg";

const SkillsCard = ({ icon, title }) => (
  <div className="bg-slate-800 rounded-lg p-3 flex flex-col items-center">
    {renderSvg(Icons[icon], "text-4xl")} {/* Adjust this class to change the size */}
    <p className="text-sm">{title}</p>
  </div>
);

export default SkillsCard;
