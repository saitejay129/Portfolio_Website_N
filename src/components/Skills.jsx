import React from "react";
import { SKILLS } from "../utils/data";
import SkillsCard from "../utils/SkillsCard"; // Ensure the path is correct

const Skills = () => (
  <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
      <h5 className="text-xl font-medium mb-5">Skills</h5>
      <div className="flex flex-col md:flex-row gap-4">
        {["frontend", "backend", "other"].map((category) => (
          <div key={category} className="p-3 bg-slate-800 rounded-lg w-full md:w-1/3">
            <h6 className="text-lg capitalize mb-3">{category}</h6>
            <div className="grid grid-cols-4 gap-0">
              {SKILLS[category].map((skill) => (
                <SkillsCard key={skill.id} icon={skill.icon} title={skill.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
