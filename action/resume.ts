"use server";

import { improveDescriptionPrompt } from "@/utils/prompts";
import { createClient } from "@/utils/supabase/server";
import { Resume } from "@/utils/types";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const createResume = async (formData: {
  full_name: string;
  description: string;
  education: string[];
  work_experience: string[];
  skills: string[];
  contact: string[];
  languages: string[];
}) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "ERROR",
      error: "You are not logged in",
    };
  }

  const data = {
    user_id: user.id,
    ...formData,
  };

  const { error } = await supabase.from("resumes").insert(data);

  if (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }

  //   revalidatePath("/", "layout");
  //   redirect("/");
};

export const updateResume = async (formData: FormData) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "ERROR",
      error: "You are not logged in",
    };
  }

  const data = {
    user_id: user.id,
    full_name: formData.get("fullName") as string,
    description: formData.get("description") as string,
    education: formData.get("education") as string,
    work_experience: formData.get("workExperience") as string,
    skills: formData.get("skills") as string,
    contact: formData.get("contact") as string,
    languages: formData.get("languages") as string,
    image: formData.get("image") as string,
  };

  const { error } = await supabase.from("resumes").upsert(data);

  if (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }

  //   revalidatePath("/", "layout");
  //   redirect("/");
};

export const deleteResume = async (id: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "ERROR",
      error: "You are not logged in",
    };
  }

  const { error } = await supabase.from("resumes").delete().match({ id });

  if (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }

  //   revalidatePath("/", "layout");
  //   redirect("/");
};

export const getResumes = async (): Promise<{
  status: "SUCCESS" | "ERROR";
  error?: string;
  resumes?: Resume[];
}> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "ERROR",
      error: "You are not logged in",
    };
  }

  const { data: resumes, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }

  return {
    status: "SUCCESS",
    resumes,
  };
};

export const getResume = async (
  id: string
): Promise<{
  status: "SUCCESS" | "ERROR";
  error?: string;
  resume?: Resume;
}> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "ERROR",
      error: "You are not logged in",
    };
  }

  const { data: resumes, error } = await supabase
    .from("resumes")
    .select()
    .eq("id", id);

  if (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }

  return {
    status: "SUCCESS",
    resume: resumes[0],
  };
};

export const improveDescriptionWithAI = async (
  prompt: string
): Promise<{
  status: "SUCCESS" | "ERROR";
  error?: string;
  description?: string;
}> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "ERROR",
      error: "You are not logged in",
    };
  }

  try {
    const result = await model.generateContent(
      improveDescriptionPrompt(prompt)
    );
    const response = result.response;
    const improvedDescription = response.text().trim();
    return {
      status: "SUCCESS",
      description: improvedDescription,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      error: "Failed to generate improved description",
    };
  }
};
