import { createContext, useState, useContext } from "react";

const LanguageContext = createContext({ language: "es", changeLanguage: () => {} });

export function useLanguageContext() {
    return useContext(LanguageContext);
}

export function LanguageProvider({children}) {

    const [language, setLanguage] = useState("es");

    const changeLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return(
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContext;
