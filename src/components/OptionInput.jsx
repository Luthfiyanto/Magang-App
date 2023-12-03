function OptionInput({ id, value, onChange, icon }) {
  const valueOption = [
    {},
    { min: 0, max: 10 },
    { min: 11, max: 20 },
    { min: 21, max: 30 },
    { min: 31, max: 40 },
    { min: 41, max: 50 },
    { min: 51, max: 60 },
    { min: 61, max: 70 },
    { min: 71, max: 80 },
    { min: 81, max: 90 },
    { min: 91, max: 100 },
  ];
  return (
    <div className="flex mx-2 justify-center items-center">
      <label htmlFor={id} className="">
        {icon}
      </label>
      <select name={id} id={id} value={`${value.min}-${value.max}`} onChange={onChange} className="w-full m-1 py-1 px-2 rounded-lg border border-blue-600 text-slate-600 outline-none focus:outline-blue-400">
        {valueOption.map((item, index) => (
          <option key={index} value={`${item.min}-${item.max}`}>
            {/* {item.min} - {item.max} */}
            {!item.min && !item.max ? "kuota" : `${item.min} - ${item.max}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OptionInput;
