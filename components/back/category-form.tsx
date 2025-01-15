"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageInput from "../FormInputs/ImageInput";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import { CategoryProps } from "@/type/type";

export default function CategoryForm() {
  const initialImage = "/placeholder.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryProps>();

  function submit(data: CategoryProps) {
    data.image = imageUrl;
    console.log(data);
  }

  return (
    <Card className="max-w-md mx-auto mt-8 mb-8">
      <CardHeader>
        <CardTitle>Category Management</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <ImageInput
                title="Category Image"
                className="w-full"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="imageUploader"
              />
            </div>
          </div>

          <div className="space-y-2">
            <TextInput
              register={register}
              errors={errors}
              label="Category Name"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <TextArea
              register={register}
              errors={errors}
              label="Category Description"
              name="description"
            />
          </div>

          <Button type="submit" className="w-full">
            Create Category
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
