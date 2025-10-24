#!/bin/bash

# Script to stop the Ellis App Studios development server

echo "🛑 Stopping Ellis App Studios development server..."

PORT=3001
PID=$(lsof -ti:$PORT)

if [ ! -z "$PID" ]; then
  echo "⚠️  Found process(es) running on port $PORT (PID: $PID)"
  kill -9 $PID
  sleep 1
  echo "✅ Server stopped successfully"
else
  echo "ℹ️  No process found running on port $PORT"
fi

