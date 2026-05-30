




import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function sendRequest() {
    navigate("/screen");
  }

  return (
    <header className="bg-[#ddeef5] flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center px-4 sm:px-8 md:px-12 py-4 sm:py-5">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Logo — scales down on mobile */}
          <img
            src={logo}
            alt="app_logo"
            className="h-14 w-36 sm:h-20 sm:w-56 md:h-30 md:w-80 object-contain"
          />

          {/* Title — smaller on mobile */}
          <span className="text-[#1a2e35] font-extrabold text-lg sm:text-2xl md:text-3xl leading-tight uppercase tracking-wide">
            AI Resume
            <br />
            Screener
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-10 sm:pb-16 -mt-2 sm:-mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] uppercase tracking-tight max-w-5xl leading-tight mb-4 sm:mb-5">
          Supercharge Your Hiring Process With AI.
        </h1>

        <p className="text-[#3a5a66] text-sm sm:text-base md:text-lg max-w-3xl mb-7 sm:mb-10 leading-relaxed">
          The fast, intelligent, and accurate way to screen resumes,
          compare candidates against job descriptions, and rank top
          talent, all automated by AI.
        </p>

        <button
          className="bg-[#2e7d82] hover:bg-[#245f63] active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-4 rounded transition-colors duration-200 shadow-lg w-full max-w-xs sm:w-auto"
          onClick={sendRequest}
        >
          Get Started Now
        </button>
      </main>
    </header>
  );
}

export default Header;