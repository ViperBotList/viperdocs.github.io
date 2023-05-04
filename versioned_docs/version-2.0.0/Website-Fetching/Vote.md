---
sidebar_position: 1
---

# Post Vote Endpoint


BaseURL: `https://api.viperbotlist.com/bots/stats/:botID`

| POST        | Required           | Description  |
| ------------- |:-------------:| -----:|
| Bot ID      | ✅ | Your discord bots ID |
| API Token      | ✅      |   Your bots ViperAPI Token |


# Exmaple

```js title="Vote Example"
const fetch = require("node-fetch");


await fetch (`https://api.viperbotlist.com/bots/stats/:BotID`, {
    method: "POST",
    headers: {
        "authorization": `API Key`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        servers: servers,
        shards: shards ? shards : 0
    })
});
```