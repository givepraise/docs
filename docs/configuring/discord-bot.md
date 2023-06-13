# Discord Bot

The majority of the discord bot settings consist of message templates. Please read through and modify these templates to suit your community needs.

In addition to message templates there are some settings to modify the behaviour of the bot.

## Praise Giver Discord Role Required

`Default value: off`

Checking this box requires users to be assigned to the Discord Role ID specified in `Praise Giver Discord Role` in order to praise.

Where to find Role ID? See article [Discord get role id (How to get and how to use)](https://ozonprice.com/blog/discord-get-role-id/)

## Praise Giver Discord Role

Discord Role ID authorized to use praise. Used only if `Praise Giver Discord Role Required` is checked.

## Self Praise Allowed

`Default value: off`

Checking this box allows users to praise themselves.

## Praising allowed in all Channels

`Default value: on`

If enabled, praising is allowed in all server channels. If turned off, praising is only allowed in the channels listed in `Channels where praise is allowed`.

## Channels where praise is allowed

Comma separated list of channel IDs in which praising is allowed.

Where to find channel IDs?

Enable Discord developer mode:

1. Login to Discord
2. Click on gear icon to open user settings
3. Click on `Advanced` tab on the sidebar
4. Check `Developer Mode`

Copy ID:

1. Right click on channel name in Discord
2. Click `Copy ID`
