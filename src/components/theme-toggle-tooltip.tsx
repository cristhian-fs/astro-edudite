import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ThemeToggleTooltip(){
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex gap-x-0.25 bg-muted rounded-sm p-0.5">
          <Button 
            variant="ghost" 
            size="icon" 
            title="Dark theme"
            data-site-theme="dark"  
            className='theme-toggle-btn pointer-fine:cursor-pointer pointer-fine:size-6 pointer-fine:rounded-sm [.active]:bg-secondary'
          >
            <Moon
              className="size-4 pointer-fine:size-3"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            title="Light theme"
            data-site-theme="light"
            className='theme-toggle-btn pointer-fine:cursor-pointer pointer-fine:size-6 pointer-fine:rounded-sm [.active]:bg-secondary'
          >
            <Sun
              className="size-4 pointer-fine:size-3"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-popover text-popover-foreground border" side="top" sideOffset={4}>
        <div className="flex items-center gap-x-2">
          <span>Toggle theme</span> 
          <div className="size-4 rounded-sm bg-muted border text-foreground font-mono flex items-center justify-center">T</div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}