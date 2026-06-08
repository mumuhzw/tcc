const links = document.querySelectorAll('.menu a');
const indicador = document.querySelector('.indicador');

function moverIndicador(link){
    indicador.style.width = link.offsetWidth + 'px';
    indicador.style.left = link.offsetLeft + 'px';
}

const ativo = document.querySelector('.menu a.ativo');

if(ativo){
    moverIndicador(ativo);
}

links.forEach(link => {

    link.addEventListener('click', () => {

        document
            .querySelector('.menu a.ativo')
            ?.classList.remove('ativo');

        link.classList.add('ativo');

        moverIndicador(link);

    });

});