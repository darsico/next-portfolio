import { languageOptions } from "../../src/utils/language";
import { useLanguageStore } from "../../store/store";

const LangSelect = () => {
 const { userLanguage, userLanguageChange } = useLanguageStore((state) => state)

 const handleLanguageChange = e => userLanguageChange(e.target.value);

 return (<select
  onChange={handleLanguageChange}
  value={userLanguage}
  className="cursor-pointer bg-transparent focus:border-transparent"
 >
  {Object.entries(languageOptions).map(([id, name]) => {
   return <option key={id} value={id}>{name.slice(0, 2).toUpperCase()}</option>
  })}
 </select>);
}

export default LangSelect;
