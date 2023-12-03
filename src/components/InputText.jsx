function InputText({ id, value, onChange, icon }) {
  return (
    <div className="flex mx-2 justify-center items-center">
      <label htmlFor={id} className="">
        {icon}
      </label>
      <input type="text" id={id} placeholder={id} value={value} onChange={onChange} className="border py-1 px-2 m-1 border-blue-600 w-full rounded-lg text-slate-600 outline-none focus:outline-blue-400" />
    </div>
  );
}

export default InputText;
