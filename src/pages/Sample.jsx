import React from "react";
import { useForm } from "react-hook-form";
import FormController from "../Components/FormController";

function Sample() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 space-y-4"
      >
        <FormController
          name="name"
          control={control}
          label="Name"
          type="text"
        />
        <FormController
          name="dob"
          control={control}
          label="Date of Birth"
          type="date"
        />
        <FormController
          name="gender"
          control={control}
          label="Gender"
          type="select"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
        <FormController
          name="bio"
          control={control}
          label="Bio"
          type="textarea"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sample;
