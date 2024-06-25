import { FinAtencionAprendiz, FinAtencionVeteranoB, FinAtencionVeteranoA, Control } from "../clases/clases.js";
import {generarRandom, generarRandomUniforme} from "../services/generarRandom.js";
import {generarEuler} from '../services/generarEuler.js';

export  const finAtencion = (reloj, eventos, peluquero,datosForm, dia, cola) =>{
    if (peluquero.peluquero === "Aprendiz"){
        //let rnd = generarRandom(); 
        //let demora = generarRandomUniforme(rnd, datosForm.aprendiz[1], datosForm.aprendiz[2]);
        let demora = parseFloat(generarEuler(cola.length,datosForm.corte[0]));
        let finAtencion = parseFloat(reloj + demora);
        const colaActual = cola.map((cliente) => ({...cliente}))
        let finAtencionAprendiz = new FinAtencionAprendiz(colaActual.length,demora, finAtencion);
        let control =  new Control(finAtencionAprendiz,dia,finAtencion);
        eventos.push(control);
    }else if (peluquero.peluquero === "Veterano A"){
        //let rnd = generarRandom();
        //let demora = generarRandomUniforme(rnd, datosForm.veteranoA[1], datosForm.veteranoA[2]);
        let demora = parseFloat(generarEuler(cola.length,datosForm.corte[1]));
        let finAtencion = parseFloat((reloj + demora));
        const colaActual = cola.map((cliente) => ({...cliente}))
        let finAtencionVeteranoA = new FinAtencionVeteranoA(colaActual.length, demora, finAtencion);
        let control =  new Control(finAtencionVeteranoA,dia,finAtencion);
        eventos.push(control);
        
    }else{
        //let rnd = generarRandom();
        //let demora = generarRandomUniforme(rnd, datosForm.veteranoB[1], datosForm.veteranoB[2]);
        let demora = parseFloat(generarEuler(cola.length,datosForm[1]));
        let finAtencion = parseFloat((reloj + demora));
        const colaActual = cola.map((cliente) => ({...cliente}))
        let finAtencionVeteranoB = new FinAtencionVeteranoB(colaActual.length, demora, finAtencion);
        let control =  new Control(finAtencionVeteranoB,dia,finAtencion);
        eventos.push(control);
        
    }
}