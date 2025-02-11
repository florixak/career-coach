import React from "react";
import ResumePattern from "../ResumePattern";

const PatternCard = () => {
  return (
    <article className="w-60 h-80 rounded-lg border shadow-sm hover:shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
      <div className="scale-[0.3]">
        <ResumePattern />
      </div>
    </article>
  );
};

export default PatternCard;
