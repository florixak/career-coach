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
      response.message
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
    </>
  );
};

export default Page1;
