import { useState } from "react"
import languages from "../assets/languages"
import Card from "./components/Card"
import Button from "./components/Button"

function App() {


  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <>
      <header>
        <Button
          title="hello"
          buttonType="secondary"
          handleOnClick={() => { alert("ciao") }}
        />
        <Button
          title="Registrati"
          buttonType="secondary"
          handleOnClick={() => { alert("registrati") }}
        />
      </header>

      <h2 className="mb-5">Learn Web Development</h2>

      <main className="container">
        <div className="d-flex flex-column align-items-center">
          <nav>
            {/* RESET BUTTON */}
            <button title="Rset"
            buttonType="danger"
            handleOnClick={() => {setActiveLanguage(null)}}></button>

            {/* LISTA BOTTONI */}
            {
              languages.map((language) => (
                <Button
                  title={language.title}
                  buttonType={activeLanguage === language ? "btn-warning" : "btn-primary"}
                  handleOnClick={() => { setActiveLanguage(language) }}
                />
                // QUESTO E`IL COMPONENTE BOTTONE:
                // <button key ={language.id} 
                // className={`${activeLanguage===language? "btn-warning" : "btn-primary"} btn m-2` }//non confrontiamo due ogetti ma id
                // onClick={() => setActiveLanguage(language)}>
                // {language.title}
                // </button>      
              ))
            }
          </nav>
        </div>
      </main>

      {/* CARD COMPONENT */}
      <Card language={activeLanguage} />

    </>
  )
}

export default App
