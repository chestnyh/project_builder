const path = require('node:path');

module.exports = (config) => {
    config.forEach(item => {
        const pathToBuilder = path.join(__dirname, item.type, item.technology || 'default');
        const builder = require(pathToBuilder);
        builder(config, item);
    });
}