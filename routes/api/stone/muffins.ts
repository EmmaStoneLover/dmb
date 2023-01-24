import { HandlerContext } from "$fresh/server.ts"

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = JSON.stringify({text: 'Пошел нахуй'});
  return new Response(body);
};