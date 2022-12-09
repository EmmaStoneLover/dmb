import { PageProps } from "$fresh/server.ts"
import ToggleDarkMode from "../islands/ToggleDarkMode.tsx"
import type { ComponentChildren } from "preact";

interface FuckingProps {
  title?: string;
  children: ComponentChildren;
}
export default function Center(props: FuckingProps) {
  return (
    <html class="light">
      <head>
        <title>{props.title}</title>
      </head>
      <div class="bg-primary-bg dark:bg-primary-dark-bg dark:text-white">
        <div class="h-screen w-screen m-0 flex justify-center items-center pt-4">
          <ToggleDarkMode />
          <div class="m-5 max-w-screen-lg">
            { props.children }
          </div>
        </div>
        <div class="fixed bottom-2 right-2 left-2 mx-auto text-right">
          <p class="dark:text-light italic text-sm">
            Эта хуйня придумана укропами что-бы захватить мир ааааааааааааа
          </p>
        </div>
      </div>
    </html>
  )
}
