/**
 * production level code
 *
 */

function Button({
  children,
  bgColor = "bg-indigo-500",
  textColor = "text-white",
  className = "rounded",
  ...props
}) {
  return (
    <button
      className={`pl-4 pr-4 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
