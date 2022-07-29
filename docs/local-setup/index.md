# Run Praise locally

Prerequisites:

- `node`
- `nvm`
- `yarn`
- `docker`

## Step 1 – Switch to specified node version

```
nvm use
```

## Step 2 – Install dependencies

```
yarn set version berry
yarn
```

## Step 3 – Create Discord Bot

The Discord bot used to interact with Praise is created in the Discord developer dashboard. Take note of the various bot ids during bot creation as they will be used in the next step.

- [Create the Praise Discord bot](../server-setup/create-discord-bot.md)

## Step 4 – Configure environment

Run the Praise setup script to configure the runtime environment:

```
bash setup.sh
```

## Step 5 – Start MongoDB

Run mongo:

```
yarn mongodb:start
```

## Step 6 – Build and start api backend

Api, discord-bot and frontend can also be started from the Visual Studio Code Launch menu.

```
yarn workspace api build
yarn workspace api start
```

## Step 7 – Build and start Discord bot

```
yarn workspace discord-bot build
yarn workspace discord-bot start
```

## Step 8 – Build and start frontend

```
yarn workspace frontend build
yarn workspace frontend start
```

## Done 🎉

If you would like to contribute to Praise development, please see [open issues](https://github.com/commons-stack/praise/issues) and the [contributor guidelines](https://github.com/commons-stack/praise/blob/main/CONTRIBUTING.md).
