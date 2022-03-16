document.querySelectorAll('[link]').forEach(
    link => { link.onclick = function(e) {
        e.preventDefault()
        const conteudo = document.getElementById('main')
        fetch(link.getAttribute('link'))
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
    }

})