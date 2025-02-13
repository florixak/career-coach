"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const login = async (formData: FormData) => {
  try {
    const supabase = await createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    console.log("Error", error);

    if (error) {
      return {
        status: "ERROR",
        error: error.message,
      };
    }
  } catch (error) {
    console.log("Error logging in", error);
    return {
      status: "ERROR",
      error: "Unexpected error occurred",
    };
  }

  revalidatePath("/", "layout");
  return {
    status: "SUCCESS",
    error: "",
  };
};

export const register = async (formData: FormData) => {
  try {
    const supabase = await createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      fullName: formData.get("fullName") as string,
    };

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.fullName.split(" ")[0],
          last_name: data.fullName.split(" ")[1] || "",
        },
      },
    });

    console.log("Error", error);

    if (error) {
      return {
        status: "ERROR",
        error: error.message,
      };
    }
  } catch (error) {
    console.log("Error registering", error);
    return {
      status: "ERROR",
      error: "Unexpected error occurred",
    };
  }

  revalidatePath("/", "layout");
  return {
    status: "SUCCESS",
    error: "",
  };
};

export const logout = async () => {
  const supabase = await createClient();
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("Error logging out", error);
  }
  revalidatePath("/", "layout");
};
