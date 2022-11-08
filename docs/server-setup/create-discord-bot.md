---
sidebar_position: 4
---

# Create the Praise Discord bot

## Step 1 – Enable Developer Mode

Discord Developer Mode needs to be enabled so that you can copy object IDs from discord's UI. You can toggle this setting in the `Advanced` section of your Discord User Settings.

![Developer Mode toggle in Advanced section of Discord user settings](/img/enabling-discord-developer-mode.png)

## Step 2 – Note Discord Guild ID

Right click on your Discord server icon and select `Copy ID`. Take note of this value, in the Praise ENV settings it is called `Discord Guild ID`.

## Step 3 – Create Discord application

- Log into the [Discord Developer Portal](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications) using your discord credentials.
- Under `Applications` click on `New Application` on the top right.
  ![New Application Button in top right of page](/img/creating-new-application.png)
- Choose a suitable name for your application.

## Step 4 – Add bot to application

- Open the `Bot` tab in the info page of the application you just created
- Create a bot using the `Add Bot` button.
- In the `Bot` tab, find the `Privileged Gateway Intents` section and enable `SERVER MEMBERS INTENT` and `MESSAGE CONTENT INTENT`.

## Step 5 – Reset and copy bot token

- Press the `Reset Token` button to reset and generate a bot token.
- Copy and note the generated bot token. This is the Praise ENV settings `Discord Token`.

:::warning

Do not share this token publicly and ensure that it isn't posted anywhere.

:::

## Step 6 – Note Discord Client ID

- Go to the `OAuth2` tab of your application.
- Copy and note `CLIENT ID`. This is the Praise ENV settings `Discord Client ID`.

## Step 7 – Invite bot to Discord server

Invite the bot to your server using this link:

```
https://discord.com/api/oauth2/authorize?client_id=<CLIENT ID>&permissions=274878023680&scope=bot%20applications.commands
```

Replace `<CLIENT ID>` with the numeric CLIENT ID you just copied.

## Done 🎉

If you have taken note of the `Discord Guild ID`, `Discord Token` and `Discord Client ID`, you have all the information you need to proceed with the configuration of Praise.
