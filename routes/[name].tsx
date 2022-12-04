import { PageProps } from "$fresh/server.ts"
import Center from '../layouts/center.layout.tsx'
import Solder from "../islands/Solder.tsx"
import Navbar from "../components/Navbar.tsx"

const navLinks = [ 
  {name: 'ДМБ', link: '/'},
]

// interface FuckingProps extends PageProps {
//   name: string;
// }

export default function Greet(props: PageProps) {
  return (
    <Center title="Педики">
      <Navbar hrefs={navLinks} />
      <Solder name={props.params.name} />
    </Center>
  )
}
