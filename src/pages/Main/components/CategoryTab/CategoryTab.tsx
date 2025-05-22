import * as styles from './CategoryTab.css';

type CategoryTabVariant = 'scroll' | 'wrap';
interface CategoryTabProps {
  keywords: string[];
  selected: string;
  onSelect: (keyword: string) => void;
  variant?: CategoryTabVariant;
}

const CategoryTab = ({
  keywords,
  selected,
  onSelect,
  variant = 'scroll',
}: CategoryTabProps) => {
  return (
    <div className={styles.tabWrapper[variant]}>
      {keywords.map((keyword) => (
        <button
          key={keyword}
          className={styles.tabItem({
            variant,
            selected: selected === keyword,
          })}
          onClick={() => onSelect(keyword)}
        >
          {keyword}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
