document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchCloseBtn = document.getElementById('searchClose');

    for (var i = 0; i < searchBtn.length; i++) {
        searchBtn[i].addEventListener('click', () => {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded','true');
            searchInput.focus();
        })

        searchCloseBtn.addEventListener('click', () => {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.remove('open');
            this.setAttribute('aria-expanded','false');
        })
    }
})