export default function Input({ label, type, value, placeholder, onChange }) {
  return (
    <>
      <label htmlFor="" className="px-6">
        {label}
      </label>
      <input
        key={label}
        type={type}
        name={label}
        value={value}
        onChange={onChange}
        className="py-4 px-6 bg-bg-card w-full rounded-sm"
        placeholder={placeholder}
      />
    </>
  );
}
