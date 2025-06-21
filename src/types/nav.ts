export type NavItem = {
  title: string;
  href: string;
  // コンポーネントにプロップスを与えることができる型
  icon?: React.ComponentType<{ className?: string }>;
};
