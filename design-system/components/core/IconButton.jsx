import React from "react";
import { Icon } from "./Icon.jsx";
function usePress(){const [p,setP]=React.useState(false);return [p,{onPointerDown:()=>setP(true),onPointerUp:()=>setP(false),onPointerLeave:()=>setP(false)}];}
const V={overlay:{background:"var(--surface-overlay)",color:"#fff"},tonal:{background:"var(--surface-raised)",color:"var(--text-1)"},plain:{background:"transparent",color:"var(--text-1)"},accent:{background:"var(--accent)",color:"var(--text-on-accent)"},soft:{background:"var(--accent-soft)",color:"var(--text-accent)"}};
export function IconButton({icon,variant="plain",size=44,label,onClick,style={}}){
  const [p,h]=usePress();
  return <button type="button" aria-label={label||icon} onClick={onClick} {...h} style={{width:size,height:size,minWidth:size,borderRadius:"var(--radius-pill)",border:0,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,transform:p?"scale(.96)":"none",transition:"transform var(--dur-fast) var(--ease-standard)",...V[variant],...style}}><Icon name={icon} size={Math.round(size*0.5)}/></button>;
}