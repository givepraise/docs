---
sidebar_position: 5
---

# How to upgrade Praise

The process of upgrading Praise to a new version is usually very straightforward. Most of the time the process consists of running the bundled upgrade script.

:::info

Always check the [release notes](https://github.com/commons-stack/praise/releases) before upgrading. At times you will be required to run the `setup.sh` script to upgrade environment variables.

:::

## Step 1 – Use ssh to access server

```
ssh root@xxx.xxx.xxx.xxx
```

## Step 2 – Pull latest changes from the code repository

```
cd praise
git pull
```

## Step 3 - Run setup script

The setup script makes sure the Praise environment is correctly setup. You will not have to answer any questions already answered as the script will use the existing environment variables.

```
bash setup.sh
```

## Step 4 – Run upgrade script

```
bash upgrade.sh
```

## 👍 That's it

Your praise system should be upgraded!
