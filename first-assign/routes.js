const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>NodeJS course first assignment</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users List</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li><li>User 5</li></ul></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

exports.handler = requestHandler;