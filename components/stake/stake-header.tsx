interface StakeHeaderProps {
  title: string;
}

export function StakeHeader({ title }: StakeHeaderProps) {
  return (
    <h1 className="text-3xl font-bold font-mono">{title}</h1>
  );
}