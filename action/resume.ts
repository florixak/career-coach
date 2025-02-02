"use server";

import { createClient } from "@/utils/supabase/server";

export const createResume = async (formData: FormData) => {
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

export const getResumes = async () => {
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

export const getResume = async (id: string) => {
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
    .eq("id", id)
    .eq("user_id", user.id);

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
