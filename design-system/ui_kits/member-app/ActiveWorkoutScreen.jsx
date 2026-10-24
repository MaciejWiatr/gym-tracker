(()=>{
const {TopBar,SetRow,Button,Sheet,ProgressRing,ProgressBar,Icon,Badge}=window.PJSGymDesignSystem_ff31cf;
function ActiveWorkoutScreen({onFinish,onClose}){
  const init={"Bench Press (Barbell)":[[82.5,8,"80kg × 8"],[82.5,8,"80kg × 8"],[82.5,7,"80kg × 7"]],"Incline Bench Press (Dumbbell)":[[30,10,"28kg × 10"],[30,10,"28kg × 9"]]};
  const [done,setDone]=React.useState({});const [rest,setRest]=React.useState(null);const [fin,setFin]=React.useState(false);const [sec,setSec]=React.useState(1732);
  React.useEffect(()=>{const t=setInterval(()=>{setSec(s=>s+1);setRest(r=>r===null?null:r<=1?null:r-1);},1000);return()=>clearInterval(t);},[]);
  const total=Object.values(init).reduce((a,b)=>a+b.length,0);const n=Object.values(done).filter(Boolean).length;
  const fmt=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
  return <div style={{flex:1,display:"flex",flexDirection:"column",paddingTop:50,minHeight:0,position:"relative"}}>
    <TopBar leading="chevron-down" onLeading={onClose} center={<span style={{fontVariantNumeric:"tabular-nums",fontWeight:800}}>{fmt(sec)}</span>} trailing="timer" onTrailing={()=>setRest(90)}/>
    <div style={{padding:"0 20px 12px"}}><ProgressBar value={n/total*100}/></div>
    <div style={{flex:1,overflowY:"auto",padding:"8px 12px 120px",display:"flex",flexDirection:"column",gap:24}}>
      {Object.entries(init).map(([ex,sets])=><div key={ex} style={{display:"flex",flexDirection:"column",gap:6}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"0 8px 6px"}}><span style={{flex:1,fontSize:18,fontWeight:700}}>{ex}</span><Icon name="ellipsis" size={22}/></div>
        <SetRow header/>
        {sets.map(([w,r,p],i)=>{const k=ex+i;return <SetRow key={k} index={i+1} previous={p} weight={w} reps={r} done={!!done[k]} onToggle={v=>{setDone({...done,[k]:v});if(v)setRest(90);}}/>;})}
        <Button variant="tonal" size="sm" icon="plus" style={{margin:"4px 8px 0"}}>Add set</Button>
      </div>)}
      <Button variant="outline" icon="plus" style={{margin:"0 8px"}}>Add exercise</Button>
    </div>
    <div style={{position:"absolute",left:20,right:20,bottom:28,zIndex:10}}><Button size="lg" fullWidth onClick={()=>setFin(true)}>Finish · {n} of {total} sets</Button></div>
    {rest!==null&&<Sheet title="Rest" onClose={()=>setRest(null)}><div style={{display:"flex",justifyContent:"center"}}><ProgressRing value={rest/90*100} size={200}><span style={{fontSize:52,fontWeight:800,fontVariantNumeric:"tabular-nums"}}>{fmt(rest)}</span></ProgressRing></div><div style={{display:"flex",gap:10}}><Button variant="tonal" fullWidth onClick={()=>setRest(Math.max(1,rest-15))}>−15s</Button><Button variant="tonal" fullWidth onClick={()=>setRest(rest+15)}>+15s</Button><Button fullWidth onClick={()=>setRest(null)}>Skip</Button></div></Sheet>}
    {fin&&<Sheet title="Finish workout?" onClose={()=>setFin(false)}><div style={{textAlign:"center",color:"var(--text-2)"}}>{n} of {total} sets logged · {fmt(sec)}</div><div style={{display:"flex",justifyContent:"center"}}><Badge tone="success">New PR: bench 82.5 kg</Badge></div><Button size="lg" fullWidth onClick={onFinish}>Save workout</Button><Button variant="ghost" fullWidth onClick={()=>setFin(false)}>Keep going</Button></Sheet>}
  </div>;
}
window.ActiveWorkoutScreen=ActiveWorkoutScreen;
})();