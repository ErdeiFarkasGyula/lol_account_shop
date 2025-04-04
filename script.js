const accounts = [
    {
        "splash": "Zed",
        "server": "EUNE",
        "username": "PixelVoyager23",
        "rank": "GOLD II",
        "level": 123,
        "skins": [10, 5, 3, 2, 1, 0, 0],
        "price": 15000
    },
    {
        "splash": "Fiora",
        "server": "EUNE",
        "username": "StarlightNomad",
        "rank": "GRANDMASTER 895LP",
        "level": 538,
        "skins": [12, 8, 5, 3, 2, 1, 0],
        "price": 50000
    },
    {
        "splash": "Hwei",
        "server": "KR",
        "username": "EchoFrost99",
        "rank": "MASTER",
        "level": 476,
        "skins": [15, 10, 6, 4, 2, 1, 0],
        "price": 40000
    },
    {
        "splash": "Kha'zix",
        "server": "TR",
        "username": "KebabMan",
        "rank": "IRON IV",
        "level": 6969,
        "skins": [8, 5, 3, 2, 1, 0, 0],
        "price": 10000
    },
    {
        "splash": "Garen",
        "server": "BR",
        "username": "LunarSpecterX",
        "rank": "EMERALD III",
        "level": 547,
        "skins": [10, 7, 4, 3, 2, 1, 0],
        "price": 30000
    },
    {
        "splash": "Lulu",
        "server": "EUW",
        "username": "LuluFeetEnjoyer",
        "rank": "CHALLENGER 1677LP",
        "level": 32,
        "skins": [20, 15, 10, 5, 3, 2, 1],
        "price": 60000
    },
    {
        "splash": "Ahri",
        "server": "NA",
        "username": "FoxfireQueen",
        "rank": "PLATINUM I",
        "level": 250,
        "skins": [18, 12, 8, 5, 3, 2, 1],
        "price": 25000
    },
    {
        "splash": "Yasuo",
        "server": "EUNE",
        "username": "WindSamurai",
        "rank": "DIAMOND IV",
        "level": 300,
        "skins": [14, 9, 6, 4, 2, 1, 0],
        "price": 35000
    },
    {
        "splash": "Jinx",
        "server": "EUW",
        "username": "ChaosBlaster",
        "rank": "SILVER III",
        "level": 150,
        "skins": [10, 7, 5, 3, 2, 1, 0],
        "price": 12000
    },
    {
        "splash": "Thresh",
        "server": "KR",
        "username": "SoulCollector",
        "rank": "CHALLENGER 2000LP",
        "level": 600,
        "skins": [25, 20, 15, 10, 5, 3, 2],
        "price": 70000
    },
    {
        "splash": "Ezreal",
        "server": "NA",
        "username": "ArcaneExplorer",
        "rank": "GOLD IV",
        "level": 180,
        "skins": [12, 8, 6, 4, 2, 1, 0],
        "price": 18000
    },
    {
        "splash": "Leona",
        "server": "BR",
        "username": "SolarGuardian",
        "rank": "BRONZE II",
        "level": 90,
        "skins": [8, 5, 3, 2, 1, 0, 0],
        "price": 8000
    }
];

function loadFilteredAccounts(_accounts) {
    const accountsContainer = document.getElementById('accountHolder');

    let formated = _accounts.map(account => `
        <div class="account">
            <img src="images/splashArts/${account.splash}.jpg" alt="${account.splash}" class="account-image">
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
            <div class="accountText accountPrice">
                <p class="price"><strong>Ár:</strong>  ${account.price} Ft</p>
            </div>
            <button class="purchaseButton" onClick="purchaseAccount(${account.username});">Vásárlás</button>
        </div>
        `);


    accountsContainer.innerHTML = "";
    accountsContainer.innerHTML += formated.join("");
}

document.addEventListener('DOMContentLoaded', () => {
    loadFilteredAccounts(accounts);
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', () => { 
        loadFilteredAccounts(accounts);
    });

    searchButton.addEventListener('click', () => {
        const usernameInput = document.getElementById('usernameSearch').value.toLowerCase();
        const rank = document.getElementById('rankSearch');
        const minLevel = document.getElementById('minLevelSearch');
        const maxLevel = document.getElementById('maxLevelSearch');
        const server = document.getElementById('serverSearch');
        const minPrice = document.getElementById('minPriceSearch');
        const maxPrice = document.getElementById('maxPriceSearch');

        let selectedRanks = Array.from(rank.selectedOptions).map(option => option.value);
        let selectedServers = Array.from(server.selectedOptions).map(option => option.value);

        var filteredAccounts = accounts.filter(account =>
            account.username.toLowerCase().includes(usernameInput)
        );

        if (selectedRanks.length > 0) {
            filteredAccounts = filteredAccounts.filter(account =>
                selectedRanks.includes(account.rank)
            );
        }

        if (minLevel.value != "") {
            filteredAccounts = filteredAccounts.filter(account =>
                account.level >= parseInt(minLevel.value)
            );
        }

        if (maxLevel.value != "") {
            filteredAccounts = filteredAccounts.filter(account =>
                account.level >= parseInt(maxLevel.value)
            );
        }

        if (selectedServers.length > 0) {
            filteredAccounts = filteredAccounts.filter(account =>
                selectedServers.includes(account.server)
            );
        }

        if (minPrice.value != "") {
            filteredAccounts = filteredAccounts.filter(account =>
                account.price >= parseInt(minPrice.value)
            );
        }

        if (maxPrice.value != "") {
            filteredAccounts = filteredAccounts.filter(account =>
                account.price <= parseInt(maxPrice.value)
            );
        }

        loadFilteredAccounts(filteredAccounts);
    });
});



