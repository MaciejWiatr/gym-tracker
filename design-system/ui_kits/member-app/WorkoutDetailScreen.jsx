(()=>{
const {WorkoutHero,TopBar,ActionRow,Button,Tabs,ExerciseRow,MuscleRow,ProgressDots}=window.PJSGymDesignSystem_ff31cf;
function WorkoutDetailScreen({onBack,onStart}){
  const [saved,setSaved]=React.useState(false);const [tab,setTab]=React.useState("Workout Plan");
  return <div style={{flex:1,overflowY:"auto",background:"var(--ink-1000)"}}>
    <div style={{position:"relative"}}>
      <TopBar overMedia leading="chevron-left" trailing="settings" onLeading={onBack} center={<span style={{fontVariantNumeric:"tabular-nums",fontSize:22,fontWeight:800,color:"#fff"}}>28:00</span>} style={{position:"absolute",top:50,left:0,right:0,zIndex:5}}/>
      <WorkoutHero height={600} eyebrow="Thursday, June 27" title={<>Mobility<br/>and core</>}>
        <ActionRow style={{width:"100%",marginTop:20}} items={[{icon:"heart",label:"Save",active:saved,onClick:()=>setSaved(!saved)},{icon:"calendar-days",label:"Schedule"},{icon:"send",label:"Share"},{icon:"download",label:"Download"}]}/>
      </WorkoutHero>
    </div>
    <div style={{padding:"8px 20px 24px"}}><Button size="lg" fullWidth onClick={onStart}>Start workout</Button></div>
    <Tabs items={["Workout Plan","Body Activity","Equipment"]} active={tab} onChange={setTab}/>
    <div style={{padding:"12px 20px 40px"}}>
      {tab==="Workout Plan"&&<>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"12px 0 4px"}}><span style={{fontSize:20,fontWeight:700}}>Mobility</span><span style={{fontSize:16,color:"var(--text-2)",fontVariantNumeric:"tabular-nums"}}>3 min</span></div>
        <ExerciseRow name="Cat Cow" meta="1m"/><ExerciseRow name="World's Greatest Stretch" meta="1m"/><ExerciseRow name="Bear Plank" meta="30s"/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"20px 0 4px"}}><span style={{fontSize:20,fontWeight:700}}>Core</span><span style={{fontSize:16,color:"var(--text-2)",fontVariantNumeric:"tabular-nums"}}>25 min</span></div>
        <ExerciseRow name="Dead Bug" meta="3 × 12"/><ExerciseRow name="Pallof Press" meta="3 × 10 each side"/><ExerciseRow name="Hollow Hold" meta="3 × 30s"/>
      </>}
      {tab==="Body Activity"&&<>{[["Core",34],["Glutes",14],["Hip flexors",12],["Obliques",9],["Shoulders",6],["Other muscles",25]].map(([n,p],i)=><MuscleRow key={n} name={n} percent={p} max={34} highlight={i===0}/>)}<p style={{margin:"12px 0 0",fontSize:14,color:"var(--text-2)"}}>Share of total working time. Core carries a third of this session.</p></>}
      {tab==="Equipment"&&<div style={{color:"var(--text-2)",padding:"16px 0"}}>Mat · Loop band · Cable station</div>}
    </div>
  </div>;
}
window.WorkoutDetailScreen=WorkoutDetailScreen;
})();