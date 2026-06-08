export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  handleChange,
}) {
  return (
    <>
      <label htmlFor="" className="pl-4">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="py-2 pl-4 bg-bg-card w-full rounded-sm"
        placeholder={placeholder}
        onWheel={(e) => e.target.blur()}
        required
      />
    </>
  );
}
