import { useRef } from "preact/hooks"

export default function Search() {
  const input = useRef()
  const handler = (e) => {
    e.preventDefault()
    const link = input.current.value
    const AlsoLink = link.split('/')[0].split('\\')[0].split('.')[0].split('|')[0]
    window.location.href = AlsoLink
  }

  return (
    <form onSubmit={e => {handler(e)}}>
      <input placeholder="name" 
        ref={input} type="text" 
        class="bg-primary dark:bg-primary-dark rounded px-2 h-7" 
      />
    </form>
  )
}
