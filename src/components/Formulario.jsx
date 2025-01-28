import {useForm} from "react-hook-form";

const Formulario = () =>{

    const {register, handleSubmit } = useForm();
    return(
        <>
        <h2>Formulario</h2>
        <form >
            <div>
                <label >Nombre</label>
                <input type="text" name="" />
            </div>
            <div>
                <label >Direccion</label>
                <input type="text" name="" />
            </div>
            <div>
                <label >Edad</label>
                <input type="text" name="" />
            </div>
            <div>
                <label htmlFor="">Pais</label>
                <select name="" id="">
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">francia</option>

                </select>
            </div>
        </form>
        
        </>


    )
 }

 export default Formulario;