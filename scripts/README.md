# Scripts

This folder contains utility scripts for managing the Ellis App Studios development server.

## Quick Start

To start the development server on port 3001:

```bash
npm run clean-start
```

This will:
1. Check for any processes already running on port 3001
2. Stop them if found
3. Start a fresh development server on port 3001

## Available Scripts

### `start.sh`
Starts the development server with automatic cleanup of any existing processes on port 3001.

**Usage:**
```bash
npm run clean-start
```
or
```bash
bash scripts/start.sh
```

### `stop.sh`
Stops the development server by killing any process running on port 3001.

**Usage:**
```bash
npm run stop
```
or
```bash
bash scripts/stop.sh
```

## Environment Setup

Create a `.env.local` file in the root directory with:

```
PORT=3001
```

Or copy from the example:

```bash
cp .env.example .env.local
```

## Notes

- The port is configured to 3001 by default
- Scripts automatically handle cleanup of hung processes
- Safe to run `clean-start` multiple times

