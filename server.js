import { createServer as createViteServer } from 'vite';
import { createServer as createHttpServer } from 'http';
import chatHandler from './api/chat.js';

const getRequestBody = (req) =>
  new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });

const wrapResponse = (res) => ({
  status(code) {
    res.statusCode = code;
    return this;
  },
  json(payload) {
    const payloadString = JSON.stringify(payload);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', Buffer.byteLength(payloadString));
    res.end(payloadString);
  },
  setHeader: res.setHeader.bind(res),
  end: res.end.bind(res),
});

async function startServer() {
  const vite = await createViteServer({
    configFile: './vite.config.js',
    server: {
      middlewareMode: 'ssr',
    },
  });

  const server = createHttpServer(async (req, res) => {
    if (req.url === '/api/chat' && req.method === 'POST') {
      try {
        const rawBody = await getRequestBody(req);
        req.body = rawBody ? JSON.parse(rawBody) : {};
      } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      }

      const wrappedRes = wrapResponse(res);
      try {
        await chatHandler(req, wrappedRes);
      } catch (error) {
        if (!res.writableEnded) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: error.message }));
        }
      }
    } else {
      vite.middlewares(req, res);
    }
  });

  const port = 5173;
  server.listen(port, '127.0.0.1', () => {
    console.log(`Dev server running at http://127.0.0.1:${port}`);
  });
}

startServer();
