import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./context/FilterMitra";

export default function Filter() {
  const [total, setTotal] = useState({});
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
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </article>
  );
}
