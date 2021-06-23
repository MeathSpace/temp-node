const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url =='/home')
    {
        res.end(`<h1>Srikant</h1>
        <h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1><h1>Srikant</h1>`)
    }
    if(req.url =='/about')
    {
        res.end(`<a href='https://www.google.com/'>Google</a>`)
    }

    res.write('Welcome to Himans')
    res.end()
})

server.listen(5000)