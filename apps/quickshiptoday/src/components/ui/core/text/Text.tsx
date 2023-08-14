import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ className, children }: TextProps) => {
  return (
    <h1
      className={cn(
        "text-6xl font-bold tracking-tight text-indigo-600",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }: TextProps) => {
  return (
    <h2
      className={cn(
        "text-4xl font-bold tracking-tight text-indigo-600",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children }: TextProps) => {
  return (
    <h3
      className={cn(
        "text-2xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ className, children }: TextProps) => {
  return (
    <h4
      className={cn(
        "text-xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ className, children }: TextProps) => {
  return (
    <h5
      className={cn(
        "text-lg font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ className, children }: TextProps) => {
  return (
    <h6
      className={cn(
        "text-base font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h6>
  );
};
