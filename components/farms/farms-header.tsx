interface FarmsHeaderProps {
  title: string;
}

export function FarmsHeader({ title }: FarmsHeaderProps) {
  return (
    <h1 className="text-3xl font-bold font-mono">{title}</h1>
  );
}