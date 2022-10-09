module.exports = {
    routes: [

        {
            method: 'GET',
            path: '/purchase/me',
            handler: 'purchase.me',
            config: {
                policies: []
            }
        }

    ]
        
}