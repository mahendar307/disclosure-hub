import { Info } from "lucide-react";

interface DisclaimerProps {
  text?: string;
}

export function Disclaimer({
  text = "This page presents producer-declared information. It is not certification or verification.",
}: DisclaimerProps) {
  return (
    <aside className="border border-border bg-muted/50 rounded p-4 flex gap-3 items-start">
      <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
      <p className="text-sm text-muted-foreground">{text}</p>
    </aside>
  );
}
