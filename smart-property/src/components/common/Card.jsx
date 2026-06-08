export default function Card({ key, title, desc, value, index }) {
  return (
    <div className="bg-bg-card py-6 rounded-sm" key={key}>
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-2 max-w-md p-2">
          <h6 className=" text-xl">
            {index && `${index}. `}
            {title.toUpperCase()}
          </h6>
          {desc && (
            <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
          )}
          {value && (
            <p className="text-3xl text-brand">
              {value.toLocaleString("id-ID")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
