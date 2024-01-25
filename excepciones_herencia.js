class ErrorIdentificador extends Error{
}
class ErrorIdentificadorFatal extends ErrorIdentificador {

}

try {
    //throw new ErrorIdentificador("Error de identificador");
    throw new ErrorIdentificadorFatal("Error de identificador fatal");
} catch (e){
    (...)
} 
