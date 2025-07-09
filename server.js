const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

// Get MIME type based on file extension
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

// Create HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html for root path
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // Construct file path
  const filePath = path.join(__dirname, pathname);
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>404 - Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: #e74c3c; }
          </style>
        </head>
        <body>
          <h1>404 - File Not Found</h1>
          <p>The requested file <strong>${pathname}</strong> was not found.</p>
          <a href="/">Go back to home</a>
        </body>
        </html>
      `);
      return;
    }
    
    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      
      // Set appropriate headers
      const mimeType = getMimeType(filePath);
      res.writeHead(200, { 
        'Content-Type': mimeType,
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    });
  });
});

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
  console.log('\n📋 Available routes:');
  console.log(`   • http://localhost:${PORT}/ (Main portfolio)`);
  console.log(`   • http://localhost:${PORT}/projects/Omega/`);
  console.log(`   • http://localhost:${PORT}/projects/Blue%20Berry/`);
  console.log(`   • http://localhost:${PORT}/projects/Lorem%20Impus%20H1/`);
  console.log(`   • http://localhost:${PORT}/projects/Roket%20Media%20H2/task2/`);
  console.log(`   • http://localhost:${PORT}/projects/Hupp%20INT%20PROJECT/`);
  console.log(`   • http://localhost:${PORT}/projects/curser%20ai/`);
  console.log('\n💡 Press Ctrl+C to stop the server');
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Try a different port.`);
  } else {
    console.error('❌ Server error:', err);
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server closed successfully');
    process.exit(0);
  });
});