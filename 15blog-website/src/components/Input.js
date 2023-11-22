function Input({ label = "testing", type = "text", ...props }) {
  return (
    <div>
      <label>{label}</label>

      <div>
        <input type={type} className={`w-20 p-3 bg-slate-200`} />
      </div>
    </div>
  );
}

export default Input;
