import { useState, useEffect } from "preact/hooks"
// import { PageProps } from "$fresh/server.ts"

interface PageProps {name: string}
interface TextInterface {
  text?: string;
  custom?: { textColor: string, bgColor: string, text: string };
  before: string;
}

export default function Solder({ name }: PageProps) {
  const [text, setText] = useState<TextInterface>({
    before: 'ща поищу...' 
  })

  name = decodeURIComponent(name)
  useEffect( () => {
    fetch(`https://dmb.deno.dev/api/solders/${name}`, {mode: "same-origin"})
    .then( async res => await res.json())
    .then( data => {
      setTimeout(() => { setText( data ) }, 500)
      // setText( data )
    })
  }, [])
  
  return (
    <div>
      <p class="text-xl italic dark:text-light">
        Этот хуй, по прозвищу 
        <span class='ml-2 text-4xl dark:text-white'>
          { `${name[0].toUpperCase() + name.substring(1)}` }
        </span>
      </p>
      <p class='text-2xl italic dark:text-white'>
        { text.text ? `"${text.text}"` : text.before }
      </p>
      { text.custom ? 
        <p class={`text-2xl p-1 mt-1 rounded italic
                  text-[${text.custom.textColor}] bg-[${text.custom.bgColor}]`}>
          {text.custom.text}
        </p> : null }
      <p class="text-right mt-2 italic">(C) Конфуций</p>
    </div>
  )
}

