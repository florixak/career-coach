"use client";

import { createResume } from "@/action/resume";
import { Button } from "../ui/button";
import { useActionState, useState } from "react";
import toast from "react-hot-toast";
import { createResumeSchema } from "@/utils/validation";
import { Resume, ResumeFormData } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import Page1 from "./resumeCreate/Page1";
import Page2 from "./resumeCreate/Page2";
import Page3 from "./resumeCreate/Page3";
import { Progress } from "../ui/progress";

const ResumeCreateForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<ResumeFormData>({
    image: undefined,
    fullName: "",
    description: "",
    education: [],
    workExperience: [],
    skills: [],
    contact: [],
    languages: [],
  });

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
      }
      return { ...prevState, status: "ERROR" };
    }
  };

  const currentStep = parseInt(searchParams.get("page") || "1", 10) || 1;

  const handleNext = () => {
    router.push(`?page=${currentStep + 1}`);
  };

  const handlePrev = () => {
    router.push(`?page=${currentStep - 1}`);
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form
      action={formAction}
      className="flex flex-col gap-8 max-w-[25rem] w-full"
    >
      <Progress value={currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100} />
      <div className="min-h-[15rem] flex flex-col gap-2">
        {currentStep === 1 && (
          <Page1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <Page2
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {currentStep === 3 && (
          <Page3
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
      </div>

      <div className="flex flex-row gap-2 justify-between">
        <Button
          type="button"
          onClick={handlePrev}
          variant="outline"
          disabled={isPending || currentStep === 1}
        >
          Prev
        </Button>
        <Button type="submit" variant="outline" disabled={isPending}>
          Create
        </Button>
        <Button
          type="button"
          onClick={handleNext}
          variant="outline"
          disabled={isPending || currentStep === 3}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default ResumeCreateForm;
