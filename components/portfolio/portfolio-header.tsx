interface PortfolioHeaderProps {
  title: string;
}

export function PortfolioHeader({ title }: PortfolioHeaderProps) {
  return (
    <h1 className="text-3xl font-bold font-mono">{title}</h1>
  );
}