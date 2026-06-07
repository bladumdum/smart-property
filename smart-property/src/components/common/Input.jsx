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
      <label htmlFor="" className="px-6">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="py-4 px-6 bg-bg-card w-full rounded-sm"
        placeholder={placeholder}
        required
      />
    </>
  );
}
