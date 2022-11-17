const formulario = document.getElementById('formulario');
const inputFormulario = document.getElementById('inputFormulario');

const formulariocliente = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const letraCliente = inputFormulario.value.toLowerCase()
        //console.log(letraCliente);
        const arrayfiltrado = data.filter(item => {
            const letraApi = item.name.toLowerCase();
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        banderillas(arrayfiltrado);
    })
}

