interface PortfolioHeaderProps {
  title: string;
}

export function PortfolioHeader({ title }: PortfolioHeaderProps) {
  return <h1 className="text-4xl font-bold text-center">{title}</h1>;
}
