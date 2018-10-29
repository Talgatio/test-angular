const PROXY_CONFIG = [
    {
        context: [
            "/tx",
            "/tx/:id"
        ],
        target: "http://104.248.130.17:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;