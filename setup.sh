#a thing to setup snail ide on gh codespaces
npm i -g pnpm
pnpm up
pnpm i --shamefully-hoist

cd ../tl4k-ide-vm
npm link

cd ../tl4k-ide-render
npm link

cd ../tl4k-ide-gui
npm link tl4k-ide-render tl4k-ide-vm

# webpack-dev-server
