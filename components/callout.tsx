import { Lightbulb,TriangleAlert,Database,Compass,CheckCircle2 } from "lucide-react";
const icons={evidence:Database,recommendation:Compass,risk:TriangleAlert,decision:CheckCircle2,example:Lightbulb,default:Lightbulb};
export function Callout({kind="default",title,children}:{kind?:keyof typeof icons,title:string,children:React.ReactNode}){const Icon=icons[kind];return <aside className={`callout ${kind}`}><Icon/><div><b>{title}</b><div>{children}</div></div></aside>}
