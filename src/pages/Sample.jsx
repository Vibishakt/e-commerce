import React from "react";
import { useForm } from "react-hook-form";
import FormController from "../Components/FormController";
import Button from "../components/Button";

function Sample() {
  const { control, handleSubmit } = useForm();

  const onSubmit = ({ name = "" }) => {
    console.log("Form data:", name);
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

        <Button variant="success">Submit</Button>
      </form>
    </div>
  );
}

export default Sample;
