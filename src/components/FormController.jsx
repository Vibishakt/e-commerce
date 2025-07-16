import { Controller } from "react-hook-form";

const FormController = ({
  control,
  name,
  label,
  type,
  options = [],
  errors = {},
  ...rest
}) => {
  const inputClassName =
    " peer border-0 border-b-2 border-teal-700 bg-transparent pt-3 md:pt-5 pb-1 peer focus:outline-none focus:ring-0";

  return (
    <div className="relative flex flex-col mb-4 border-none">
      {type !== "checkbox" && (
        <label
          htmlFor={name}
          className="absolute left-0 top-1 text-gray-500 md:text-sm text-[10px] peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:bg-emerald-500 peer-focus:top-1 peer-focus:text-xs peer-focus:divide-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => {
          switch (type) {
            case "text":
            case "date":
            case "email":
            case "password":
              return (
                <input
                  {...field}
                  id={name}
                  type={type}
                  className={inputClassName}
                  {...rest}
                />
              );

            case "textarea":
              return (
                <textarea
                  {...field}
                  id={name}
                  className={inputClassName}
                  {...rest}
                />
              );
            case "checkbox":
              return (
                <div className="flex gap-2">
                  <input
                    {...field}
                    id={name}
                    checked={field.value || false}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className=" text-zinc-800 w-4 focus:ring-blue-500 border-x-zinc-700 rounded"
                    {...rest}
                    type="checkbox"
                  />
                  <label
                    htmlFor={name}
                    className="text-xs md:text-lg mb-1 font-semibold"
                  >
                    {label}
                  </label>
                </div>
              );

            case "select":
              return (
                <select
                  {...field}
                  id={name}
                  className={inputClassName}
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
                  type={type}
                  className={inputClassName}
                  {...rest}
                />
              );
          }
        }}
      />
      <p className="text-red-700 text-[12px] text-right">
        {errors[name]?.message || ""}
      </p>
    </div>
  );
};

export default FormController;
