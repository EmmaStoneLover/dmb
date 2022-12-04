import { HandlerContext } from "$fresh/server.ts"
import { badGays } from '../../../pidorastsList.js'

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = JSON.stringify(badGays);
  return new Response(body);
};
