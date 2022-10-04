module.exports = {
    routes: [

        {
            method: 'GET',
            path: '/proxy/me',
            handler: 'proxy.me',
            config: {
                policies: []
            }
        }

    ]
        
}