function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-[25%] h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
    </div>
  )
}

export default Background
