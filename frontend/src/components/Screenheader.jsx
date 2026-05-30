// Screenheader.jsx
// Screenheader.jsx
import logo from "../assets/logo.png";

function Screenheader({ currentstep }) {
  const steps = [
    { label: "Step 1: Upload & JD", shortLabel: "Upload", active: currentstep === "upload" },
    { label: "2. Analysis",         shortLabel: "Analyze", active: currentstep === "analyzing" },
    { label: "3. Results",          shortLabel: "Results", active: currentstep === "results" },
  ];

  return (
    <div className="bg-[#ddeef5] font-sans">

      {/* Top Bar: Logo + Page Title */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 py-3 sm:py-4 px-4">
        <img
          src={logo}
          alt="app_logo"
          className="h-14 w-14 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-cover"
        />

        <h1 className="text-[#1a2e35] text-base sm:text-xl md:text-2xl text-center sm:text-left">
          <span className="font-bold text-xl sm:text-2xl md:text-3xl">SCREENER</span>{" "}
          <span className="font-extrabold text-xl sm:text-2xl md:text-3xl">- Job Application</span>
        </h1>
      </div>

      {/* Step Progress Bar */}
      <div className="flex justify-center pb-4 sm:pb-6 px-3 sm:px-6">

        {/* Wide screens: full arrow stepper */}
        <div className="hidden sm:flex w-full max-w-2xl overflow-hidden rounded-md">
          {steps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;

            const clipPath = isFirst
              ? "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)"
              : isLast
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%)"
              : "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)";

            return (
              <div
                key={i}
                className={`flex-1 flex items-center justify-center py-4 text-xs font-black uppercase tracking-widest cursor-pointer transition-colors
                  ${step.active
                    ? "bg-[#2e7d82] text-white"
                    : "bg-[#aacdd6] text-[#1a2e35] hover:bg-[#8fbfca]"
                  }`}
                style={{
                  clipPath,
                  marginLeft: i === 0 ? 0 : "-14px",
                  zIndex: steps.length - i,
                }}
              >
                {step.label}
              </div>
            );
          })}
        </div>

        {/* Mobile: simple pill tabs — no clip-path overlap */}
        <div className="flex sm:hidden w-full rounded-md overflow-hidden border border-[#8fbfca]">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center justify-center py-2.5 text-[10px] font-black uppercase tracking-wider cursor-pointer transition-colors
                ${i !== steps.length - 1 ? "border-r border-[#8fbfca]" : ""}
                ${step.active
                  ? "bg-[#2e7d82] text-white"
                  : "bg-[#aacdd6] text-[#1a2e35]"
                }`}
            >
              {step.shortLabel}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Screenheader;