const Button = ({
  variant = "primary",
  children,
  onClick = () => {},
  className = "",
  ...rest
}) => {
  const baseStyles = "px-4 py-1 rounded font-medium focus:outline-none ";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "items-center bg-red-700 w-[20px] hover:bg-red-600",
    login: "border border-red-500 text-black hover:bg-red-600 rounded-[30px]",
    gost: "",
    rounded:
      "border-2 bg-white w-auto items-center rounded-xl hover:bg-teal-700 hover:text-white",
  };

  const variantStyles = variants[variant];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
