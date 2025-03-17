import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ title, description, children, className }: SectionProps) => {
  return (
    <section
      className={cn(
        "h-full md:flex-center items-center flex-col px-10 gap-5 py-10 md:py-20",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description ? (
          <p className="text-muted-foreground max-w-lg text-center">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
};

export default Section;
