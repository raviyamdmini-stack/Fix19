// Command handler
const commands = [];

function cmd(info, func) {
    // Ensure info is an object
    if (typeof info !== 'object') throw new Error('Command info must be an object');

    // Clone info to avoid mutating external objects
    const data = { ...info };

    // Attach the function
    if (typeof func !== 'function') throw new Error('Command function must be a function');
    data.function = func;

    // Set default values
    if (data.dontAddCommandList === undefined) data.dontAddCommandList = false;
    if (!data.desc) data.desc = '';
    if (data.fromMe === undefined) data.fromMe = false;
    if (!data.category) data.category = 'misc';
    if (!data.filename) data.filename = 'Not Provided';

    // Add to commands array
    if (!data.dontAddCommandList) commands.push(data);

    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Module: cmd,
    commands,
};
