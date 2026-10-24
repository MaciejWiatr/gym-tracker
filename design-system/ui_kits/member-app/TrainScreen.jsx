(()=>{
const {SectionHeader,ActionTile,RoutineCard,TopBar}=window.PJSGymDesignSystem_ff31cf;
function TrainScreen({onStartRoutine}){
  const [o1,setO1]=React.useState(true);const [o2,setO2]=React.useState(true);
  return <div style={{flex:1,display:"flex",flexDirection:"column",paddingTop:50,minHeight:0}}>
    <TopBar title="Train" divider/>
    <div style={{flex:1,overflowY:"auto",padding:"20px",display:"flex",flexDirection:"column",gap:12}}>
      <SectionHeader title="Quick start"/>
      <ActionTile icon="plus" label="Start Empty Workout" onClick={onStartRoutine}/>
      <SectionHeader title="Routines" actionIcon="folder-plus" style={{marginTop:8}}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><ActionTile icon="clipboard-list" label="New routine"/><ActionTile icon="search" label="Explore"/></div>
      <SectionHeader title="PPL (Push/Pull/Legs)" muted collapsible open={o1} onToggle={()=>setO1(!o1)} actionIcon="ellipsis"/>
      {o1&&<ActionTile icon="plus" label="Add new routine" dashed/>}
      <SectionHeader title="My Routines (1)" muted collapsible open={o2} onToggle={()=>setO2(!o2)} style={{marginTop:12}}/>
      {o2&&<RoutineCard title="Push Day" exercises={["Bench Press (Barbell)","Incline Bench Press (Dumbbell)","Shoulder Press (Dumbbell)","Lateral Raise (Cable)","Triceps Pushdown"]} meta="5 exercises · 55 min" onStart={onStartRoutine}/>}
    </div>
  </div>;
}
window.TrainScreen=TrainScreen;
})();