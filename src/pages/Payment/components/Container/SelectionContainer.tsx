import { Container } from './Container.css';
import Btn from './Btn/Btn';

interface SelectionItem {
  name: string;
  icon: React.ReactNode;
}

interface SelectionContainerProps {
  items: SelectionItem[];
  selected: string;
  onSelect: (name: string) => void;
}

export default function SelectionContainer({
  items,
  selected,
  onSelect,
}: SelectionContainerProps) {
  return (
    <div className={Container}>
      {items.map((item) => (
        <Btn
          key={item.name}
          label={item.name}
          icon={item.icon}
          isSelected={selected === item.name}
          onClick={() => onSelect(item.name)}
        />
      ))}
    </div>
  );
}
