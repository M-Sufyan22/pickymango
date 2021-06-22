import React, { useRef } from "react";
import { useLanguage } from "../../hooks/useLanguage";

const LanguageSwitch = () => {
  const { language, setEnglish, setArabic, english, arabic } = useLanguage();
  const id = useRef(Math.random().toString(36).slice(2));
  const onChange = (e) => {
    // if (e.target.checked) setEnglish();
    // else setArabic();
    console.log(e,"hii")
    googleTranslateElementInit()
  };
  function googleTranslateElementInit() {
    // new google.translate.TranslateElement({pageLanguage: 'ar'}, 'google_translate_element');
  }
  

  return (
    <>
      <input
        onChange={onChange}
        checked={language.id_ === english.id_}
        type="checkbox"
        id={id.current}
        className="lol-checkbox"
      />
      <label className="button" htmlFor={id.current}>
        <div className="knob"></div>
        <div className="subscribe">{arabic.shorthand}</div>
        <div className="alright">{english.shorthand}</div>
      </label>
    
    </>
  );
};

export default LanguageSwitch;
