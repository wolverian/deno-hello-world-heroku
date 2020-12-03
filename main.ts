import { Application } from "https://deno.land/x/oak@v6.3.2/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

const port = Number.parseInt(Deno.env.get("PORT") ?? "8080", 10);

await app.listen({ port });
