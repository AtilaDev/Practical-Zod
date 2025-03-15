"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserData, userDataSchema } from "@/zodSchema";
import { toast } from "sonner";

import { SubmitForm } from "@/actions";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form-input";

export default function HomePage() {
  const form = useForm<UserData>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      id: 0,
      name: "",
      email: "",
      age: 0,
    },
  });

  const onSubmit = async (data: UserData) => {
    const result = await SubmitForm(data);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormInput
                control={form.control}
                name="id"
                label="Id"
                placeholder="id"
                type="number"
              />
              <FormInput control={form.control} name="name" label="Name" />
              <FormInput
                control={form.control}
                name="email"
                label="Email"
                type="email"
              />
              <FormInput
                control={form.control}
                name="age"
                label="Age"
                type="number"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
