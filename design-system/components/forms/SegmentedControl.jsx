import React from "react";
export function SegmentedControl({options=[],value,onChange,style={}}){
  return <div style={{display:"flex",padding:4,gap:4,borderRadius:999,background:"var(--surface-field)",...style}}>
    {options.map(o=>{const a=o===value;return <button key={o} type="button" onClick={()=>onChange&&onChange(o)} style={{flex:1,height:36,border:0,borderRadius:999,cursor:"pointer",fontFamily:"var(--font-body)",fontSize:14,fontWeight:700,background:a?"var(--surface-inverse)":"transparent",color:a?"var(--text-inverse)":"var(--text-2)",transition:"background var(--dur-base) var(--ease-standard)"}}>{o}</button>;})}
  </div>;
}