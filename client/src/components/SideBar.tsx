import type { Message, Project } from "../types";

interface SideBarProps {
  isMenuOpen: boolean;
  project: Project;
  setProject: (project: Project) => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
}

const SideBar = ({
  isMenuOpen,
  project,
  setProject,
  isGenerating,
  setIsGenerating,
}: SideBarProps) => {
  return (
    <div
      className={`h-full sm:max-w-sm rounded-xl bg-gray-900 border-gray-800 transition-all ${isMenuOpen ? "max-sm:w-0 overflow-hidden" : "w-full"}`}
    >
      <div className="flex flex-col h-full">
        {/* Message container */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-3 flex flex-col gap-4"></div>
        {/* Input area */}
        <form action=""></form>
      </div>
    </div>
  );
};

export default SideBar;
