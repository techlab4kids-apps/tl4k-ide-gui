### Update
export NODE_OPTIONS=--openssl-legacy-provider

# Install project dependencies using pnpm
pnpm i --shamefully-hoist

# relink dependencies
./npm_link.sh

# Start webpack dev server
npx webpack-dev-server --open
