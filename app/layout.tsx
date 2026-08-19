import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
export const metadata:Metadata={title:{default:"SEIF Product Operating System",template:"%s · SEIF POS"},description:"Assessment & Blueprint — repositorio maestro de decisión, entrega de valor y aprendizaje."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><a className="skip" href="#content">Saltar al contenido</a><AppShell>{children}</AppShell></body></html>}
