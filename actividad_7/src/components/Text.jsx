import { useLanguageContext } from "./LanguageContext";

function Text() {

    const {language, changeLanguage} = useLanguageContext();

    return(
        <>
            <p>{language === "es" ? "Aqui está el texto" : "Here is the text"}</p>
            <button onClick={changeLanguage}>{language === "es" ? "English" : "Español"}</button>
        </>
    );
}

export default Text;