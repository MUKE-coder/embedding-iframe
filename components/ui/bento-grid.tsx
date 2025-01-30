import { cn } from "@/lib/utils";

interface BentoGridProps {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className="backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-white/80">{item.description}</p>
        </div>
      ))}
    </div>
  );
}