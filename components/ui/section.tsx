import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={cn("py-12 md:py-16 lg:py-24", className)}>
      {children}
    </section>
  );
};

export default Section;
