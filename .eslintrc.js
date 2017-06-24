module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
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
    }
};