#!/bin/bash

# Script to start the Ellis App Studios development server
# Ensures any existing processes on port 3001 are stopped before starting

echo "🧹 Checking for processes running on port 3001..."

# Find and kill any process using port 3001
PORT=3001
PID=$(lsof -ti:$PORT)

if [ ! -z "$PID" ]; then
  echo "⚠️  Found process(es) running on port $PORT (PID: $PID)"
  echo "🛑 Stopping existing process(es)..."
  kill -9 $PID
  sleep 1
  echo "✅ Process stopped"
else
  echo "✅ Port $PORT is free"
fi

echo ""
echo "🚀 Starting Ellis App Studios development server on port $PORT..."
echo ""

# Start the development server
npm run dev

