import React from "react";
import { LanguageContext } from "./LanguageContext";

const lang = {
    en: {
        CURRENT_LANG: "Hello World!"
    },
    it: {
        CURRENT_LANG: "Ciao Mondo!"
    }
}

export class DisplayLanguage extends React.Component {
  render() {
    return (
        <div>
            <LanguageContext.Consumer>
                {(language) => {
                    return <h3>{lang[language].CURRENT_LANG}</h3>
                }}
            </LanguageContext.Consumer>
        </div>
    )
  }
}
