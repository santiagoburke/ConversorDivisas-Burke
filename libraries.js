const button = document.getElementById('send');
const form = document.getElementById('form');

button.addEventListener('click', () => {
    swal({
        title: 'Perfecto!',
        text: 'Tu mensaje fue enviado',
        icon: 'success',
        confirmButtonText: ''
    })
})

