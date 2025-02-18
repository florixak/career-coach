"use client";

import { improveDescriptionWithAI } from "@/action/resume";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useRef } from "react";
import { Wand } from "lucide-react";
import toast from "react-hot-toast";

const ResumeCreateForm = () => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleImproveWithAI = async () => {
    const prompt = descriptionRef.current?.value || null;
    const response = await improveDescriptionWithAI(prompt);
    if (response.status === "SUCCESS") {
      if (descriptionRef.current) {
        descriptionRef.current.value = response.description || "";
      }
    }

    toast[response.status === "SUCCESS" ? "success" : "error"](response.error);
  };

  return (
    <form className="flex flex-col gap-2 max-w-sm">
      <div>
        <Input type="file" name="image" accept="image/*" placeholder="Image" />
      </div>

      <div>
        <Input type="text" name="fullName" placeholder="Full name" />
      </div>
      <div className="flex flex-row gap-2 w-full">
        <Textarea
          name="description"
          placeholder="Description"
          className="max-h-[10rem]"
          ref={descriptionRef}
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleImproveWithAI}
          className="relative group"
        >
          <span className="absolute left-12 top-3 bottom-0 items-center pl-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Improve with AI
          </span>
          <Wand size={16} />
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
