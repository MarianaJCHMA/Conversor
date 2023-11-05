const entrada = document.getElementById("entrada");
const boton = document.getElementById("btn");
const salida = document.getElementById("salida");
const opciones = document.querySelectorAll('input[name="conversion"]');

boton.addEventListener("click", () => {
    validarEntrada();

    const opcionSeleccionada = getOpcionSeleccionada();
    let resultado = "";

    if (opcionSeleccionada === "decimal") {
        resultado = decimalABinario(entrada.value);
    } else if (opcionSeleccionada === "binario") {
        resultado = binarioADecimal(entrada.value);
    } else if (opcionSeleccionada === "hexadecimal") {
        resultado = hexadecimalADecimal(entrada.value);
    }

    salida.value = resultado;
});

const validarEntrada = () => {
    if (entrada.value === "") {
        alert("Ingresa datos");
    }
};

const getOpcionSeleccionada = () => {
    for (const opcion of opciones) {
        if (opcion.checked) {
            return opcion.value;
        }
    }
};

// Función para convertir de decimal a binario
const decimalABinario = (decimal) => {
    return (decimal >>> 0).toString(2);
};

// Función para convertir de binario a decimal
const binarioADecimal = (binario) => {
    return parseInt(binario, 2);
};

// Función para convertir de decimal a hexadecimal
const decimalAHexadecimal = (decimal) => {
    return decimal.toString(16).toUpperCase();
};

// Función para convertir de hexadecimal a decimal
const hexadecimalADecimal = (hexadecimal) => {
    return parseInt(hexadecimal, 16);
};
