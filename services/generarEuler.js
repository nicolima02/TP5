
export const generarEuler = (cola, T) =>{
    let t = 0;
    let h = 0.1;
    let t1 = 0;
    let dD = 0;
    let dD1 = 0;
    let c = cola
    //=C_+(0.2*E4)+POTENCIA(D4;2)
    while(dD <= 100){
        t = t1; // -----> asigna para el t siguiente
        t1 = t+h; // -------> genera el tiempo+1
        dD = dD1; // ------> funcion de la linea
        dD1 = dD + h *(c+0.2*T+t**2); // --------> funcion de la siguietne
    }
    return parseFloat(t).toFixed(2);
}