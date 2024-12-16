import {useState} from "react"
import languages from "../assets/languages"

function App() {

 

  const [activeLanguage, setActiveLanguage] = useState(languages[0])

  return (
    <>
    <h2 className="mb-5">Learn Web Development</h2>
     <div className="container">
      <div>
      {
        languages.map((language) =>(
          <button key ={language.id} className="btn btn-primary m-2" onClick={() => {setActiveLanguage(language)}}>{language.title}</button>      
        ))
      }
      </div>

      <div className="card">
      
      </div>
     </div>
    </>
  )
}

export default App
