import React from "react";
import { Icon } from "../core/Icon.jsx";
function Media({src,radius=0,style={}}){return src?<img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:radius,display:"block",...style}}/>:<div style={{width:"100%",height:"100%",borderRadius:radius,background:"radial-gradient(120% 90% at 60% 25%,#4A3540 0%,#2B1B21 45%,#120A0D 100%)",...style}}/>;}
export function ExerciseRow({name,meta,image,active=false,onClick,onMenu,style={}}){
  return <div onClick={onClick} style={{display:"flex",alignItems:"center",gap:16,padding:"10px 0",cursor:onClick?"pointer":"default",...style}}>
    <div style={{width:64,height:64,flex:"none",borderRadius:"var(--radius-sm)",overflow:"hidden",boxShadow:active?"0 0 0 2px var(--accent)":"none"}}><Media src={image}/></div>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:17,fontWeight:600,color:active?"var(--text-accent)":"var(--text-1)"}}>{name}</div>
      {meta&&<div style={{fontSize:14,color:"var(--text-2)",fontVariantNumeric:"tabular-nums"}}>{meta}</div>}
    </div>
    {onMenu!==null&&<button type="button" onClick={e=>{e.stopPropagation();onMenu&&onMenu();}} aria-label="More" style={{border:0,background:"transparent",color:"var(--text-2)",cursor:"pointer"}}><Icon name="ellipsis" size={22}/></button>}
  </div>;
}