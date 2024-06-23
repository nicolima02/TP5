
export const generarEuler = (cola, corte) =>{
    let t = 0;
    let h = 0.1;
    let T = 0;
    let t1 = 0;
    let dT = 0;
    let dT1 = 0;
    let c = cola
    //=C_+(0.2*E4)+POTENCIA(D4;2)
    while(T <= corte){
        t = t1; // -----> asigna para el t siguiente
        T = dT1; // -------> asigna para el T siguiente
        t1 = t+h; // -------> genera el tiempo+1
        dT = c+(0.2*T)+t**2; // ------> funcion de la linea
        dT1 = T + h *(dT); // --------> funcion de la siguietne
    }
    return parseFloat(t).toFixed(2);
}