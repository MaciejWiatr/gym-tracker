import React from "react";
function Media({src,radius=0,style={}}){return src?<img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:radius,display:"block",...style}}/>:<div style={{width:"100%",height:"100%",borderRadius:radius,background:"radial-gradient(120% 90% at 60% 25%,#4A3540 0%,#2B1B21 45%,#120A0D 100%)",...style}}/>;}
export function WorkoutHero({image,eyebrow,title,height=560,children,style={}}){
  return <section style={{position:"relative",height,overflow:"hidden",background:"var(--ink-950)",...style}}>
    <div style={{position:"absolute",inset:0}}><Media src={image}/></div>
    <div style={{position:"absolute",inset:0,background:"var(--scrim-bottom)"}}/>
    <div style={{position:"absolute",left:0,right:0,top:0,height:140,background:"var(--scrim-top)"}}/>
    <div style={{position:"absolute",left:"var(--gutter-screen)",right:"var(--gutter-screen)",bottom:24,display:"flex",flexDirection:"column",alignItems:"center",gap:8,textAlign:"center"}}>
      {eyebrow&&<div style={{fontSize:16,fontWeight:700,color:"var(--text-2)"}}>{eyebrow}</div>}
      <h1 style={{margin:0,fontFamily:"var(--font-display)",fontStretch:"var(--stretch-display)",fontWeight:800,fontSize:"var(--fs-display-l)",lineHeight:"var(--lh-display-l)",letterSpacing:"var(--tracking-display)",color:"#fff",textWrap:"balance"}}>{title}</h1>
      {children}
    </div>
  </section>;
}