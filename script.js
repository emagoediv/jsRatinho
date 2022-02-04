let audios = [
    {caminho:'./audios/projeto_ratinho_audios_grito.mp3', legenda:'GRITOO'},
    {caminho:'./audios/projeto_ratinho_audios_jesus.mp3', legenda:'Jesus'},
    {caminho:'./audios/projeto_ratinho_audios_nao-e-o-pai.mp3', legenda:'Ele NAO é o pai'},
    {caminho:'./audios/projeto_ratinho_audios_pare.mp3', legenda:'PARE'},
    {caminho:'./audios/projeto_ratinho_audios_que-isso-meu-filho.mp3', legenda:'que isso meu filho'},
    {caminho:'./audios/projeto_ratinho_audios_ratinhoo.mp3', legenda:'ratinhooo'},
    {caminho:'./audios/projeto_ratinho_audios_uepa.mp3', legenda:'EPAAA'},
    {caminho:'./audios/projeto_ratinho_audios_vixi-ratinho.mp3', legenda:'VIXI'},
    {caminho:'./audios/projeto_ratinho_audios_xaropinho.mp3', legenda:'xaropinho'}
]

let botoes = document.querySelectorAll('.botao')
let legendas = document.querySelectorAll('p')

for(let i = 0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda
    botoes[i].setAttribute('data-item', i)
}

let audioTag = document.querySelector('audio')

botoes.forEach(botao => {
    botao.addEventListener('click', () =>{
        let som = audios[botao.getAttribute('data-item')]

        audioTag.setAttribute('src', som.caminho)

        audioTag.addEventListener('loadeddata', () => {
            audioTag.play()
        })
    })
    botao.addEventListener('', () =>{
        let som = audios[botao.getAttribute('data-item')]

        audioTag.setAttribute('src', som.caminho)

        audioTag.addEventListener('loadeddata', () => {
            audioTag.play()
        })
    })
})