// Create a web server
const http = require('http');
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write("Page Not Found")
        } else {
            res.write(data)
        }
        res.end();
    })
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const url = req.url;

    switch (url) {
        case '/' || '/home':
            renderHTML('./home.html', res);
            break;
        case '/Codedu/courses':
            renderHTML('./courses/courses.html', res);
            break;
        case '/Codedu/about':
            renderHTML('./aboutUs/aboutus.html', res);
            break;
        case '/Codedu/profile':
            renderHTML('./profile/profile.html', res);
            break;
        default:
            res.writeHead(404)
            res.write("Page Not Found")
            break;
    }

    console.log(req.url);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});