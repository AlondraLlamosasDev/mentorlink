type Size = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<Size, string> = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "h-20 w-20 text-2xl",
  xl: "h-28 w-28 text-3xl",
};

const palette = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-info text-info-foreground",
  "bg-testimonial text-testimonial-foreground",
];

export function MentorAvatar({
  name,
  size = "md",
}: {
  name: string;
  size?: Size;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sum = name
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const color = palette[sum % palette.length];

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-heading font-semibold ${color} ${sizeClasses[size]}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
