import Link from "next/link";

const ProjectLink = ({ href, title, description }) => {
  return (
    <li>
      <Link
        target="_blank"
        href={href}
        className="flex flex-col gap-x-1 rounded-xl bg-secondary p-2 hover:bg-secondary/85 md:flex-row"
      >
        <div className="flex gap-x-1">
          <svg className="size-6 transition-all">
            <use href={`./icons/sprite.svg#tabler/external-link-outline`} />
          </svg>
          <p className="md:hidden">{title}</p>
        </div>
        <p>
          <span className="hidden md:inline">{title}</span>{" "}
          <span className="hidden md:inline">-</span>{" "}
          <span className="text-muted-foreground">{description}</span>
        </p>
      </Link>
    </li>
  );
};

export { ProjectLink };
