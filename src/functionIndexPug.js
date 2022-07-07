const nombre = document.getElementById('nombre')
const numero = document.getElementById('numero')
const buttonAgreged = document.getElementById('button-agreged')
const buttonDelete = document.getElementsByClassName('borrar')

buttonAgreged.addEventListener('click', function () {
    window.location.href = `/agregar/${nombre.value}/${numero.value}`
})

for (let i of buttonDelete) {

    i.addEventListener('click', function () {
        let id = this.getAttribute('id')
        window.location.href = `/borrar/${id}`
    })
}
