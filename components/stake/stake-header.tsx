interface StakeHeaderProps {
  title: string;
}

export function StakeHeader({ title }: StakeHeaderProps) {
  return (
    <h1 className="text-[21px] lg:text-4xl font-bold text-center">{title}</h1>
  );
}
