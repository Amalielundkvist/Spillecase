// Her skal vi skrive vores søge-, sortering- og filtreringskoder
function normaliserSvaerhedsgrad(value) {
    const normalized = value?.trim().toLowerCase();
    const aliases = { easy: 'let', medium: 'middel', hard: 'svær' };
    return aliases[normalized] || normalized;
}

function filtrerProdukter() {
    // Lokal variabel som er en kopi af produktlisten.
    let filteredProducts = [...products];

// Håndtering af søgefelt
const
    searchText = document.getElementById("search-input").value.toLowerCase().trim();


if (searchText) {
    filteredProducts = filteredProducts.filter(product =>
    product.title.toLowerCase().includes(searchText) ||
    product.description.toLowerCase().includes(searchText) ||
    product.category.some(category => category.toLowerCase().includes(searchText))
    );
}


// Håndtering af filtreringspanel
const
    categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
const
    difficulties = Array.from(document.querySelectorAll('input[name="Sværhedsgrad"]:checked'))
        .map(cb => normaliserSvaerhedsgrad(cb.value));
const onlyAvailable = document.querySelector('input[name="Ledige spil"]:checked') !== null;
const
    playerRanges = Array.from(document.querySelectorAll('input[name="Antal spillere"]:checked'))
        .map(cb => cb.value.split('-').map(Number));

if (categories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
    product.category.some(category => categories.includes(category))
    );
}
if (difficulties.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
        difficulties.includes(normaliserSvaerhedsgrad(product.sværhedsgrad))
    );
}
if (onlyAvailable) {
    filteredProducts = filteredProducts.filter(product => product.ledig === true);
}
if (playerRanges.length > 0) {
    filteredProducts = filteredProducts.filter(product => {
        const playerCount = product.antalSpillere?.match(/\d+/g)?.map(Number);
        if (!playerCount || playerCount.length < 2) return false;

        const [minPlayers, maxPlayers] = playerCount;
        return playerRanges.some(([selectedMin, selectedMax]) =>
            minPlayers <= selectedMax && maxPlayers >= selectedMin
        );
    });
}

const sorterEfter = document.getElementById("predefined-search").value;
if (sorterEfter === "tid-stigende") {
    filteredProducts.sort((a, b) => Number.parseInt(a.tid, 10) - Number.parseInt(b.tid, 10));
}
if (sorterEfter === "tid-faldende") {
    filteredProducts.sort((a, b) => Number.parseInt(b.tid, 10) - Number.parseInt(a.tid, 10));
}




displayProducts(filteredProducts);
}

document.getElementById("search-input").addEventListener("input", filtrerProdukter);
document.getElementById("predefined-search").addEventListener("change", filtrerProdukter);
document.getElementById('apply-filters').addEventListener('click', function () {
    filtrerProdukter();
    closeFilterPanel();
});
