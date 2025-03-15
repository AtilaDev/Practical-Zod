"use server";

import { UserData, userDataSchema } from "@/zodSchema";

export async function SubmitForm(data: UserData) {
  const result = userDataSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }

  return {
    success: true,
    message: "Everything was successful",
  };
}
