const address = 'allo103kc0skdagkg7dwyqnrz8w7thvs69sv9mulg6q'

async function getUallo(){
    await fetch(`https://faucet.testnet.allora.network/send/testnet/${address}`, {
        "headers": {
            "accept": "*/*",
            "cache-control": "no-cache",
            "pragma": "no-cache",
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