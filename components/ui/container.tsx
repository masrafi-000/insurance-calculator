import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-6 lg:px-8 w-full max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
