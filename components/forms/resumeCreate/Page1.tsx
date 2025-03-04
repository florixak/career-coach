import { improveDescriptionWithAI } from "@/action/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeFormStep } from "@/utils/types";
import { Wand } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";

const Page1 = ({ formData, setFormData, errors }: ResumeFormStep) => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleImproveWithAI = async () => {
    const prompt = descriptionRef.current?.value || null;
    const response = await improveDescriptionWithAI(prompt);
    if (response.status === "SUCCESS") {
      if (descriptionRef.current) {
        descriptionRef.current.value = response.description || "";
      }
    }
    toast[response.status === "SUCCESS" ? "success" : "error"](
      response.message || response.error
    );
  };

  return (
    <>
      <div>
        <Input
          type="file"
          name="image"
          accept="image/*"
          placeholder="Image"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files?.[0] })
          }
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image}</span>
        )}
      </div>

      <div>
        <Input
          type="text"
          name="fullName"
          placeholder="Full name"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        {errors.fullName && (
          <span className="text-red-500 text-sm">{errors.fullName}</span>
        )}
      </div>

      <div className="flex flex-row gap-2 w-full relative">
        <Textarea
          name="description"
          placeholder="Description"
          className="max-h-[16rem] min-h-[10rem] w-full"
          ref={descriptionRef}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></Textarea>
        <Button
          type="button"
          variant="outline"
          onClick={handleImproveWithAI}
          className="group absolute opacity-70 right-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        >
          <div className="flex flex-row items-center">
            <span className="absolute left-12 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:left-14 transition-all duration-500 ease-in-out">
              Improve with AI
            </span>
            <Wand
              size={16}
              className="opacity-40 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          </div>
        </Button>
      </div>
    </>
  );
};

export default Page1;
