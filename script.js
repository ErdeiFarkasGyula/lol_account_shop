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
                <p><strong>Szerver:</strong> ${account.server}</p>
                <p><strong>Rang:</strong> ${account.rank}</p>
                <p><strong>Szint:</strong> ${account.level}</p>
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
                <p class="price"><strong>Ár:</strong>  ${calculateAccountPrice(account)} Ft</p>
            </div>
            <button class="purchaseButton" onClick="purchaseAccount(${account.username});">Vásárlás</button>
        </div>
        `);


    accountsContainer.innerHTML = "";
    accountsContainer.innerHTML += formated.join("");
}

function calculateAccountPrice(account) {
    let price = 2000;
    price += account.level * 50; // 100 Ft per level
    price += account.skins[0] * 200;
    price += account.skins[1] * 500; // Epic Skin
    price += account.skins[2] * 1000; // Legendary Skin
    price += account.skins[3] * 2000; // Mythic Skin
    price += account.skins[4] * 5000; // Ultimate Skin
    price += account.skins[5] * 25000; // Exalted Skin
    price += account.skins[6] * 80000; // Transcendent Skin
    price += account.rank.split(" ")[0] === "CHALLENGER" ? 10000 : 0; // Challenger rank bonus
    price += account.rank.split(" ")[0] === "GRANDMASTER" ? 5000 : 0; // Grandmaster rank bonus
    price += account.rank.split(" ")[0] === "MASTER" ? 2000 : 0; // Master rank bonus
    price += account.rank.split(" ")[0] === "DIAMOND" ? 1000 : 0; // Diamond rank bonus
    price += account.rank.split(" ")[0] === "DIAMOND" ? 500 : 0; // Diamond rank bonus
    price += account.rank.split(" ")[0] === "EMERALD" ? 300 : 0; // Emerald rank bonus
    price += account.rank.split(" ")[0] === "PLATINUM" ? 500 : 0; // Platinum rank bonus
    price += account.rank.split(" ")[0] === "GOLD" ? 200 : 0; // Gold rank bonus
    price += account.rank.split(" ")[0] === "SILVER" ? 100 : 0; // Silver rank bonus
    price += account.rank.split(" ")[0] === "BRONZE" ? 50 : 0; // Bronze rank bonus
    price += account.rank.split(" ")[0] === "IRON" ? 25 : 0; // Iron rank bonus
    price += account.rank === "IRON IV" ? 5000 : 0; // Unranked rank bonus
    
    price += account.username.includes("Feet") ? 10000 : 0; // Feet bonus
    price += account.username.includes("Kebab") ? 5000 : 0; // Kebab bonus

    return price;
}

document.addEventListener('DOMContentLoaded', () => {
    loadFilteredAccounts(accounts);
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', () => { 
        document.querySelectorAll('input[type="text"], input[type="number"], select').forEach(input => {
            if (input.type === 'text' || input.type === 'number') {
                input.value = '';
            } else if (input.type === 'select-multiple') {
                Array.from(input.options).forEach(option => option.selected = false);
            }
        });
        loadFilteredAccounts(accounts);
    });

    searchButton.addEventListener('click', () => {
        const usernameInput = document.getElementById('usernameSearch').value.toLowerCase();
        const rank = document.getElementById('rankSearch');
        const minLevel = document.getElementById('minLevelSearch').value;
        const maxLevel = document.getElementById('maxLevelSearch').value;
        const server = document.getElementById('serverSearch');
        const minPrice = document.getElementById('minPriceSearch');
        const maxPrice = document.getElementById('maxPriceSearch');

        const minStandardSkins = document.getElementById('minStandardSkins').value;
        const maxStandardSkins = document.getElementById('maxStandardSkins').value;
        const minEpicSkins = document.getElementById('minEpicSkins').value;
        const maxEpicSkins = document.getElementById('maxEpicSkins').value;
        const minLegendarySkins = document.getElementById('minLegendarySkins').value;
        const maxLegendarySkins = document.getElementById('maxLegendarySkins').value;
        const minMythicSkins = document.getElementById('minMythicSkins').value;
        const maxMythicSkins = document.getElementById('maxMythicSkins').value;
        const minUltimateSkins = document.getElementById('minUltimateSkins').value;
        const maxUltimateSkins = document.getElementById('maxUltimateSkins').value;
        const minExaltedSkins = document.getElementById('minExaltedSkins').value;
        const maxExaltedSkins = document.getElementById('maxExaltedSkins').value;
        const minTranscendentSkins = document.getElementById('minTranscendentSkins').value;
        const maxTranscendentSkins = document.getElementById('maxTranscendentSkins').value;

        let selectedRanks = Array.from(rank.selectedOptions).map(option => option.value);
        let selectedServers = Array.from(server.selectedOptions).map(option => option.value);

        var filteredAccounts = accounts;

        if (usernameInput != "") {
            filteredAccounts = accounts.filter(account =>
                account.username.toLowerCase().includes(usernameInput)
            );
        }

        console.log(selectedRanks);
        if (selectedRanks.length > 0) {
            filteredAccounts = filteredAccounts.filter(account =>
                selectedRanks.includes(account.rank.split(" ")[0])
            );
        }
        
        if (minLevel != "") {
            filteredAccounts = filteredAccounts.filter(account =>
                account.level >= parseInt(minLevel)
            );
        }

        if (maxLevel != "") {
            filteredAccounts = filteredAccounts.filter(account =>
                account.level <= parseInt(maxLevel)
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

        //SKINS

        if (minStandardSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[0] >= parseInt(minStandardSkins)
            );
        }

        if (maxStandardSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[0] <= parseInt(maxStandardSkins)
            );
        }

        if (minEpicSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[1] >= parseInt(minEpicSkins)
            );
        }

        if (maxEpicSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[1] <= parseInt(maxEpicSkins)
            );
        }

        if (minLegendarySkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[2] >= parseInt(minLegendarySkins)
            );
        }

        if (maxLegendarySkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[2] <= parseInt(maxLegendarySkins)
            );
        }

        if (minMythicSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[3] >= parseInt(minMythicSkins)
            );
        }

        if (maxMythicSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[3] <= parseInt(maxMythicSkins)
            );
        }

        if (minUltimateSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[4] >= parseInt(minUltimateSkins)
            );
        }

        if (maxUltimateSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[4] <= parseInt(maxUltimateSkins)
            );
        }

        if (minExaltedSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[5] >= parseInt(minExaltedSkins)
            );
        }

        if (maxExaltedSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[5] <= parseInt(maxExaltedSkins)
            );
        }

        if (minTranscendentSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[6] >= parseInt(minTranscendentSkins)
            );
        }

        if (maxTranscendentSkins) {
            filteredAccounts = filteredAccounts.filter(account =>
            account.skins[6] <= parseInt(maxTranscendentSkins)
            );
        }

        loadFilteredAccounts(filteredAccounts);
    });
});



