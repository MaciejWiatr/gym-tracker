import React from "react";
export function Tabs({items=[],active,onChange,style={}}){
  return <div style={{display:"flex",gap:24,overflowX:"auto",borderBottom:"1px solid var(--border-subtle)",padding:"0 var(--gutter-screen)",...style}}>
    {items.map(t=>{const a=t===active;return <button key={t} type="button" onClick={()=>onChange&&onChange(t)} style={{position:"relative",padding:"12px 0",border:0,background:"transparent",cursor:"pointer",whiteSpace:"nowrap",fontFamily:"var(--font-body)",fontSize:16,fontWeight:a?700:500,color:a?"var(--text-1)":"var(--text-2)"}}>{t}<span style={{position:"absolute",left:0,right:0,bottom:-1,height:3,borderRadius:3,background:a?"var(--text-1)":"transparent"}}/></button>;})}
  </div>;
}