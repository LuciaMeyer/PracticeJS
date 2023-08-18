import { Navbar } from "@/components";


export default function GoupLayout({  children}:{ children: React.ReactNode}) {
    return (
        <>
            <Navbar/>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hola Grupo!</span>
                {children}
            </main>
        </>
    )
  }