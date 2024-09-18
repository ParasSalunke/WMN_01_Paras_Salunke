document.querySelector('.dropdown-btn').addEventListener('click', function () {
    document.getElementById('dropdownMenu').classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.getElementById('dropdownMenu').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        document.getElementById('selectedFruit').textContent = `Selected Fruit: ${event.target.textContent}`;
    }
});