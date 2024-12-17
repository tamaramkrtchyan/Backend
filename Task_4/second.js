// //Task 2

// const http = require('node:http');
// const fs = require('fs');
// const path = require('path');

// const PORT1 = 3000;

// const htmlFilePath = path.join(__dirname, 'second.html');

// const server1 = http.createServer((req, res) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     res.setHeader('Content-Type', 'text/html');
//     if (req.method === 'GET' && req.url === '/') {
//         fs.readFile(htmlFilePath, 'utf8', (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Error loading HTML file');
//             } else {
//                 res.writeHead(200);
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404);
//         res.end('Not Found');
//     }
// });

// server1.listen(PORT1, () => {
//     console.log(`Server is running on http://localhost:${PORT1}`);
// });
