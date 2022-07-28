# Run Praise locally

Prerequisites:

- `node`
- `nvm`
- `yarn`
- `docker`

## Switch to specified node version

```
nvm use
```

## Install dependencies

```
yarn set version berry
yarn
```

## Create Discord Bot

The Discord bot used to interact with Praise is created in the Discord developer dashboard. Take note of the various bot ids during bot creation as they will be used in the next step.

- [Create the Praise Discord bot](create-discord-bot.md)

## Configure environment

Run the Praise setup script to configure the runtime environment:

```
bash setup.sh
```

## Start MongoDB

Run mongo:

```
yarn mongodb:start
```

## Build and start api backend

Api, discord-bot and frontend can also be started from the Visual Studio Code Launch menu.

```
yarn workspace api build
yarn workspace api start
```

## Build and start Discord bot

```
yarn workspace discord-bot build
yarn workspace discord-bot start
```

## Build and start frontend

```
yarn workspace frontend build
yarn workspace frontend start
```
