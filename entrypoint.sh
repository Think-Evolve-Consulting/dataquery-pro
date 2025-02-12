#!/bin/sh

echo "Loading environment variables from .env file..."
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "Starting Next.js with environment variables:"
env | grep NEXT_PUBLIC_

# Start Next.js
exec yarn start       