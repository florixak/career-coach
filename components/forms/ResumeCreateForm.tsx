"use client";

import { createResume, improveDescriptionWithAI } from "@/action/resume";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useActionState, useRef, useState } from "react";
import { Wand } from "lucide-react";
import toast from "react-hot-toast";
import { createResumeSchema } from "@/utils/validation";
import { Resume } from "@/utils/types";
import { useRouter } from "next/navigation";
import { z } from "zod";

const ResumeCreateForm = () => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

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

  const handleFormSubmit = async (
    prevState: { status: string; error: string },
    formData: FormData
  ) => {
    try {
      const formValues = {
        image: formData.get("image") as File,
        fullName: formData.get("fullName") as Resume["full_name"],
        description: formData.get("description") as Resume["description"],
        education: formData.get("education") as unknown as Resume["education"],
        workExperience: formData.get(
          "workExperience"
        ) as unknown as Resume["experience"],
        skills: formData.get("skills") as unknown as Resume["skills"],
        contact: formData.get("contact") as unknown as Resume["contact"],
        languages: formData.get("languages") as unknown as Resume["languages"],
      };

      await createResumeSchema.parseAsync(formValues);

      const { resume, status, error } = await createResume(formValues);

      if (status === "SUCCESS") {
        toast.success("Resume created successfully");
        router.push(`/resumes/${resume ? (resume as Resume).id : ""}`);
      }

      if (status === "ERROR") {
        toast.error(error);
      }

      return { ...prevState, status: "SUCCESS" };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        return { ...prevState, status: "ERROR" };
      }
      return { ...prevState, status: "ERROR" };
    }
  };

  const [, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="flex flex-col gap-2 max-w-sm">
      <div>
        <Input type="file" name="image" accept="image/*" placeholder="Image" />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image}</span>
        )}
      </div>

      <div>
        <Input type="text" name="fullName" placeholder="Full name" />
        {errors.fullName && (
          <span className="text-red-500 text-sm">{errors.fullName}</span>
        )}
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

      <Button type="submit" variant="outline" disabled={isPending}>
        Create
      </Button>
    </form>
  );
};

export default ResumeCreateForm;
