import DMBTimer from "../islands/DMBTimer.tsx"
import Center from "../layouts/center.layout.tsx"
import Navbar from "../components/Navbar.tsx"

const navLinks = [
  {name: 'Волк', link: '/волк'}
]

export default function Home() {
  return (
    <Center title="ДМБ таймер">
      <div class="flex justify-center items-center mb-2">
        <Navbar hrefs={navLinks} />
        <img src="/logo.svg" class="w-20 h-20 mr-1" />
        <div class="text-left">
          <p class="text-xl">ДМБ лимон</p>
          <p class="text-xs dark:text-light italic">Скажет сколько осталось</p>
        </div>
      </div>
      <DMBTimer />
    </Center>
  );
}
