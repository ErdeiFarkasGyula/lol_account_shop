const accounts = [
    {
        "splash": "Zed",
        "server": "EUNE",
        "username": "PixelVoyager23",
        "rank": "GOLD II",
        "level": 123,
        "skins": [10, 5, 3, 2, 1, 0, 0]
    },
    {
        "splash": "Fiora",
        "server": "EUNE",
        "username": "StarlightNomad",
        "rank": "GRANDMASTER 895LP",
        "level": 538,
        "skins": [12, 8, 5, 3, 2, 1, 0]
    },
    {
        "splash": "Hwei",
        "server": "KR",
        "username": "EchoFrost99",
        "rank": "MASTER",
        "level": 476,
        "skins": [15, 10, 6, 4, 2, 1, 0]
    },
    {
        "splash": "Kha'zix",
        "server": "TR",
        "username": "KebabMan",
        "rank": "IRON IV",
        "level": 6969,
        "skins": [8, 5, 3, 2, 1, 0, 0]
    },
    {
        "splash": "Garen",
        "server": "BR",
        "username": "LunarSpecterX",
        "rank": "EMERALD III",
        "level": 547,
        "skins": [10, 7, 4, 3, 2, 1, 0]
    },
    {
        "splash": "Lulu",
        "server": "EUW",
        "username": "LuluFeetEnjoyer",
        "rank": "CHALLENGER 1677LP",
        "level": 32,
        "skins": [20, 15, 10, 5, 3, 2, 1]
    }
];

function loadFilteredAccounts(_accounts) {
    const accountsContainer = document.getElementById('accountHolder');

    let formated = _accounts.map(account => `
        <div class="account">
            <img src="images/splashArts/${account.splash}.jpg" alt="${account.splash}" class="account-image">
            <hr>
            <div class="accountText">
                <p><strong>Felhasználónév:</strong> ${account.username}</p>
                <p><strong>Rang:</strong> ${account.rank}</p>
                <p><strong>Szint:</strong> ${account.level}</p>
                <p><strong>Szerver:</strong> ${account.server}</p>
                <div class="skins">
                    <img src="images/skinTiers/Standard_Skin.png" alt="Standard_Skin" class="skinTier"> ${account.skins[0]}
                    <img src="images/skinTiers/Epic_Skin.png" alt="Epic_Skin" class="skinTier"> ${account.skins[1]}
                    <img src="images/skinTiers/Legendary_Skin.png" alt="Legendary_Skin" class="skinTier"> ${account.skins[2]}
                    <img src="images/skinTiers/Mythic_Skin.png" alt="Mythic_Skin" class="skinTier"> ${account.skins[3]}
                    <img src="images/skinTiers/Ultimate_Skin.png" alt="Ultimate_Skin" class="skinTier"> ${account.skins[4]}
                    <img src="images/skinTiers/Exalted_Skin.png" alt="Exalted_Skin" class="skinTier"> ${account.skins[5]}
                    <img src="images/skinTiers/Transcendent_Skin.png" alt="Transcendent_Skin" class="skinTier"> ${account.skins[6]}
                </div>
            </div>
            <hr>
            <div class="accountText accountPrice">
                <p class="price"><strong>Ár:</strong> 9999 Ft</p>
            </div>
            <hr>
            <button class="purchaseButton" onClick="purchaseAccount(${account.username});">Vásárlás</button>
        </div>
        `);


    accountsContainer.innerHTML = "";
    accountsContainer.innerHTML += formated.join("");
}

document.addEventListener('DOMContentLoaded', () => {
    loadFilteredAccounts(accounts);
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        const usernameInput = document.getElementById('usernameSearch').value.toLowerCase();
        const rank = document.getElementById('rankSearch');
        const minLevel = document.getElementById('minLevelSearch');
        const maxLevel = document.getElementById('maxLevelSearch');
        const server = document.getElementById('serverSearch');
        const minPrice = document.getElementById('minPriceSearch');
        const maxPrice = document.getElementById('maxPriceSearch');

        let selectedRanks = Array.from(rank.selectedOptions).map(option => option.value);
        let selectedServers = Array.from(server.selectedOptions).map(option => option.value)

        var filteredAccounts = accounts.filter(account =>
            account.username.toLowerCase().includes(usernameInput)
        );
        loadFilteredAccounts(filteredAccounts);
    });
});



