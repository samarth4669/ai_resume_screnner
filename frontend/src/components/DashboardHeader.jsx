import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#e4eff2] px-8 pt-6 pb-3">
  <header className="bg-white border border-[#c5dde6] rounded-2xl shadow-sm overflow-hidden">

    {/* Top shine line */}
    <div className="h-px bg-gradient-to-r from-transparent via-[#2e7d82]/30 to-transparent" />

    <nav className="flex items-center justify-between px-8 py-4">

      {/* Left: Logo + Brand + Page */}
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate("/")}>

        {/* Logo bubble */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#2e7d82]/10 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
          <div className="relative bg-[#e4eff2] border border-[#c5dde6] p-2.5 rounded-xl">
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col leading-tight">
          <span className="text-[#1a2e35] font-black text-sm uppercase tracking-[0.2em]">
            AI Resume
          </span>
          <span className="text-[#2e7d82] font-bold text-[10px] uppercase tracking-[0.4em]">
            Screener
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-7 bg-[#c5dde6] mx-2" />

        {/* Page badge */}
        <div className="bg-[#e4eff2] border border-[#c5dde6] rounded-lg px-3 py-1">
          <span className="text-[#2e7d82] text-[11px] font-bold tracking-widest uppercase">
            Dashboard
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">

        {/* Live indicator */}
        <div className="hidden md:flex items-center gap-2 bg-[#e4eff2] border border-[#c5dde6] rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[#2e7d82] text-[11px] font-semibold tracking-wider uppercase">
            Live
          </span>
        </div>

        {/* New Screening */}
        <button
          onClick={() => navigate("/screen")}
          className="relative group flex items-center gap-2 px-5 py-2.5 rounded-xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e7d82] to-[#3a9aa0] opacity-90 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="absolute top-0 left-0 right-0 h-px bg-white/40" />
          <span className="relative text-white font-black text-xs uppercase tracking-widest">
            + New Screening
          </span>
        </button>

        {/* Home */}
        <button
          onClick={() => navigate("/")}
          className="bg-[#e4eff2] hover:bg-[#d4e6eb] border border-[#c5dde6] text-[#1a2e35] text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all duration-200"
        >
          Home
        </button>

      </div>
    </nav>

    {/* Bottom shine */}
    <div className="h-px bg-gradient-to-r from-transparent via-[#2e7d82]/20 to-transparent" />

  </header>
</div>
  );
}

export default DashboardHeader;