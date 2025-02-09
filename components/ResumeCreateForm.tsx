"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ResumeCreateForm = () => {
  return (
    <form className="flex flex-col gap-2 w-full max-w-sm">
      <div>
        <Input type="file" name="image" accept="image/*" placeholder="Image" />
      </div>

      <div>
        <Input type="text" name="fullName" placeholder="Full name" />
      </div>
      <div>
        <Textarea
          name="description"
          placeholder="Description"
          className="max-h-[10rem]"
        />
      </div>

      <div>
        <Input name="education" placeholder="Education" />
      </div>

      <div>
        <Input name="workExperience" placeholder="Work experience" />
      </div>

      <div>
        <Input name="skills" placeholder="Skills" />
      </div>

      <div>
        <Input name="contact" placeholder="Contact" />
      </div>

      <div>
        <Input name="languages" placeholder="Languages" />
      </div>

      <div>
        <Input name="bgColor" placeholder="Background color" />
      </div>

      <div>
        <Input name="textColor" placeholder="Text color" />
      </div>
    </form>
  );
};

export default ResumeCreateForm;
