import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";
export function RoutineCard({title,exercises=[],meta,onStart,onMenu,startLabel="Start Routine",style={}}){
  return <article style={{background:"var(--surface-card)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-lg)",padding:20,display:"flex",flexDirection:"column",gap:14,...style}}>
    <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:6}}>
        <div style={{fontSize:20,fontWeight:700,lineHeight:1.2}}>{title}</div>
        <div style={{fontSize:15,color:"var(--text-2)",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{exercises.join(", ")}</div>
        {meta&&<div style={{fontSize:14,color:"var(--text-2)",fontVariantNumeric:"tabular-nums"}}>{meta}</div>}
      </div>
      <button type="button" onClick={onMenu} aria-label="More" style={{border:0,background:"transparent",color:"var(--text-1)",cursor:"pointer",padding:4}}><Icon name="ellipsis" size={22}/></button>
    </div>
    <Button variant="primary" fullWidth onClick={onStart}>{startLabel}</Button>
  </article>;
}