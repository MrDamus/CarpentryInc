module.exports = {
    "extends": "google",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use, default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.0" // React version, default to the latest React stable release
        }
    },
    rules:{
        "linebreak-style": 0,
        "require-jsdoc":
        [0, {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": false,
                "ClassDeclaration": false,
                "ArrowFunctionExpression": false
            }
        }]
    },
};