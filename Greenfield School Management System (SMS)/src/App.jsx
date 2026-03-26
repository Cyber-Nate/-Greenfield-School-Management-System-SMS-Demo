import { useState } from "react";

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Nunito',sans-serif;}
    ::-webkit-scrollbar{width:6px;height:6px;}
    ::-webkit-scrollbar-track{background:#f0f4ff;}
    ::-webkit-scrollbar-thumb{background:#a0b4ff;border-radius:6px;}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
    @keyframes popIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .fade-up{animation:fadeUp 0.4s cubic-bezier(.22,.68,0,1.2) both;}
    .float{animation:float 3s ease-in-out infinite;}
    .nav-item:hover{background:rgba(255,255,255,0.15)!important;transform:translateX(3px);}
    .nav-item{transition:all 0.18s ease;}
    .card-hover:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(79,70,229,0.15)!important;}
    .card-hover{transition:all 0.22s ease;}
    .btn-p:hover{filter:brightness(1.08);transform:translateY(-1px);}
    .btn-p{transition:all 0.15s ease;}
    input:focus,select:focus{outline:none;border-color:#6366f1!important;box-shadow:0 0 0 3px rgba(99,102,241,0.15);}
    table{border-collapse:collapse;width:100%;}
    th{background:#f0f4ff;color:#4f46e5;font-size:12px;text-transform:uppercase;letter-spacing:.5px;padding:10px 14px;text-align:left;font-family:'Poppins',sans-serif;white-space:nowrap;}
    td{padding:11px 14px;border-bottom:1px solid #eef0ff;font-size:13.5px;color:#374151;}
    tr:hover td{background:#f7f8ff;}
    .pb{height:8px;border-radius:99px;background:#e8eaff;}
    .pf{height:100%;border-radius:99px;transition:width 0.6s ease;}
    .tag{display:inline-block;padding:2px 10px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:.3px;}
  `}</style>
);

const T = {
  bg:"#f5f7ff", sidebar:"linear-gradient(165deg,#312e81 0%,#4338ca 60%,#6366f1 100%)",
  primary:"#4f46e5", secondary:"#f59e0b", green:"#10b981", red:"#ef4444",
  pink:"#ec4899", orange:"#f97316", card:"#ffffff", border:"#e8eaff",
  text:"#1e1b4b", muted:"#6b7280", light:"#f0f4ff",
};

const USERS = [
  { id:1, role:"admin",   name:"Mr. Adeola Ojo",    email:"admin@greenfield.edu",    pass:"admin123",   avatar:"🧑‍💼" },
  { id:2, role:"teacher", name:"Mrs. Ngozi Okafor", email:"n.okafor@greenfield.edu", pass:"teacher123", avatar:"👩‍🏫" },
  { id:3, role:"student", name:"Adaeze Okonkwo",    email:"adaeze@greenfield.edu",   pass:"student123", avatar:"👩‍🎓" },
];

const SUBJECTS = [
  { id:1, name:"Mathematics",      teacher:"Mr. Adeyemi",    class:"SS2A", enrolled:34, color:"#4f46e5", icon:"➗" },
  { id:2, name:"English Language", teacher:"Mrs. Okafor",    class:"SS2A", enrolled:34, color:"#f59e0b", icon:"📖" },
  { id:3, name:"Physics",          teacher:"Mr. Usman",      class:"SS3A", enrolled:28, color:"#10b981", icon:"⚛️" },
  { id:4, name:"Chemistry",        teacher:"Mrs. Adun",      class:"SS3A", enrolled:28, color:"#ec4899", icon:"🧪" },
  { id:5, name:"Biology",          teacher:"Mr. Nwachukwu",  class:"SS1B", enrolled:38, color:"#f97316", icon:"🧬" },
  { id:6, name:"Economics",        teacher:"Mrs. Lawal",     class:"SS2B", enrolled:31, color:"#8b5cf6", icon:"📈" },
];

const STUDENTS_DATA = [
  { id:1, name:"Adaeze Okonkwo",  class:"SS2A", gender:"F", avg:82, status:"Active" },
  { id:2, name:"Emeka Obi",       class:"SS1B", gender:"M", avg:75, status:"Active" },
  { id:3, name:"Fatimah Bello",   class:"SS3A", gender:"F", avg:91, status:"Active" },
  { id:4, name:"Chidi Eze",       class:"SS2B", gender:"M", avg:68, status:"Inactive" },
  { id:5, name:"Amara Nwosu",     class:"SS1A", gender:"F", avg:87, status:"Active" },
  { id:6, name:"Yusuf Abubakar",  class:"SS3B", gender:"M", avg:79, status:"Active" },
  { id:7, name:"Precious Eze",    class:"SS2A", gender:"F", avg:93, status:"Active" },
  { id:8, name:"Tunde Afolabi",   class:"SS1A", gender:"M", avg:61, status:"Active" },
];

const ASSIGNMENTS = [
  { id:1, title:"Quadratic Equations Set",      subject:"Mathematics", class:"SS2A", due:"2026-03-28", submitted:22, total:34, status:"Open",     maxScore:100 },
  { id:2, title:"Essay: Nigerian Literature",   subject:"English",     class:"SS2A", due:"2026-03-26", submitted:34, total:34, status:"Closed",   maxScore:50  },
  { id:3, title:"Mechanics Problem Sheet",      subject:"Physics",     class:"SS3A", due:"2026-03-30", submitted:15, total:28, status:"Open",     maxScore:100 },
  { id:4, title:"Organic Chemistry Lab Report", subject:"Chemistry",   class:"SS3A", due:"2026-04-02", submitted:0,  total:28, status:"Upcoming", maxScore:80  },
  { id:5, title:"Cell Biology Diagrams",        subject:"Biology",     class:"SS1B", due:"2026-03-27", submitted:38, total:38, status:"Closed",   maxScore:60  },
  { id:6, title:"Supply & Demand Analysis",     subject:"Economics",   class:"SS2B", due:"2026-04-05", submitted:8,  total:31, status:"Open",     maxScore:100 },
];

const ATTENDANCE = [
  { name:"Adaeze Okonkwo",  class:"SS2A", present:48, absent:4,  late:2, pct:89 },
  { name:"Emeka Obi",       class:"SS1B", present:50, absent:2,  late:2, pct:93 },
  { name:"Fatimah Bello",   class:"SS3A", present:52, absent:0,  late:2, pct:96 },
  { name:"Chidi Eze",       class:"SS2B", present:38, absent:14, late:2, pct:70 },
  { name:"Amara Nwosu",     class:"SS1A", present:51, absent:1,  late:2, pct:94 },
  { name:"Yusuf Abubakar",  class:"SS3B", present:46, absent:6,  late:2, pct:85 },
  { name:"Precious Eze",    class:"SS2A", present:53, absent:0,  late:1, pct:98 },
  { name:"Tunde Afolabi",   class:"SS1A", present:40, absent:12, late:2, pct:74 },
];

const TIMETABLE = {
  Monday:   ["Mathematics","English Language","Biology","Physics","—","Economics"],
  Tuesday:  ["English Language","Chemistry","Mathematics","Economics","Biology","—"],
  Wednesday:["Physics","Mathematics","English Language","Chemistry","—","Biology"],
  Thursday: ["Biology","Economics","Chemistry","English Language","Mathematics","—"],
  Friday:   ["Chemistry","Physics","Economics","Mathematics","English Language","Biology"],
};
const TIME_SLOTS = ["8:00–9:00","9:00–10:00","10:00–11:00","11:00–12:00","12:00–1:00 (Break)","1:00–2:00"];

const RESULTS = [
  { student:"Adaeze Okonkwo",  class:"SS2A", math:85, eng:79, phy:82, chem:78, bio:88, avg:82.4, pos:"3rd",  grade:"B" },
  { student:"Emeka Obi",       class:"SS1B", math:72, eng:80, phy:70, chem:75, bio:78, avg:75.0, pos:"12th", grade:"C" },
  { student:"Fatimah Bello",   class:"SS3A", math:93, eng:90, phy:89, chem:91, bio:92, avg:91.0, pos:"1st",  grade:"A" },
  { student:"Chidi Eze",       class:"SS2B", math:65, eng:70, phy:62, chem:68, bio:75, avg:68.0, pos:"22nd", grade:"D" },
  { student:"Precious Eze",    class:"SS2A", math:95, eng:92, phy:90, chem:93, bio:95, avg:93.0, pos:"1st",  grade:"A" },
  { student:"Tunde Afolabi",   class:"SS1A", math:58, eng:65, phy:55, chem:60, bio:67, avg:61.0, pos:"28th", grade:"E" },
];

const ANNOUNCEMENTS = [
  { id:1, title:"2nd Term Exam Timetable Released",    cat:"Exams",    date:"2026-03-24", priority:"High",   author:"Admin",       body:"Examinations commence April 7th, 2026. Check the notice board for the full schedule and prepare accordingly. All students must be present 15 minutes before each paper." },
  { id:2, title:"Parent-Teacher Meeting – April 5th",  cat:"Events",   date:"2026-03-22", priority:"Medium", author:"Principal",   body:"All parents and guardians are invited to the quarterly Parent-Teacher Meeting on April 5th, 2026 at 10:00AM in the school hall. Attendance is compulsory." },
  { id:3, title:"New Library Books Available",         cat:"Academic", date:"2026-03-20", priority:"Low",    author:"Librarian",   body:"A new batch of reference and fiction books has been added to the library. Students may borrow up to 2 books at a time with a valid school ID." },
  { id:4, title:"Inter-House Sports Day – March 29th", cat:"Sports",   date:"2026-03-18", priority:"Medium", author:"Sports Dept", body:"The annual Inter-House Sports Day is March 29th, 2026. All houses must submit athletes' lists by March 26th. Students must wear house colours." },
  { id:5, title:"Computer Lab Upgrade Complete",       cat:"Academic", date:"2026-03-15", priority:"Low",    author:"IT Dept",     body:"The computer lab has been upgraded with 20 new systems. Students may now book sessions via the portal. Priority given to SS3 candidates." },
];

const TEACHERS = [
  { id:1, name:"Mr. Taiwo Adeyemi",    subject:"Mathematics",       classes:"SS2A/SS2B", email:"t.adeyemi@greenfield.edu",   status:"Active"   },
  { id:2, name:"Mrs. Ngozi Okafor",    subject:"English Language",  classes:"SS1A/SS2A", email:"n.okafor@greenfield.edu",    status:"Active"   },
  { id:3, name:"Mr. Ibrahim Usman",    subject:"Physics",           classes:"SS3A/SS3B", email:"i.usman@greenfield.edu",     status:"Active"   },
  { id:4, name:"Mrs. Chioma Adun",     subject:"Chemistry",         classes:"SS3A/SS3B", email:"c.adun@greenfield.edu",      status:"On Leave" },
  { id:5, name:"Mr. Emeka Nwachukwu", subject:"Biology",            classes:"SS1B/SS2B", email:"e.nwachukwu@greenfield.edu", status:"Active"   },
  { id:6, name:"Mrs. Aisha Lawal",     subject:"Economics",         classes:"SS2A/SS2B", email:"a.lawal@greenfield.edu",     status:"Active"   },
];

const NAV = [
  { key:"dashboard",     label:"Dashboard",     icon:"⊞" },
  { key:"students",      label:"Students",       icon:"👤" },
  { key:"subjects",      label:"Subjects",       icon:"📚" },
  { key:"assignments",   label:"Assignments",    icon:"📝" },
  { key:"attendance",    label:"Attendance",     icon:"✅" },
  { key:"timetable",     label:"Timetable",      icon:"🗓" },
  { key:"results",       label:"Results",        icon:"📊" },
  { key:"teachers",      label:"Teachers",       icon:"🎓" },
  { key:"announcements", label:"Announcements",  icon:"📢" },
];

/* helpers */
const sc = s => s==="Active"||s==="Open"||s==="High"?T.green : s==="Closed"||s==="On Leave"||s==="Inactive"?T.red : s==="Upcoming"||s==="Medium"?T.secondary : T.muted;
const gc = g => g==="A"?T.green:g==="B"?T.primary:g==="C"?T.secondary:g==="D"?T.orange:T.red;
const ac = p => p>=90?T.green:p>=75?T.secondary:T.red;

function Tag({ text, color }) {
  return <span className="tag" style={{ color, background:color+"1a", border:`1px solid ${color}33` }}>{text}</span>;
}

function Av({ name, size=36, bg=T.primary }) {
  const i = name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return <div style={{ width:size,height:size,borderRadius:"50%",background:`linear-gradient(135deg,${bg},${bg}bb)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:size*.36,fontFamily:"Poppins,sans-serif",flexShrink:0 }}>{i}</div>;
}

function Card({ children, style={} }) {
  return <div className="card-hover" style={{ background:T.card,borderRadius:16,padding:22,border:`1px solid ${T.border}`,boxShadow:"0 4px 16px rgba(79,70,229,0.07)",...style }}>{children}</div>;
}

function Sec({ title, sub, action }) {
  return (
    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:22 }}>
      <div><h2 style={{ fontFamily:"Poppins,sans-serif",fontSize:20,fontWeight:700,color:T.text,margin:0 }}>{title}</h2>{sub&&<p style={{ margin:"3px 0 0",color:T.muted,fontSize:13 }}>{sub}</p>}</div>
      {action}
    </div>
  );
}

function Stat({ label, value, icon, color, sub }) {
  return (
    <Card style={{ display:"flex",alignItems:"center",gap:16,padding:20 }}>
      <div style={{ width:52,height:52,borderRadius:14,background:`linear-gradient(135deg,${color}22,${color}44)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily:"Poppins,sans-serif",fontSize:26,fontWeight:800,color:T.text,lineHeight:1 }}>{value}</div>
        <div style={{ fontSize:13,color:T.muted,marginTop:3,fontWeight:600 }}>{label}</div>
        {sub&&<div style={{ fontSize:11,color,marginTop:2,fontWeight:700 }}>{sub}</div>}
      </div>
    </Card>
  );
}

function Btn({ children, onClick, v="p", style={} }) {
  const base = { cursor:"pointer",border:"none",borderRadius:10,padding:"9px 18px",fontWeight:700,fontSize:13.5,fontFamily:"Nunito,sans-serif",display:"inline-flex",alignItems:"center",gap:6 };
  const vs = {
    p: { ...base, background:`linear-gradient(135deg,${T.primary},#6366f1)`,color:"#fff",boxShadow:"0 4px 12px rgba(79,70,229,.3)" },
    s: { ...base, background:`linear-gradient(135deg,${T.green},#34d399)`,color:"#fff",boxShadow:"0 4px 12px rgba(16,185,129,.3)" },
    g: { ...base, background:"transparent",color:T.primary,border:`1.5px solid ${T.primary}` },
    d: { ...base, background:`linear-gradient(135deg,${T.red},#f87171)`,color:"#fff" },
  };
  return <button className="btn-p" onClick={onClick} style={{ ...vs[v||"p"],...style }}>{children}</button>;
}

/* ── LOGIN ── */
function Login({ onLogin }) {
  const [em,setEm]=useState(""); const [pw,setPw]=useState(""); const [err,setErr]=useState(""); const [load,setLoad]=useState(false);
  const go=()=>{ setLoad(true);setErr(""); setTimeout(()=>{ const u=USERS.find(u=>u.email===em.trim()&&u.pass===pw); if(u) onLogin(u); else {setErr("Invalid credentials — try the demo accounts below.");setLoad(false);} },700); };
  const inp={ width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${T.border}`,fontSize:14,fontFamily:"Nunito,sans-serif",color:T.text,background:"#f8f9ff" };
  return (
    <div style={{ minHeight:"100vh",background:"linear-gradient(145deg,#eef2ff,#e0e7ff 50%,#ede9fe)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",top:-80,left:-80,width:300,height:300,borderRadius:"50%",background:"rgba(99,102,241,.12)",filter:"blur(40px)" }}/>
      <div style={{ position:"absolute",bottom:-60,right:-60,width:350,height:350,borderRadius:"50%",background:"rgba(245,158,11,.10)",filter:"blur(40px)" }}/>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",maxWidth:900,width:"100%",borderRadius:24,overflow:"hidden",boxShadow:"0 24px 80px rgba(79,70,229,.2)",position:"relative",zIndex:1 }}>
        {/* left */}
        <div style={{ background:"linear-gradient(165deg,#312e81,#4338ca,#6366f1)",padding:48,display:"flex",flexDirection:"column",justifyContent:"center",color:"#fff" }}>
          <div className="float" style={{ fontSize:64,marginBottom:20 }}>🏫</div>
          <h1 style={{ fontFamily:"Poppins,sans-serif",fontSize:28,fontWeight:800,lineHeight:1.2,margin:"0 0 12px" }}>Greenfield Secondary School</h1>
          <p style={{ fontSize:14,opacity:.85,lineHeight:1.7,marginBottom:32 }}>Your all-in-one Learning Management System — access courses, assignments, results and more from anywhere.</p>
          {[["📚","Smart Course Management"],["✅","Real-time Attendance Tracking"],["📊","Instant Results & Analytics"],["📢","School-wide Announcements"]].map(([ic,tx])=>(
            <div key={tx} style={{ display:"flex",alignItems:"center",gap:12,fontSize:13.5,opacity:.9,marginBottom:10 }}><span style={{ fontSize:18 }}>{ic}</span>{tx}</div>
          ))}
        </div>
        {/* right */}
        <div style={{ background:"#fff",padding:48,display:"flex",flexDirection:"column",justifyContent:"center" }}>
          <h2 style={{ fontFamily:"Poppins,sans-serif",fontSize:22,fontWeight:800,color:T.text,margin:"0 0 6px" }}>Welcome Back! 👋</h2>
          <p style={{ color:T.muted,fontSize:13.5,marginBottom:28 }}>Sign in to your student or staff portal</p>
          <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
            <div><label style={{ fontSize:12,fontWeight:700,color:T.muted,letterSpacing:.3,display:"block",marginBottom:6 }}>EMAIL ADDRESS</label><input value={em} onChange={e=>setEm(e.target.value)} placeholder="your@email.com" style={inp} onKeyDown={e=>e.key==="Enter"&&go()} /></div>
            <div><label style={{ fontSize:12,fontWeight:700,color:T.muted,letterSpacing:.3,display:"block",marginBottom:6 }}>PASSWORD</label><input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="••••••••" style={inp} onKeyDown={e=>e.key==="Enter"&&go()} /></div>
            {err&&<div style={{ background:"#fef2f2",border:"1px solid #fecaca",borderRadius:8,padding:"8px 12px",color:T.red,fontSize:13 }}>⚠️ {err}</div>}
            <Btn onClick={go} style={{ width:"100%",justifyContent:"center",padding:"12px 0",fontSize:15,marginTop:4 }}>{load?"Signing in…":"Sign In →"}</Btn>
          </div>
          <div style={{ marginTop:24 }}>
            <p style={{ fontSize:11,fontWeight:700,color:T.muted,letterSpacing:.5,marginBottom:10 }}>QUICK DEMO LOGIN</p>
            {USERS.map(u=>(
              <button key={u.id} onClick={()=>{setEm(u.email);setPw(u.pass);}} style={{ width:"100%",display:"flex",alignItems:"center",gap:10,background:T.light,border:`1.5px solid ${T.border}`,borderRadius:10,padding:"8px 12px",cursor:"pointer",fontFamily:"Nunito,sans-serif",marginBottom:8 }}>
                <span style={{ fontSize:20 }}>{u.avatar}</span>
                <div style={{ textAlign:"left" }}>
                  <div style={{ fontSize:13,fontWeight:700,color:T.text }}>{u.name}</div>
                  <div style={{ fontSize:11,color:T.muted }}>{u.role} · {u.email}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── DASHBOARD ── */
function Dashboard({ user }) {
  return (
    <div className="fade-up">
      <div style={{ marginBottom:24 }}>
        <h2 style={{ fontFamily:"Poppins,sans-serif",fontSize:22,fontWeight:800,color:T.text,margin:0 }}>Good morning, {user.name.split(" ")[user.role==="student"?1:1]} {user.avatar}</h2>
        <p style={{ margin:"4px 0 0",color:T.muted,fontSize:13.5 }}>2025/2026 Academic Session · 2nd Term · Wednesday, March 25</p>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:22 }}>
        <Stat label="Total Students" value="482" icon="👤" color={T.primary} sub="↑12 this term" />
        <Stat label="Teaching Staff"  value="38"  icon="🎓" color="#8b5cf6" sub="4 on leave" />
        <Stat label="Active Subjects" value="24"  icon="📚" color={T.secondary} sub="6 classes" />
        <Stat label="Avg Attendance"  value="88%" icon="✅" color={T.green} sub="This week" />
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1.6fr 1fr",gap:18 }}>
        <Card>
          <h3 style={{ fontFamily:"Poppins,sans-serif",fontSize:15,fontWeight:700,color:T.text,marginBottom:16 }}>📚 Subjects at a Glance</h3>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            {SUBJECTS.map(s=>(
              <div key={s.id} style={{ background:T.light,borderRadius:12,padding:"12px 14px",border:`2px solid ${s.color}22` }}>
                <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:6 }}><span style={{ fontSize:20 }}>{s.icon}</span><div style={{ fontSize:13,fontWeight:700,color:T.text }}>{s.name}</div></div>
                <div style={{ fontSize:12,color:T.muted }}>{s.teacher}</div>
                <div style={{ fontSize:12,color:s.color,fontWeight:700,marginTop:3 }}>{s.enrolled} students · {s.class}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 style={{ fontFamily:"Poppins,sans-serif",fontSize:15,fontWeight:700,color:T.text,marginBottom:16 }}>📢 Announcements</h3>
          {ANNOUNCEMENTS.slice(0,4).map(a=>(
            <div key={a.id} style={{ padding:"9px 12px",background:T.light,borderRadius:10,borderLeft:`3px solid ${sc(a.priority)}`,marginBottom:10 }}>
              <div style={{ display:"flex",justifyContent:"space-between",gap:6 }}><div style={{ fontSize:13,fontWeight:700,color:T.text,lineHeight:1.3 }}>{a.title}</div><Tag text={a.priority} color={sc(a.priority)}/></div>
              <div style={{ fontSize:11,color:T.muted,marginTop:3 }}>{a.date} · {a.author}</div>
            </div>
          ))}
        </Card>
      </div>
      <Card style={{ marginTop:18 }}>
        <h3 style={{ fontFamily:"Poppins,sans-serif",fontSize:15,fontWeight:700,color:T.text,marginBottom:16 }}>📝 Open Assignments</h3>
        <table>
          <thead><tr><th>Title</th><th>Subject</th><th>Class</th><th>Due</th><th>Submissions</th><th>Status</th></tr></thead>
          <tbody>{ASSIGNMENTS.filter(a=>a.status!=="Closed").map(a=>(
            <tr key={a.id}>
              <td style={{ fontWeight:600 }}>{a.title}</td><td>{a.subject}</td><td>{a.class}</td><td>{a.due}</td>
              <td><div style={{ display:"flex",alignItems:"center",gap:8 }}><div className="pb" style={{ width:80 }}><div className="pf" style={{ width:`${(a.submitted/a.total)*100}%`,background:T.primary }}/></div><span style={{ fontSize:12,color:T.muted }}>{a.submitted}/{a.total}</span></div></td>
              <td><Tag text={a.status} color={sc(a.status)}/></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

/* ── STUDENTS ── */
function Students() {
  const [q,setQ]=useState(""); const [cls,setCls]=useState("All");
  const classes=["All",...new Set(STUDENTS_DATA.map(s=>s.class))];
  const list=STUDENTS_DATA.filter(s=>(cls==="All"||s.class===cls)&&s.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="fade-up">
      <Sec title="Students" sub={`${STUDENTS_DATA.length} enrolled`} action={<Btn v="s">＋ Add Student</Btn>}/>
      <Card>
        <div style={{ display:"flex",gap:12,marginBottom:18,flexWrap:"wrap" }}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="🔍 Search students…" style={{ flex:1,minWidth:180,padding:"9px 14px",borderRadius:10,border:`1.5px solid ${T.border}`,fontSize:13.5,fontFamily:"Nunito,sans-serif" }}/>
          <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
            {classes.map(c=><button key={c} onClick={()=>setCls(c)} style={{ padding:"8px 14px",borderRadius:8,border:`1.5px solid ${cls===c?T.primary:T.border}`,background:cls===c?T.primary:"transparent",color:cls===c?"#fff":T.muted,cursor:"pointer",fontWeight:700,fontSize:12.5,fontFamily:"Nunito,sans-serif" }}>{c}</button>)}
          </div>
        </div>
        <table>
          <thead><tr><th>Student</th><th>Class</th><th>Gender</th><th>Avg Score</th><th>Grade</th><th>Status</th></tr></thead>
          <tbody>{list.map(s=>{ const g=s.avg>=80?"A":s.avg>=70?"B":s.avg>=60?"C":s.avg>=50?"D":"E"; return (
            <tr key={s.id}>
              <td><div style={{ display:"flex",alignItems:"center",gap:10 }}><Av name={s.name} size={34}/><b>{s.name}</b></div></td>
              <td><Tag text={s.class} color={T.primary}/></td>
              <td>{s.gender==="F"?"♀ Female":"♂ Male"}</td>
              <td><b style={{ color:T.primary }}>{s.avg}%</b></td>
              <td><Tag text={g} color={gc(g)}/></td>
              <td><Tag text={s.status} color={sc(s.status)}/></td>
            </tr>
          );})}</tbody>
        </table>
      </Card>
    </div>
  );
}

/* ── SUBJECTS ── */
function Subjects() {
  return (
    <div className="fade-up">
      <Sec title="Course & Subject Management" sub="All subjects across classes" action={<Btn v="s">＋ Add Subject</Btn>}/>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginBottom:22 }}>
        {SUBJECTS.map(s=>(
          <Card key={s.id} style={{ borderTop:`4px solid ${s.color}`,cursor:"pointer" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14 }}>
              <div style={{ width:48,height:48,borderRadius:13,background:s.color+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26 }}>{s.icon}</div>
              <Tag text={s.class} color={s.color}/>
            </div>
            <div style={{ fontFamily:"Poppins,sans-serif",fontSize:16,fontWeight:700,color:T.text,marginBottom:4 }}>{s.name}</div>
            <div style={{ fontSize:13,color:T.muted,marginBottom:12 }}>👤 {s.teacher}</div>
            <div style={{ display:"flex",justifyContent:"space-between",fontSize:13 }}>
              <span style={{ color:T.muted }}>👥 {s.enrolled} students</span>
              <button style={{ background:"none",border:"none",color:s.color,cursor:"pointer",fontWeight:700,fontSize:13 }}>Manage →</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── ASSIGNMENTS ── */
function Assignments() {
  const [f,setF]=useState("All"); const fl=f==="All"?ASSIGNMENTS:ASSIGNMENTS.filter(a=>a.status===f);
  return (
    <div className="fade-up">
      <Sec title="Assignments & Grading" sub="Track coursework and submissions" action={<Btn v="s">＋ New Assignment</Btn>}/>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:22 }}>
        <Stat label="Total" value={ASSIGNMENTS.length} icon="📝" color={T.primary}/>
        <Stat label="Open" value={ASSIGNMENTS.filter(a=>a.status==="Open").length} icon="🟢" color={T.green}/>
        <Stat label="Upcoming" value={ASSIGNMENTS.filter(a=>a.status==="Upcoming").length} icon="🔔" color={T.secondary}/>
      </div>
      <Card>
        <div style={{ display:"flex",gap:8,marginBottom:18 }}>
          {["All","Open","Closed","Upcoming"].map(s=><button key={s} onClick={()=>setF(s)} style={{ padding:"7px 16px",borderRadius:8,border:`1.5px solid ${f===s?T.primary:T.border}`,background:f===s?T.primary:"transparent",color:f===s?"#fff":T.muted,cursor:"pointer",fontWeight:700,fontSize:12.5,fontFamily:"Nunito,sans-serif" }}>{s}</button>)}
        </div>
        <table>
          <thead><tr><th>Assignment</th><th>Subject</th><th>Class</th><th>Due</th><th>Max</th><th>Submissions</th><th>Status</th></tr></thead>
          <tbody>{fl.map(a=>(
            <tr key={a.id}>
              <td style={{ fontWeight:700 }}>{a.title}</td><td>{a.subject}</td><td>{a.class}</td>
              <td style={{ color:a.status==="Upcoming"?T.secondary:T.muted,fontWeight:600 }}>{a.due}</td><td>{a.maxScore}</td>
              <td><div style={{ display:"flex",alignItems:"center",gap:8 }}><div className="pb" style={{ width:70 }}><div className="pf" style={{ width:`${Math.round(a.submitted/a.total*100)}%`,background:T.primary }}/></div><span style={{ fontSize:12,color:T.muted }}>{a.submitted}/{a.total}</span></div></td>
              <td><Tag text={a.status} color={sc(a.status)}/></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

/* ── ATTENDANCE ── */
function Attendance() {
  const [p,setP]=useState("This Term");
  return (
    <div className="fade-up">
      <Sec title="Attendance Tracker" sub="Monitor presence and absence patterns" action={<Btn>📥 Export</Btn>}/>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:22 }}>
        <Stat label="Avg Attendance" value="88%" icon="📊" color={T.primary}/>
        <Stat label="Present Today"  value="421" icon="✅" color={T.green} sub="87.3%"/>
        <Stat label="Absent Today"   value="47"  icon="❌" color={T.red}  sub="9.7%"/>
        <Stat label="Late Arrivals"  value="14"  icon="⏰" color={T.secondary}/>
      </div>
      <Card>
        <div style={{ display:"flex",gap:8,marginBottom:18,alignItems:"center" }}>
          <span style={{ fontSize:13,fontWeight:700,color:T.muted,marginRight:4 }}>Period:</span>
          {["Today","This Week","This Month","This Term"].map(d=><button key={d} onClick={()=>setP(d)} style={{ padding:"7px 14px",borderRadius:8,border:`1.5px solid ${p===d?T.primary:T.border}`,background:p===d?T.primary:"transparent",color:p===d?"#fff":T.muted,cursor:"pointer",fontWeight:700,fontSize:12.5,fontFamily:"Nunito,sans-serif" }}>{d}</button>)}
        </div>
        <table>
          <thead><tr><th>Student</th><th>Class</th><th>Present</th><th>Absent</th><th>Late</th><th>Rate</th><th>Status</th></tr></thead>
          <tbody>{ATTENDANCE.map((a,i)=>(
            <tr key={i}>
              <td><div style={{ display:"flex",alignItems:"center",gap:10 }}><Av name={a.name} size={32}/><b>{a.name}</b></div></td>
              <td><Tag text={a.class} color={T.primary}/></td>
              <td style={{ color:T.green,fontWeight:700 }}>{a.present}</td>
              <td style={{ color:T.red,fontWeight:700 }}>{a.absent}</td>
              <td style={{ color:T.secondary,fontWeight:700 }}>{a.late}</td>
              <td><div style={{ display:"flex",alignItems:"center",gap:8 }}><div className="pb" style={{ width:80 }}><div className="pf" style={{ width:`${a.pct}%`,background:ac(a.pct) }}/></div><b style={{ color:ac(a.pct),fontSize:13 }}>{a.pct}%</b></div></td>
              <td><Tag text={a.pct>=75?"Good":a.pct>=60?"Fair":"At Risk"} color={ac(a.pct)}/></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

/* ── TIMETABLE ── */
const SColor = { Mathematics:"#4f46e5","English Language":"#f59e0b",Physics:"#10b981",Chemistry:"#ec4899",Biology:"#f97316",Economics:"#8b5cf6" };
function Timetable() {
  const [day,setDay]=useState("Monday");
  return (
    <div className="fade-up">
      <Sec title="Timetable / Schedule" sub="Weekly class schedule — SS2A"/>
      <div style={{ display:"flex",gap:10,marginBottom:20,flexWrap:"wrap" }}>
        {Object.keys(TIMETABLE).map(d=><button key={d} onClick={()=>setDay(d)} style={{ padding:"9px 20px",borderRadius:10,border:`1.5px solid ${day===d?T.primary:T.border}`,background:day===d?T.primary:"#fff",color:day===d?"#fff":T.muted,cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"Nunito,sans-serif",transition:"all .15s" }}>{d}</button>)}
      </div>
      <Card>
        <table>
          <thead><tr><th style={{ width:130 }}>Time</th><th>Subject</th><th>Teacher</th><th>Room</th></tr></thead>
          <tbody>{TIME_SLOTS.map((sl,i)=>{
            const sub=TIMETABLE[day]?.[i]||"—"; const tc=SUBJECTS.find(s=>s.name===sub)?.teacher||"—"; const col=SColor[sub]||T.muted;
            return (<tr key={sl}>
              <td style={{ fontWeight:700,color:T.primary,fontFamily:"Poppins,sans-serif" }}>{sl}</td>
              <td>{sub!=="—"?<div style={{ display:"flex",alignItems:"center",gap:10 }}><div style={{ width:10,height:10,borderRadius:"50%",background:col }}/><span style={{ fontWeight:700,color:col }}>{sub}</span></div>:<span style={{ color:"#ccc" }}>— Break —</span>}</td>
              <td style={{ color:T.muted }}>{tc}</td>
              <td style={{ color:T.muted }}>Room {101+i}</td>
            </tr>);
          })}</tbody>
        </table>
      </Card>
      <Card style={{ marginTop:16 }}>
        <div style={{ fontFamily:"Poppins,sans-serif",fontSize:13,fontWeight:700,color:T.text,marginBottom:12 }}>Subject Color Key</div>
        <div style={{ display:"flex",flexWrap:"wrap",gap:14 }}>
          {SUBJECTS.map(s=><div key={s.id} style={{ display:"flex",alignItems:"center",gap:7 }}><div style={{ width:11,height:11,borderRadius:"50%",background:s.color }}/><span style={{ fontSize:13,color:T.muted }}>{s.name}</span></div>)}
        </div>
      </Card>
    </div>
  );
}

/* ── RESULTS ── */
function Results() {
  const [term,setTerm]=useState("2nd Term");
  return (
    <div className="fade-up">
      <Sec title="Results & Report Cards" sub="Academic performance summary" action={<Btn>🖨 Print Cards</Btn>}/>
      <div style={{ display:"flex",gap:10,marginBottom:20 }}>
        {["1st Term","2nd Term","3rd Term"].map(t=><button key={t} onClick={()=>setTerm(t)} style={{ padding:"8px 20px",borderRadius:10,border:`1.5px solid ${term===t?T.primary:T.border}`,background:term===t?T.primary:"#fff",color:term===t?"#fff":T.muted,cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"Nunito,sans-serif" }}>{t}</button>)}
      </div>
      <Card>
        <div style={{ overflowX:"auto" }}>
          <table>
            <thead><tr><th>Student</th><th>Class</th><th>Math</th><th>English</th><th>Physics</th><th>Chemistry</th><th>Biology</th><th>Average</th><th>Grade</th><th>Position</th></tr></thead>
            <tbody>{RESULTS.map((r,i)=>(
              <tr key={i}>
                <td><div style={{ display:"flex",alignItems:"center",gap:10 }}><Av name={r.student} size={32}/><b>{r.student}</b></div></td>
                <td><Tag text={r.class} color={T.primary}/></td>
                {[r.math,r.eng,r.phy,r.chem,r.bio].map((v,j)=><td key={j} style={{ fontWeight:600,color:v>=80?T.green:v>=60?T.primary:T.red }}>{v}</td>)}
                <td><b style={{ color:T.primary,fontSize:15 }}>{r.avg}</b></td>
                <td><Tag text={r.grade} color={gc(r.grade)}/></td>
                <td style={{ fontWeight:700 }}>{r.pos}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Card>
      <div style={{ display:"flex",gap:12,marginTop:16,flexWrap:"wrap" }}>
        {[["A","80–100","Excellent"],["B","70–79","Very Good"],["C","60–69","Good"],["D","50–59","Pass"],["E","<50","Fail"]].map(([g,r,l])=>(
          <div key={g} style={{ background:"#fff",borderRadius:10,padding:"10px 16px",border:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:8 }}>
            <Tag text={g} color={gc(g)}/><div><div style={{ fontSize:12,fontWeight:700,color:T.text }}>{r}</div><div style={{ fontSize:11,color:T.muted }}>{l}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── TEACHERS ── */
function Teachers() {
  return (
    <div className="fade-up">
      <Sec title="Teacher Portal" sub="Staff directory and assignments" action={<Btn v="s">＋ Add Teacher</Btn>}/>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18 }}>
        {TEACHERS.map(t=>(
          <Card key={t.id} style={{ cursor:"pointer" }}>
            <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:14 }}><Av name={t.name} size={48} bg="#8b5cf6"/><div><div style={{ fontFamily:"Poppins,sans-serif",fontSize:14,fontWeight:700,color:T.text }}>{t.name}</div><div style={{ fontSize:12,color:T.muted }}>{t.subject}</div></div></div>
            <div style={{ display:"flex",flexDirection:"column",gap:5,fontSize:12.5,color:T.muted }}>
              <span>🏫 <b style={{ color:T.text }}>{t.classes}</b></span>
              <span>📧 {t.email}</span>
            </div>
            <div style={{ marginTop:12,display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <Tag text={t.status} color={sc(t.status)}/>
              <button style={{ background:"none",border:"none",color:T.primary,cursor:"pointer",fontWeight:700,fontSize:12.5 }}>View Profile →</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── ANNOUNCEMENTS ── */
function Announcements() {
  const [sel,setSel]=useState(null); const [f,setF]=useState("All");
  const cc=c=>c==="Exams"?T.red:c==="Events"?T.primary:c==="Academic"?T.green:c==="Sports"?T.orange:T.secondary;
  const list=f==="All"?ANNOUNCEMENTS:ANNOUNCEMENTS.filter(a=>a.cat===f);
  return (
    <div className="fade-up">
      <Sec title="Announcements & Notice Board" sub="School-wide communications" action={<Btn v="s">＋ New</Btn>}/>
      <div style={{ display:"flex",gap:8,marginBottom:20 }}>
        {["All","Exams","Events","Academic","Sports"].map(c=><button key={c} onClick={()=>setF(c)} style={{ padding:"7px 16px",borderRadius:8,border:`1.5px solid ${f===c?T.primary:T.border}`,background:f===c?T.primary:"#fff",color:f===c?"#fff":T.muted,cursor:"pointer",fontWeight:700,fontSize:12.5,fontFamily:"Nunito,sans-serif" }}>{c}</button>)}
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:18 }}>
        <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
          {list.map(a=>(
            <Card key={a.id} style={{ cursor:"pointer",borderLeft:`4px solid ${cc(a.cat)}`,background:sel?.id===a.id?"#f0f4ff":T.card }} onClick={()=>setSel(a)}>
              <div style={{ display:"flex",justifyContent:"space-between",marginBottom:8 }}><Tag text={a.cat} color={cc(a.cat)}/><Tag text={a.priority} color={sc(a.priority)}/></div>
              <div style={{ fontFamily:"Poppins,sans-serif",fontSize:14,fontWeight:700,color:T.text,marginBottom:5 }}>{a.title}</div>
              <div style={{ fontSize:12,color:T.muted }}>{a.date} · {a.author}</div>
            </Card>
          ))}
        </div>
        <div>
          {sel ? (
            <Card style={{ position:"sticky",top:0 }}>
              <div style={{ display:"flex",justifyContent:"space-between",marginBottom:12 }}><Tag text={sel.cat} color={cc(sel.cat)}/><button onClick={()=>setSel(null)} style={{ background:"none",border:"none",cursor:"pointer",fontSize:18,color:T.muted }}>✕</button></div>
              <h3 style={{ fontFamily:"Poppins,sans-serif",fontSize:17,fontWeight:800,color:T.text,margin:"0 0 8px" }}>{sel.title}</h3>
              <div style={{ fontSize:12,color:T.muted,marginBottom:16 }}>📅 {sel.date} · ✍️ {sel.author}</div>
              <p style={{ fontSize:14,color:T.text,lineHeight:1.8 }}>{sel.body}</p>
              <div style={{ marginTop:20,display:"flex",gap:10 }}><Btn>📌 Pin</Btn><Btn v="g">✏️ Edit</Btn><Btn v="d">🗑 Delete</Btn></div>
            </Card>
          ) : (
            <Card style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:200,color:T.muted }}>
              <div style={{ fontSize:40,marginBottom:10 }}>📢</div>
              <div style={{ fontSize:14 }}>Select an announcement to read</div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── APP ── */
export default function App() {
  const [user,setUser]=useState(null);
  const [page,setPage]=useState("dashboard");
  if (!user) return <><FontLink/><Login onLogin={u=>{setUser(u);setPage("dashboard");}}/></>;
  const pages={ dashboard:<Dashboard user={user}/>, students:<Students/>, subjects:<Subjects/>, assignments:<Assignments/>, attendance:<Attendance/>, timetable:<Timetable/>, results:<Results/>, teachers:<Teachers/>, announcements:<Announcements/> };
  return (
    <>
      <FontLink/>
      <div style={{ display:"flex",minHeight:"100vh",fontFamily:"Nunito,sans-serif",background:T.bg }}>
        {/* Sidebar */}
        <aside style={{ width:228,background:T.sidebar,display:"flex",flexDirection:"column",position:"fixed",top:0,left:0,height:"100vh",zIndex:100 }}>
          <div style={{ padding:"22px 18px 16px",borderBottom:"1px solid rgba(255,255,255,.12)" }}>
            <div style={{ display:"flex",alignItems:"center",gap:12 }}>
              <div style={{ width:40,height:40,borderRadius:12,background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>🏫</div>
              <div><div style={{ color:"#fff",fontFamily:"Poppins,sans-serif",fontWeight:800,fontSize:13 }}>Greenfield</div><div style={{ color:"rgba(255,255,255,.6)",fontSize:11 }}>Secondary School</div></div>
            </div>
          </div>
          <nav style={{ flex:1,padding:"12px 10px",overflowY:"auto" }}>
            {NAV.map(n=>{
              const a=page===n.key;
              return <button key={n.key} className="nav-item" onClick={()=>setPage(n.key)} style={{ display:"flex",alignItems:"center",gap:12,width:"100%",padding:"10px 14px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:2,background:a?"rgba(255,255,255,.18)":"transparent",color:a?"#fff":"rgba(255,255,255,.65)",fontWeight:a?700:600,fontSize:14,fontFamily:"Nunito,sans-serif",textAlign:"left" }}>
                <span style={{ fontSize:16 }}>{n.icon}</span>{n.label}{a&&<div style={{ marginLeft:"auto",width:6,height:6,borderRadius:"50%",background:"#a5f3fc" }}/>}
              </button>;
            })}
          </nav>
          <div style={{ padding:"12px 14px",borderTop:"1px solid rgba(255,255,255,.12)" }}>
            <div style={{ display:"flex",alignItems:"center",gap:10 }}>
              <div style={{ width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>{user.avatar}</div>
              <div style={{ flex:1 }}><div style={{ color:"#fff",fontWeight:700,fontSize:12.5,lineHeight:1.2 }}>{user.name.split(" ").slice(0,2).join(" ")}</div><div style={{ color:"rgba(255,255,255,.55)",fontSize:11 }}>{user.role}</div></div>
              <button onClick={()=>setUser(null)} style={{ background:"none",border:"none",color:"rgba(255,255,255,.5)",cursor:"pointer",fontSize:16 }} title="Logout">⏻</button>
            </div>
          </div>
        </aside>
        {/* Main */}
        <main style={{ marginLeft:228,flex:1,padding:"26px 30px",minHeight:"100vh" }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22,background:"#fff",borderRadius:14,padding:"11px 20px",border:`1px solid ${T.border}`,boxShadow:"0 2px 8px rgba(79,70,229,.06)" }}>
            <div style={{ fontSize:13,color:T.muted }}>📅 Wed, March 25 2026 · <b style={{ color:T.primary }}>2nd Term</b></div>
            <div style={{ display:"flex",alignItems:"center",gap:12 }}>
              <button style={{ background:"none",border:"none",fontSize:20,cursor:"pointer" }}>🔔</button>
              <div style={{ display:"flex",alignItems:"center",gap:8 }}><span style={{ fontSize:18 }}>{user.avatar}</span><span style={{ fontWeight:700,fontSize:13,color:T.text }}>{user.name.split(" ")[0]}</span><Tag text={user.role} color={T.primary}/></div>
            </div>
          </div>
          {pages[page]||<Dashboard user={user}/>}
        </main>
      </div>
    </>
  );
}
