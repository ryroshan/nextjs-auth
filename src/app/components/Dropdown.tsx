import React, { useState } from 'react'

const Dropdown = () => {
    const [lang, setLang] = useState('en');
    console.log(lang);

    function onchangeHandle(e: React.ChangeEvent<HTMLSelectElement>){
        setLang(e.target.value)
    }
    
  return (
    <div>
      <select value={lang} onChange={onchangeHandle}>
        <option value='en'>
            English
        </option>
        <option value='es'>
            Spanish
        </option>
      </select>
    </div>
  )
}

export default Dropdown
