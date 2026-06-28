import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  Command as CommandIcon,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../components/ui/command";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  FileText,
  Linkedin,
  AppWindow,
} from "lucide-react";
import { scrollToSection, downloadResume } from "./Navbar";
import { projects, profile } from "../data/portfolio";

const sectionItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export const CommandPalette = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  const run = (fn) => {
    setOpen(false);
    setTimeout(fn, 60);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search the portfolio…" data-testid="command-input" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {sectionItems.map((s) => (
            <CommandItem
              key={s.id}
              data-testid={`command-nav-${s.id}`}
              onSelect={() => run(() => scrollToSection(s.id, navigate, pathname))}
            >
              <s.icon className="mr-2 h-4 w-4" />
              {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projects.map((p) => (
            <CommandItem
              key={p.slug}
              data-testid={`command-project-${p.slug}`}
              onSelect={() => run(() => navigate(`/projects/${p.slug}`))}
            >
              <AppWindow className="mr-2 h-4 w-4" />
              {p.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem
            data-testid="command-theme"
            onSelect={() => run(() => setTheme(theme === "light" ? "dark" : "light"))}
          >
            {theme === "light" ? (
              <Moon className="mr-2 h-4 w-4" />
            ) : (
              <Sun className="mr-2 h-4 w-4" />
            )}
            Toggle theme
          </CommandItem>
          <CommandItem data-testid="command-resume" onSelect={() => run(downloadResume)}>
            <FileText className="mr-2 h-4 w-4" />
            Download resume
          </CommandItem>
          <CommandItem
            data-testid="command-linkedin"
            onSelect={() => run(() => window.open(profile.linkedin, "_blank", "noopener"))}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Open LinkedIn
          </CommandItem>
          <CommandItem
            data-testid="command-email"
            onSelect={() => run(() => (window.location.href = `mailto:${profile.email}`))}
          >
            <Mail className="mr-2 h-4 w-4" />
            Send an email
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
