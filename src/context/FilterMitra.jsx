import { createContext, useState } from "react";
import data from "./../../data/magang_data.json";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [mitra, setMitra] = useState([]);

  const submitButton = (payload) => {
    const { keyword, total, location, mitra_name } = payload;

    const filterByName = (item) => item.name.toLowerCase().includes(keyword.toLowerCase()) || item.activity_name.toLowerCase().includes(keyword.toLowerCase());
    const filterByTotal = (item) => (!total.min && !total.max) || (item.total >= total.min && item.total <= total.max);
    const filterByLocation = (item) => !location || item.location.toLowerCase().includes(location.toLowerCase());
    const filterByMitraName = (item) => !mitra_name || item.mitra_name.toLowerCase().includes(mitra_name.toLowerCase());

    const result = data.filter((item) => filterByName(item) && filterByTotal(item) && filterByLocation(item) && filterByMitraName(item));
    setMitra(result);
    console.log(result);
  };

  const getAllMitra = () => {
    const dataMitra = data;
    setMitra(dataMitra);
  };

  return <FilterContext.Provider value={{ mitra, submitButton, getAllMitra }}>{props.children}</FilterContext.Provider>;
};

export default FilterContextProvider;
