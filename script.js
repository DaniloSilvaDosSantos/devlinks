function toggleMode(){
    // trocar o modo escuro para o modo claro e vice-versa
    const html = document.documentElement;
    html.classList.toggle('light');

    //Pegar a tag img e trocar o src de acordo com o modo
    const img = document.querySelector('#profile img');
    if(html.classList.contains('light'))
    {
        img.setAttribute('src', './assets/avatar-light.jpg');
        img.setAttribute('alt', 'Foto da formatura de Danilo Silva dos Santos');
    }else
    {
        img.setAttribute('src', './assets/avatar.jpg');
        img.setAttribute('alt', 'Foto de Danilo Silva dos Santos');
    }
}