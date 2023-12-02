import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./context/FilterMitra";
import InputText from "./components/InputText";
import OptionInput from "./components/OptionInput";

function Filter() {
  const [total, setTotal] = useState({ min: null, max: null });
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [mitra_name, setMitra_name] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const { submitButton, getAllMitra } = useContext(FilterContext);

  const onSubmit = () => {
    const payload = { keyword, total, location, mitra_name };
    setIsFilter(true);
    submitButton(payload);
  };

  useEffect(() => {
    if (!isFilter) {
      getAllMitra();
      setIsFilter(false);
    }
  }, []);
  return (
    <article>
      <InputText id={"keyword"} value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      {/* <InputText id={"total"} value={total} onChange={(e) => setTotal(e.target.value)} /> */}
      <OptionInput
        id={"total"}
        value={total}
        onChange={(e) => {
          const [min, max] = e.target.value.split("-");
          setTotal({ min: parseInt(min), max: parseInt(max) });
        }}
      />
      <InputText id={"location"} value={location} onChange={(e) => setLocation(e.target.value)} />
      <InputText id={"mitra"} value={mitra_name} onChange={(e) => setMitra_name(e.target.value)} />
      <button type="submit" onClick={onSubmit}>
        Filter
      </button>
      <div className="cek">
        <p>{keyword}</p>
        <p>
          {total.min} - {total.max}
        </p>
        <p>{location}</p>
        <p>{mitra_name}</p>
      </div>
    </article>
  );
}

export default Filter;
