import { createContext, useState } from "react";
import { calcMarca, calcPlan, formatearDinero, getDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();


const CotizadorProvider = ({children}) =>{

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = e => {
        setDatos({
            ...datos , [e.target.name]: e.target.value
        })
    }

    const [resultado, setResultado] = useState(0)

    const [loading, setLoading] = useState(false)

    const cotizarSeguro = () => {
        setLoading(true);

        //Base
        let resultado = 2000

        //Obtener diferencia de años
        //Por cada año restar 3%
        const diferencia = getDiferenciaYear(datos.year);
        resultado -=  (diferencia * 3 * resultado)/ 100
        
        // Americano incrementa el costo 15%
        //Europeo 30%
        //Asiatico 5%
        resultado *= calcMarca(datos.marca)

        // Basico 20%
        // Completo 50%
        resultado *= calcPlan(datos.plan)
        resultado = formatearDinero(resultado);

        setTimeout(() => {
            setResultado(resultado);
            setLoading(false);
        }, 3000)
    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                setError,
                error,
                cotizarSeguro,
                resultado,
                loading
            
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext