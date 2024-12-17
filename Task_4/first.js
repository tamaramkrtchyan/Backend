// //Task1 
// const http = require('node:http');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     res.setHeader("Content-Type", "application/json");

//     if (req.url === '/') {
//         if (req.method === "GET") {
//             res.writeHead(200);
//             res.end(JSON.stringify({ message: "Welcome to the backend server" }));
//         } else if (['POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'].includes(req.method)) {
//             res.writeHead(200);
//             res.end(JSON.stringify({ message: `You sent a ${req.method} request` }));
//         } else {
//             res.writeHead(405);
//             res.end(JSON.stringify({ message: 'Method Not Allowed' }));
//         }
//     } else {
//         res.writeHead(404); 
//         res.end(JSON.stringify({ message: 'Route not found' }));
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
