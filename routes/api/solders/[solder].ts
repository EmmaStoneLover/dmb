import { HandlerContext } from "$fresh/server.ts"
import { badGays } from '../../../pidorastsList.js'

interface GaysInterface {
  name: string[];
  before?: string;
  text?: string;
  custom?: {
      text?: string;
      textColor?: string;
      bgColor?: string;
  };
}

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const solder:string = decodeURIComponent(_ctx.params.solder)
  let thatGay:GaysInterface = {name: [`${solder}`], before: 'я такого не знаю'}
  badGays.map( gay => {
    gay.name.map(  gayName => { 
      if ( solder.toLowerCase() === gayName.toLowerCase() ) {
        thatGay = gay
      }
    })
  })

  const body = JSON.stringify(thatGay);
  return new Response(body);
}
