const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
    ],
};