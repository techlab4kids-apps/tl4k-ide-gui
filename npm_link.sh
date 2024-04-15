#cd ../tl4k-ide-vm
#npm link

#cd ../tl4k-ide-render
#npm link

#cd ../tl4k-ide-gui

cd node_modules
mv scratch-vm scratch-vm.old
ln -s ../../tl4k-ide-vm/ scratch-vm

mv scratch-render scratch-render.old
ln -s ../../tl4k-ide-render/ scratch-render

#npm link tl4k-ide-render tl4k-ide-vm
#mv node_modules/scratch-vm node_modules/scratch-vm.old
#mv node_modules/tl4k-ide-vm node_modules/scratch-vm

#mv node_modules/scratch-render node_modules/scratch-render.old
#mv node_modules/tl4k-ide-render node_modules/scratch-render

#npm link tl4k-ide-render tl4k-ide-vm

# webpack-dev-server
