import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24", className)}>
      {children}
    </section>
  );
};

export default Section;
