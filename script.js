async function listarRepositorios(){
    const response = await fetch('https://api.github.com/orgs/google/repos', {
    method: 'GET',
})
    const containerRepositorios = document.querySelector('.cont-repositorios');
    

    const repositoriosObjeto = await response.json()
    repositoriosObjeto.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('repositorio')

        const nome = document.createElement('div');
        nome.textContent = element.name;
        nome.classList.add('nome-repositorio')

        const url = document.createElement('div');
        url.textContent = element.owner.url;
        url.classList.add('link-repositorio')

        const img = document.createElement('img');
        img.src = element.owner.avatar_url;
        img.classList.add('img-repostorio')

        div.append(nome);
        div.append(url);
        div.append(img);

        containerRepositorios.append(div);
    });

}

listarRepositorios();

