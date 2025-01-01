import languages from "../assets/languages"

function Card({language}) {
// CHE COSA MI SERVE RICEVERE DA FUORI IN QUESTO COMPONENTE per poi mostrarlo?


    return (
        <>
         <div className="card">
        {language? (// activeLanguage !== null? questo puoi mettere nella card, prima di card body che mostra testo
        <div className="card-body">
          <h2>{language.title}</h2>
          <p>{language.description}</p>
         </div>) : (
          <p>nessun testo</p>)}
      </div>
        </>
    )
}

export default Card
