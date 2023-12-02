function OptionInput({ id, value, onChange }) {
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
    <select name={id} id={id} value={`${value.min}-${value.max}`} onChange={onChange}>
      {valueOption.map((item, index) => (
        <option key={index} value={`${item.min}-${item.max}`}>
          {item.min} - {item.max}
        </option>
      ))}
    </select>
  );
}

export default OptionInput;
