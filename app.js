const convertirCantidad = document.querySelector('#convertir');
const seleccion = document.querySelectorAll('.moneda select');
primeraMoneda = document.querySelector('#primera select');
segundaMoneda = document.querySelector('#segunda select');

for (let i = 0; i < seleccion.length; i++) {
    for(pais in listaPaises) {
        let seleccionada; 
        if (i == 0){
            seleccionada = pais == 'ARS' ? 'selected' : '';
        } else if (i == 1){
            seleccionada = pais == 'USD' ? 'selected' : '';
        }
        let opciones = `<option value='${pais}' ${seleccionada}>${pais}</option>`
        seleccion[i].insertAdjacentHTML('beforeend', opciones); 
    }
    
}

function convertir() {
    const cantidad = document.querySelector('.cantidad input');
    let cantidadValor = cantidad.value;
    if (cantidadValor == '' || cantidadValor == '0') {
        cantidad.value = '1';
        cantidadValor = 1; 
    }
    let api = `https://v6.exchangerate-api.com/v6/ad48dc314b59cfa96bc535a5/latest/${primeraMoneda.value}`
    fetch(api)
    .then(response => response.json())
    .then(result => {
        let valorMoneda = result.conversion_rates[segundaMoneda.value];
        let total = (cantidadValor * valorMoneda).toFixed(2); 
        const resultadoTxt = document.querySelector('#resultado');
        resultadoTxt.innerText = `Resultado: ${total}`;
    })

}

convertirCantidad.addEventListener('click', convertir);



