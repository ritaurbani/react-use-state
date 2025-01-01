
function Button({title, buttonType, handleOnClick}) {
    // CHE COSA MI SERVE RICEVERE DA FUORI IN QUESTO COMPONENTE per poi mostrarlo?


    return (
        <>
            <button key={language.id}
                className={`btn m-2 btn-${buttonType}`}//non confrontiamo due ogetti ma id
                onClick={handleOnClick}>
                {title}
            </button>    
        </>
    )
}

export default Button
