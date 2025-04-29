import React from "react";
import { Controller } from "react-hook-form";

const FormController = ({
  control,
  name,
  label,
  type,
  options = [],
  ...rest
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-1 font-semibold">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => {
          switch (type) {
            case "text":
            case "date":
              return (
                <input
                  {...field}
                  id={name}
                  type={type}
                  className="border rounded px-2 py-1"
                  {...rest}
                />
              );

            case "textarea":
              return (
                <textarea
                  {...field}
                  id={name}
                  className="border rounded px-2 py-1"
                  {...rest}
                />
              );

            case "select":
              return (
                <select
                  {...field}
                  id={name}
                  className="border rounded px-2 py-1"
                  {...rest}
                >
                  <option value="">Select {label}</option>
                  {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              );

            default:
              return (
                <input
                  {...field}
                  id={name}
                  type="text"
                  className="border rounded px-2 py-1"
                  {...rest}
                />
              );
          }
        }}
      />
    </div>
  );
};

export default FormController;
