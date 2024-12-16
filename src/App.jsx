import {useState} from "react"
import languages from "../assets/languages"

function App() {


  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <>
    <h2 className="mb-5">Learn Web Development</h2>
     <div className="container">
      <div>
      {
        languages.map((language) =>(

          <button key ={language.id} 
          className={`${activeLanguage===language? "btn-warning" : "btn-primary"} btn m-2` }
          onClick={() => setActiveLanguage(language)}>
          {language.title}
          </button>      
        ))
      }
      </div>
      {activeLanguage?
    
      (<div className="card">
        <h1>{activeLanguage.title}</h1>
        <p>{activeLanguage.description}</p>
      </div>): <p>nessun testo</p> }
     </div>
     
    </>
  )
}

export default App
