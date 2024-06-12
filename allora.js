const address = 'allo103kc0skdagkg7dwyqnrz8w7thvs69sv9mulg6q'

async function getUallo(){
    await fetch(`https://faucet.testnet.allora.network/send/testnet/${address}`, {
        "headers": {
            "accept": "*/*",
            // "accept-language": "ru-UA,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            // "priority": "u=1, i",
            // "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            // "sec-ch-ua-mobile": "?0",
            // "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://faucet.testnet.allora.network/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    }).then((response) => response.json())
        .then((body) => {
            console.log(body);
    });
}

// setInterval(getUallo,60000);

getUallo()