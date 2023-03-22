module.exports = {
    presets: [
        [
            "babel/preset-env",
            {
                targets: {
                    node: "currect"
                },
            },
        ],
        "@babel/preset-typescript",
    ],
};