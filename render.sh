#!/usr/bin/env bash

# Exit immediately if a command fails
set -o errexit

echo "Installing dependencies..."
npm install

echo "Generating Prisma client..."
npx prisma generate

echo "Running database migrations..."
npx prisma migrate deploy

echo "Building TypeScript..."
npm run build

echo "Starting server..."
npm start