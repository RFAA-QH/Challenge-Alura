const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    const texto = document.getElementById('inputText').value.toLowerCase();
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        if (diccionario[texto[i]]) {
            resultado += diccionario[texto[i]];
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('outputText').value = resultado;
}

function desencriptar() {
    let texto = document.getElementById('inputText').value.toLowerCase();
    
    for (let letra in diccionario) {
        texto = texto.replaceAll(diccionario[letra], letra);
    }

    document.getElementById('outputText').value = texto;
}

function copiarTexto() {
    const textoCopiado = document.getElementById('outputText');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
        alert('No se pudo copiar el texto. Por favor, cópialo manualmente.');
    }
}