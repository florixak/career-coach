"use client";

import { sendPromptToAi } from "@/action/resume";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";

const ResumeCreateForm = () => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleEditWithAI = async () => {
    const prompt = descriptionRef.current?.value ?? "Edit with AI";
    const response = await sendPromptToAi(
      "Edit this profile description to look more elegant for resume, to be hired: " +
        prompt
    );
    console.log(response);
  };

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
          ref={descriptionRef}
        />
        <Button type="button" variant="outline" onClick={handleEditWithAI}>
          Edit with AI
        </Button>
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
