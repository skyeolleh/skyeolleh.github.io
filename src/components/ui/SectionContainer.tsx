import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: Props) {
  return (
    <section id={id} className={cn("py-20 px-6 md:px-12 max-w-5xl mx-auto", className)}>
      {children}
    </section>
  );
}

