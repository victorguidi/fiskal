import { GetHelloWorld } from "./controllers/receipts.controllers"

Bun.serve({
  fetch(req: Request, server): Response | Promise<Response | any> | any {
    const url = new URL(req.url);

    if (url.pathname === "/api/getReceipts") return GetHelloWorld();

    if (server.upgrade(req)) {
      return; // do not return a Response
    }

    return new Response("404!");

  },

  websocket: {
    message(ws, message) {
      ws.send(message); // echo back the message
    },
  },

  port: process.env.PORT || 5000,
});
