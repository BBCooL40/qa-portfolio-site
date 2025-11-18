type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  status?: string;
  link?: string;
};

export function ProjectCard({ title, description, stack, status, link }: ProjectCardProps) {
  return (
    <article className="glass-panel p-5 sm:p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        {status && (
          <span className="inline-flex items-center rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
            {status}
          </span>
        )}
      </div>
      <p className="text-xs text-slate-300 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-slate-700/70 px-2.5 py-0.5">
            {item}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          className="mt-1 text-[11px] text-gold hover:underline self-start"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      )}
    </article>
  );
}
