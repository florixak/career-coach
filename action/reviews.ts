"use server";

import { createClient } from "@/utils/supabase/server";

export const getReviews = async () => {
  const supabase = await createClient();

  const { data: reviews, error } = await supabase.from("reviews").select("*");

  if (error) {
    return {
      status: "ERROR",
      error: error.message,
    };
  }

  return {
    status: "SUCCESS",
    reviews,
  };
};
