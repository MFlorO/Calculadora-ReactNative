import { useRef, useState } from "react"


const useCalculadora = () => {

    const [numeroAnterior, setnumeroAnterior] = useState('0')
    const [numero, setnumero] = useState('0')
  
    const ultimaOperacion = useRef()
  
    const limpiar = () => {
      setnumero('0')
      setnumeroAnterior('0')
    }
  
    const armarNumero = ( numeroTexto ) => {
      //No aceptar doble .
      if(numero.includes('.') && numeroTexto === '.') return;
  
      if(numero.startsWith('0') || numero.startsWith('-0')) {
        
        if(numeroTexto === '.'){                                   //Punto decimal
          setnumero(numero + numeroTexto)   
        }else if(numeroTexto === '0' && numero.includes('.')){    //Otro punto y hay un cero
          setnumero(numero + numeroTexto) 
        }else if(numeroTexto !== '0' && !numero.includes('.')){   //Si es diferente de cero y no tiene punto
          setnumero(numeroTexto)
        }else if(numeroTexto === '0' && !numero.includes('.')){   //Si es diferente de cero y no tiene punto
          setnumero(numero)
        }else{
          setnumero(numero + numeroTexto)  
        }
  
      }else{
        setnumero(numero + numeroTexto) 
      }
    }
  
    const PositivoNegativo = () => {
      if(numero.includes(('-'))){
        setnumero(numero.replace('-', ''))
      }else{
        setnumero('-' + numero)
      }
    }
  
    const del = () => {
  
      const numeroSinElUltimoCaracter = numero.substring(0, numero.length - 1);
  
      if(numeroSinElUltimoCaracter === "" || numeroSinElUltimoCaracter === "-" ){
        setnumero('0')
      }else{      
        setnumero(numeroSinElUltimoCaracter)
      }
  
    }
  
  
    const cambiarNumAnterior = () => {
  
      if(numero.endsWith('.')){
        setnumeroAnterior(numero.slice(0,-1))
      }else{
        setnumeroAnterior(numero)
      }
      setnumero('0')
    }
  
    const btnSumar = () => {
      cambiarNumAnterior()
      ultimaOperacion.current = 'sumar'
    }
  
    const btnRestar = () => {
      cambiarNumAnterior()
      ultimaOperacion.current = 'restar'
    }
    const btnMultiplicar = () => {
      cambiarNumAnterior()
      ultimaOperacion.current = 'multiplicar'
    }
    const btnDividir = () => {
      cambiarNumAnterior()
      ultimaOperacion.current = 'dividir'
    }
  
    const calcular = () => {

      if(numero.startsWith('0')) return
  
      const numero1 = Number(numero);
      const numero2 = Number(numeroAnterior);

      
      switch(ultimaOperacion.current){
  
        case 'sumar': 
          setnumero(`${numero1 + numero2}`)
          break;
  
        case 'restar':
          setnumero(`${numero2 - numero1}`)
          break;
          
        case 'multiplicar':
          setnumero(`${numero1 * numero2}`)
          break;
          
        case 'dividir':
          setnumero(`${numero2 / numero1}`)
          break;
        
        default:
          break;
      }

      setnumeroAnterior('0')
    }


  return {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    PositivoNegativo,
    del,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular
  }
}

export default useCalculadora