import { serve } from "https://deno.land/std@0.79.0/http/server.ts";

const s = serve({ port: 8080 });

console.info("http://localhost:8080");

for await (const req of s) {
  req.respond({ body: "Helxlo, world!\n" });
}
