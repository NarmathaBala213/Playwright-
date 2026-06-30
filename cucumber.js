module.exports = {
    default: {
        require: [
            'hooks/hooks.js',
            'steps/*.js'
        ],
        format: ['progress'],
        publishQuiet: true
    }
};