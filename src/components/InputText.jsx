function InputText({ id, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}></label>
      <input type="text" id={id} placeholder={id} value={value} onChange={onChange} className="border border-blue-600" />
    </div>
  );
}

export default InputText;
