import { useCallback, useMemo, useRef } from 'react';
import { MARCAS, PLANES } from '../constants';
import useCotizador from '../hooks/useCotizador'


const Resultado = () => {
    const { resultado,datos } = useCotizador();
    const { marca, plan, year } = datos

    const [nomMarca] = useMemo( () =>
        MARCAS.filter(m => m.id === Number(marca)), 
        [resultado]
    )

    const [nomPlan] = useMemo( () =>
        PLANES.filter(p => p.id === Number(plan)),
        [resultado]
    )

    const yearRef = useRef(year)

    if(resultado === 0 ) return null;
    return (
        <div className="bg-gray-100 text-center mt-5 p-5">
            <h2 className='text-indigo-400 font-black text-3xl'>
                Resumen
            </h2>
            <p>
                <span className='font-bold'>
                    Marca:{' '}
                </span>
                {nomMarca.nombre}
            </p>
            <p>
                <span className='font-bold'>
                    Plan:{' '}
                </span>
                {nomPlan.nombre}
            </p>
            <p>
                <span className='font-bold'>
                    Año del Auto:{' '}
                </span>
                {yearRef.current}
            </p>
            <p className='font-bold my-2 text-2xl'>
                    Total Cotizacion: {resultado}
            </p>
        </div>
    )
}

export default Resultado