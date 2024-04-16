const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
        {
            description: 'TL4K IDE Project',
            accept: {
                'application/x.scratch.sb3': '.tl4k'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'Scratch Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb', '.sb2', '.sb3', '.pm', '.pmp','.tl4k']
                }
            }
        ]
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker
};
