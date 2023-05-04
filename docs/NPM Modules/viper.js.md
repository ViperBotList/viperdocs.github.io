---
sidebar_position: 1
---

# Viper Bot List (Node-SDK)

<hr />

## Install
```diff
npm i @viperbotlist/viper.js

or

npm i @viperbotlist/viper.js@latest
```

<hr />

## Usage
```js
const { ViperClient } = require("@viperbotlist/viper.js");

const viper = new ViperClient({
    auth: "Api key",
    botID: "Bot id"
});

viper.post(SERVER_COUNT,).catch((err) => {
viper.viperLogs(`Posting Stats has failed | Error: ${err}`);
});
viper.viperLogs("Some Log Text so you know it Worked");
```

<hr />

## Example
```js
const { ViperClient } = require("@viperbotlist/viper.js");

const viper = new ViperClient({
    auth: "AUTH_TOKEN", 
    botID: "819050202508890419"
});

viper.post(client.guilds.cache.size, 0).catch((err) => {
viper.viperLogs(`Posting Stats has failed | Error: ${err}`);
});

viper.viperLogs("Posted Stats Successfully");
```

<hr />
