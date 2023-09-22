import { GetHelloWorld } from "./controllers/receipts.controllers"

Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    const url = new URL(req.url);

    if (url.pathname === "/api/getReceipts") return GetHelloWorld();
    return new Response("404!");
  },

  port: process.env.PORT || 5000,
});
