const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    let body = []

    req.on('data', (chunk) => {
        
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        const timestamp = new Date().toISOString();
        console.log(`Timestamp: ${timestamp}`);

        console.log(`Method: ${req.method} URL: ${req.url}`);
        console.log('Headers:', req.headers);
        // Log the request body to the console
        console.log('Request Body:', body);
        console.log('---');
  
        // Set the response header to indicate JSON content
        res.setHeader('Content-Type', 'application/json');

        // Create a response object with the request method and URL
        const responseObject = {
            timestamp: timestamp,
            method: req.method,
            headers: req.headers,
            body: body,
            url: req.url,
        };

        // Send the response object as a JSON string
        res.end(JSON.stringify(responseObject));
    });
}).listen(port);     