let button = document.getElementById("calc");

button.addEventListener("click", function () {
    let nev = document.getElementById("name").value;
    let szint = document.getElementById("level").value;
    let standard = document.getElementById("standard").value;
    let epic = document.getElementById("epic").value;
    let legendary = document.getElementById("legendary").value;
    let mythic = document.getElementById("mythic").value;
    let ultimate = document.getElementById("ultimate").value;
    let exalted = document.getElementById("exalted").value;
    let trancendent = document.getElementById("trancendent").value;
    let server = document.getElementById("server").value;
    let rang = document.getElementById("rank").value;

    let price = 2000;
    price += szint * 50; // 100 Ft per level
    price += standard * 200;
    price += epic * 500; // Epic Skin
    price += legendary * 1000; // Legendary Skin
    price += mythic * 2000; // Mythic Skin
    price += ultimate * 5000; // Ultimate Skin
    price += exalted * 25000; // Exalted Skin
    price += trancendent * 80000; // Transcendent Skin

    switch (rang) {
        case "CHALLENGER":
            price += 10000; // Challenger rank bonus
            break;
        case "GRANDMASTER":
            price += 5000; // Grandmaster rank bonus
            break;
        case "MASTER":
            price += 2000; // Master rank bonus
            break;
        case "DIAMOND":
            price += 1000; // Diamond rank bonus
            break;
        case "EMERALD":
            price += 300; // Emerald rank bonus
            break;
        case "PLATINUM":
            price += 500; // Platinum rank bonus
            break;
        case "GOLD":
            price += 200; // Gold rank bonus
            break;
        case "SILVER":
            price += 100; // Silver rank bonus
            break;
        case "BRONZE":
            price += 50; // Bronze rank bonus
            break;
        case "IRON":
            price += 25; // Iron rank bonus
            break;
        default:
            price += 0; // No rank bonus
    }

    switch (server) {
        case "EUW":
            price += 1000; // EUW server bonus
            break;
        case "EUNE":
            price += 500; // EUNE server bonus
            break;
        case "NA":
            price += 2000; // NA server bonus
            break;
        case "LAN":
            price += 1500; // LAN server bonus
            break;
        case "LAS":
            price += 1200; // LAS server bonus
            break;
        case "BR":
            price += 800; // BR server bonus
            break;
        case "JP":
            price += 3000; // JP server bonus
            break;
        case "KR":
            price += 4000; // KR server bonus
            break;
        default:
            price += 0; // No server bonus
    }

    price += nev.includes("Feet") ? 10000 : 0; // Feet bonus
    price += nev.includes("Kebab") ? 5000 : 0; // Kebab bonus

    let priceElement = document.getElementById("price");
    priceElement.innerHTML = price;

});