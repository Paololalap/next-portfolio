import { cn } from "@/lib/utils";

export function Icon({ name, childClassName, className, children, ...props }) {
  if (children) {
    return (
      <span className={cn("font inline-flex items-center gap-1.5", className)}>
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg
      {...props}
      className={cn("inline size-full text-white self-center", className)}
    >
      <use href={`./icons/sprite.svg#${name}`} />
    </svg>
  );
}
