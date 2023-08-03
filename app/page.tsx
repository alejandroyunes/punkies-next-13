import { ModeToggle } from "@/components/modeToggle";
import ThemeSwitch from "@/components/themeSwitch";

export default function Home() {
  return (
    <>

<div className='font-sans flex flex-col justify-center items-center h-screen dark:bg-zinc-700 dark:text-white'>
  <h1 className='text-2xl'>Hello World!</h1>
  <h2>React + TailwindCSS Dark Mode Apfsp</h2>
  <div className='mt-2'>
    <ThemeSwitch />
    <ModeToggle />
  </div>
</div>

  </>
  )
}