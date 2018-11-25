module.exports = () => ({
    hosts: [
        {
            domain: 'www.tae.moe',
            directories: {
                trailingSlash: 'never'
            },
            fallback: {
                404: '404.html'
            },
            manifest: 'serverpush.json'
        }
    ]
})
