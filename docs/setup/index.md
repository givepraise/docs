---
sidebar_position: 1
slug: /
---

# Setup

## Run Praise on a server

Currently, Praise isn't offered as a service. Instead, every community runs its own server. The installation process requires only basic server knowledge and takes about 30 minutes. We have verified the installation on Digital Ocean but should with little or no modifications work on any Ubuntu server.

[How to install Praise on Digital Ocean](./install-praise-on-digital-ocean.md)

## Run Praise locally

Prerequisites:

- `node`
- `nvm`
- `yarn`
- `docker`

### 1. Switch to specified node version

```
nvm use
```

### 2. Install dependencies

```
yarn set version berry
yarn
```

### 3. Create Discord Bot

Create and setup the Discord bot. Be sure to take not of ENV variables during setup as these will be needed during the next step.

[Create the Praise Discord bot](./create-discord-bot.md)

### 4. Configure environment

Run the Praise setup script to configure the runtime environment:

```
sh setup.sh
```

### 5. Start MongoDB

Run mongo:

```
yarn mongodb:start
```

### 6. Build and start api backend

Api, discord-bot and frontend can also be started from the Visual Studio Code Launch menu.

```
yarn workspace api build
yarn workspace api start
```

### 7. Build and start Discord bot

```
yarn workspace discord-bot build
yarn workspace discord-bot start
```

### 8. Build and start frontend

```
yarn workspace frontend build
yarn workspace frontend start
```
