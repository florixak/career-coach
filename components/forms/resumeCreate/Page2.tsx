import { Input } from "@/components/ui/input";
import { ResumeFormStep } from "@/utils/types";
import React from "react";

const Page2 = ({ formData, setFormData, errors }: ResumeFormStep) => {
  return (
    <>
      <div>
        <Input name="education" placeholder="Education" />
        {errors.education && (
          <span className="text-red-500 text-sm">{errors.education}</span>
        )}
      </div>
      <div>
        <Input name="workExperience" placeholder="Work experience" />
        {errors.workExperience && (
          <span className="text-red-500 text-sm">{errors.workExperience}</span>
        )}
      </div>
      <div>
        <Input name="skills" placeholder="Skills" />
        {errors.skills && (
          <span className="text-red-500 text-sm">{errors.skills}</span>
        )}
      </div>
    </>
  );
};

export default Page2;
