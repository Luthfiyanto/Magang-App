import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./context/FilterMitra";
import InputText from "./components/InputText";
import OptionInput from "./components/OptionInput";
import icon from "./assets/icon";

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
    <article className="grid md:grid-cols-2 lg:grid-cols-5 gap-2 m-3 p-3 sticky top-0 bg-white justify-center shadow-md shadow-slate-400 rounded-md">
      <InputText id={"keyword"} icon={icon.keyword} value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <OptionInput
        icon={icon.total}
        id={"total"}
        value={total}
        onChange={(e) => {
          const [min, max] = e.target.value.split("-");
          setTotal({ min: min ? parseInt(min) : null, max: max ? parseInt(max) : null });
        }}
      />
      <InputText id={"location"} icon={icon.location} value={location} onChange={(e) => setLocation(e.target.value)} />
      <InputText id={"mitra"} icon={icon.mitra} value={mitra_name} onChange={(e) => setMitra_name(e.target.value)} />
      <button type="submit" onClick={onSubmit} className="text-white bg-blue-950 mx-2 py-2 lg:py-1 rounded-lg">
        Cari
      </button>
    </article>
  );
}

export default Filter;
