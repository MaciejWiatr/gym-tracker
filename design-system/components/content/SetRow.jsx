import React from "react";
import { Checkbox } from "../forms/Checkbox.jsx";
export function SetRow({index,previous,weight,reps,done=false,onToggle,header=false,style={}}){
  const cell={fontVariantNumeric:"tabular-nums",fontSize:16,fontWeight:600,textAlign:"center"};
  const col="40px 1fr 72px 64px 40px";
  if(header)return <div style={{display:"grid",gridTemplateColumns:col,gap:8,alignItems:"center",padding:"0 8px",fontSize:13,fontWeight:500,color:"var(--text-2)",...style}}><span style={{textAlign:"center"}}>Set</span><span>Previous</span><span style={{textAlign:"center"}}>kg</span><span style={{textAlign:"center"}}>Reps</span><span/></div>;
  return <div style={{display:"grid",gridTemplateColumns:col,gap:8,alignItems:"center",padding:"6px 8px",borderRadius:"var(--radius-sm)",background:done?"var(--accent-soft)":"transparent",transition:"background var(--dur-base) var(--ease-standard)",...style}}>
    <span style={{...cell,color:done?"var(--text-accent)":"var(--text-1)"}}>{index}</span>
    <span style={{fontSize:14,color:"var(--text-3)",fontVariantNumeric:"tabular-nums"}}>{previous||"—"}</span>
    <span style={{...cell,background:"var(--surface-field)",borderRadius:8,padding:"6px 0"}}>{weight}</span>
    <span style={{...cell,background:"var(--surface-field)",borderRadius:8,padding:"6px 0"}}>{reps}</span>
    <Checkbox checked={done} size={32} onChange={onToggle}/>
  </div>;
}