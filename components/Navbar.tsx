import Search from "../islands/Search.tsx"

interface FuckingArray { link?: string; name?: string }
interface FuckingProps { hrefs: Array<FuckingArray> }

export default function Navbar({ hrefs }: FuckingProps) {
  return (
    <div class="fixed flex top-4 left-4">
        {hrefs.map( href => {
          return <a href={href.link} class="mr-3">{href.name}</a>
        })}
        <Search />
    </div>
  )
}
