import React from "react";
import { Icon } from "../core/Icon.jsx";
export function TabBar({items=[],active,onChange,style={}}){
  return <nav style={{display:"flex",justifyContent:"space-around",padding:"8px 12px 26px",background:"var(--surface-app)",borderTop:"1px solid var(--border-subtle)",...style}}>
    {items.map(it=>{const a=it.id===active;return <button key={it.id} type="button" onClick={()=>onChange&&onChange(it.id)} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:0,background:"transparent",cursor:"pointer",color:a?"var(--text-1)":"var(--text-3)",fontFamily:"var(--font-body)",fontSize:11,fontWeight:700}}>
      <span style={{width:56,height:32,borderRadius:999,display:"flex",alignItems:"center",justifyContent:"center",background:a?"var(--accent)":"transparent",color:a?"var(--text-on-accent)":"inherit",transition:"background var(--dur-base) var(--ease-standard)"}}><Icon name={it.icon} size={22}/></span>{it.label}
    </button>;})}
  </nav>;
}