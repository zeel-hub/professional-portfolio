import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Command, FileText } from "lucide-react";
import { TrafficLights } from "./TrafficLights";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/portfolio";
import { toast } from "sonner";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const scrollToSection = (id, navigate, pathname) => {
  const go = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (pathname !== "/") {
    navigate("/");
    setTimeout(go, 80);
  } else {
    go();
  }
};

export const downloadResume = async () => {
  if (!profile.resumeUrl) {
    toast("Resume coming soon", {
      description: "Add a link in the data file to enable download.",
    });
    return;
  }
  const filename = "Zeel_Patel_Resume.pdf";
  try {
    const res = await fetch(profile.resumeUrl);
    if (!res.ok) throw new Error("fetch failed");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (e) {
    const a = document.createElement("a");
    a.href = profile.resumeUrl;
    a.download = filename;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
};

export const Navbar = ({ onOpenPalette }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  const handleNav = useCallback(
    (id) => scrollToSection(id, navigate, pathname),
    [navigate, pathname]
  );

  return (
    <nav
      data-testid="navbar"
      className={`fixed left-1/2 top-4 z-50 w-[min(960px,calc(100%-1.5rem))] -translate-x-1/2 rounded-full px-3 py-2 transition-all duration-500 ${
        scrolled ? "glass shadow-float" : "border border-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => handleNav("home")}
          className="btn-press flex items-center gap-2 rounded-full pl-1 pr-2"
          data-testid="nav-logo"
          aria-label="Back to top"
        >
          <TrafficLights />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              onClick={() => handleNav(item.id)}
              className={`btn-press rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === item.id && pathname === "/"
                  ? "bg-bg-3 text-ink"
                  : "text-ink-2 hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            data-testid="open-command-palette"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="btn-press flex h-9 items-center gap-1.5 rounded-full border border-border bg-bg-3/60 px-3 text-ink-2 hover:text-ink"          >
            <Command className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">K</span>
          </button>
          <ThemeToggle />
          <button
            data-testid="resume-button"
            onClick={downloadResume}
            className="btn-press flex h-9 items-center gap-1.5 rounded-full bg-blue px-4 text-sm font-semibold text-white shadow-soft hover:opacity-90"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
