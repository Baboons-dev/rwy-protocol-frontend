interface FarmsHeaderProps {
  title: string;
}

export function FarmsHeader({ title }: FarmsHeaderProps) {
  return <h1 className="text-4xl font-bold text-center">{title}</h1>;
}
