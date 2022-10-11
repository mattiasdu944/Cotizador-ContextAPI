export function getDiferenciaYear (year){
    return new Date().getFullYear() - year;
}

export function calcMarca(marca){
    let increment;

    switch(marca){
        case '1':
            increment = 1.3;
            break;

        case '2':
            increment = 1.15;
            break;

        case '3':
            increment = 1.05
            break;
        default:
            break;
    }
    return increment;
}

export function calcPlan(plan){
    return (plan === '1'  ? 1.20 : 1.50)
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString(
        'en-US',{
            style: 'currency',
            currency: 'USD',
        }
    )
}