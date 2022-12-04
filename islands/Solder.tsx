import { useState, useEffect } from "preact/hooks"
// import { PageProps } from "$fresh/server.ts"

interface PageProps {name: string}

export default function Solder({ name }: PageProps) {
  const [text, setText] = useState({ 
    text: undefined,
    custom: { textColor: undefined, bgColor: undefined, text: undefined },
    before: 'ща поищу...' 
  })

  name = decodeURIComponent(name)
  useEffect( () => {
    fetch(`http://localhost:8000/api/solders/${name}`)
    .then( async res => await res.json())
    .then( data => {
      setTimeout(() => { setText( data ) }, 500)
    })
  }, [])
  
  return (
    <div>
      <p class="text-xl italic dark:text-light">
        Этот хуй, по прозвищу 
        <span class='text-4xl dark:text-white'>
          { `${name[0].toUpperCase() + name.substring(1)}` }
        </span>
      </p>
      <p class='text-2xl italic dark:text-white'>
        { text.text ? `"${text.text}"` : text.before }
      </p>
      { text.custom.text ? 
        <p class={`text-2xl p-1 mt-1 rounded italic
                  text-[${text.custom.textColor}] bg-[${text.custom.bgColor}]`}>
          {text.custom.text}
        </p> : null }
      <p class="text-right mt-2 italic">(C) Конфуций</p>
    </div>
  )
}

