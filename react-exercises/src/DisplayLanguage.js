import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const lang = {
  en: {
    CURRENT_LANG: "Current language is english",
  },
  it: {
    CURRENT_LANG: "La lingua selezionata è l'italiano",
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h2>{lang[language].CURRENT_LANG}</h2>
    </div>
  );
}

// export class DisplayLanguage extends React.Component {
//   render() {
//     return (
//         <div>
//             <LanguageContext.Consumer>
//                 {(language) => {
//                     return <h2>{lang[language].CURRENT_LANG}</h2> // ho messo h2 invece di h1 perché era meno fastidioso esteticamente
//                 }}
//             </LanguageContext.Consumer>
//         </div>
//     )
//   }
// }
