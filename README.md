# BinaryStateJS

A lightweight Discord bot that delivers wisdom, tracks uptime, and responds to your commands.

## Features

- **Quote Command** - Get random inspirational quotes from tech legends and thinkers
- **Ping/Pong** - Check if the server is alive with a simple ping
- **Time Check** - Display the current server time
- **Auto Uptime** - Periodic status updates to your server's upstate channel

## Commands

| Command | Description |
|---------|-------------|
| `!ping` | Check if the bot is online |
| `!test` | Quick response test |
| `!binary` | Returns state indicator |
| `!time` | Shows current server time |
| `!quote` | Get a random inspirational quote |

## Tech Stack

- **Node.js** - Runtime environment
- **Discord.js v13** - Discord API wrapper
- **Express** - Web server for health checks

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your Discord bot token as an environment variable:
   ```bash
   export token=YOUR_DISCORD_BOT_TOKEN
   ```
4. Run the bot:
   ```bash
   npm start
   ```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `token` | Your Discord bot token |

## Quote Collection

The bot includes a curated collection of quotes from notable figures.

## License

ISC
