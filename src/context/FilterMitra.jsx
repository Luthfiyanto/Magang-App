import { createContext, useState } from "react";
import data from "./../../data/magang_data.json";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [mitra, setMitra] = useState([]);

  const submitButton = (payload) => {
    const { keyword, total, location, mitra_name } = payload;

    setMitra([]);
    const dataMitra = data;
    const filteredMitra = dataMitra.filter((mitra) => mitra.name.toLowerCase().includes(keyword.toLowerCase()) || mitra.activity_name.toLowerCase().includes(keyword.toLowerCase()));
    if (total || location || mitra_name) {
      const filteredMitraByOther = dataMitra.filter((mitra) => (mitra.total >= total.min && mitra.total <= total.max) || mitra.location === location || mitra.mitra_name === mitra_name);
      setMitra(filteredMitraByOther);
    }
    setMitra(filteredMitra);
  };

  const getAllMitra = () => {
    const dataMitra = data;
    setMitra(dataMitra);
  };

  return <FilterContext.Provider value={{ mitra, submitButton, getAllMitra }}>{props.children}</FilterContext.Provider>;
};

export default FilterContextProvider;
