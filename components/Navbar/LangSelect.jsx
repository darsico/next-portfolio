import { languageOptions } from "../../src/utils/language";
import { useLanguageStore } from "../../store/store";
import { useEffect, useState } from "react";

const LangSelect = () => {
 const { userLanguage, userLanguageChange } = useLanguageStore((state) => state)
 const [mobileScreen, setMobileScreen] = useState();

 const handleLanguageChange = e => userLanguageChange(e.target.value);

 useEffect(() => {
  const screen = window.innerWidth < 768;
  setMobileScreen(screen);
 }, [])

 return (<select
  onChange={handleLanguageChange}
  value={userLanguage}
  className="cursor-pointer bg-transparent focus:border-transparent"
 >
  {Object.entries(languageOptions).map(([id, name]) => {
   console.log("id:", id, "name", name)
   return <option key={id} value={id}>{mobileScreen ? `${name.slice(0, 2).toUpperCase()}` : name}</option>
  })}
 </select>);
}

export default LangSelect;