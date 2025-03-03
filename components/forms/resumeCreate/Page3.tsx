import { Input } from "@/components/ui/input";
import { ResumeFormStep } from "@/utils/types";
import React from "react";

const Page3 = ({ formData, setFormData, errors }: ResumeFormStep) => {
  return (
    <>
      <div>
        <Input name="contact" placeholder="Contact" />
        {errors.contact && (
          <span className="text-red-500 text-sm">{errors.contact}</span>
        )}
      </div>

      <div>
        <Input name="languages" placeholder="Languages" />
        {errors.languages && (
          <span className="text-red-500 text-sm">{errors.languages}</span>
        )}
      </div>
    </>
  );
};

export default Page3;
