export function Formulario(props) {

    const {Tarea, handleSubmit, handleChange}=props

    return(
        <forms onSubmit handleSubmit={handleSubmit}>
            <input
            type="text"
            placeHolder="Tarea Nueva"
            onChange={handleChange}
            value={Tarea}/>
            <input
            type="Submit"
            className="btn"
            value="Añadir Tarea"
            onClick={handleSubmit}/>
        </forms>
    )
}