const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");

function btnEncriptar(){
    const textoencriptado = encriptar(textArea.value);
    mensaje.value = textoencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.classList.add("active");
}
    
function btnDesencriptar(){
    const textodesencriptado = desencriptar(textArea.value);
    mensaje.value = textodesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar(){
    textArea.value = mensaje.value
    text = textArea.value
    navigator.clipboard.writeText(text)
    mensaje.value = ""

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
     stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }  
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }  
    }
    return stringDesencriptada
}