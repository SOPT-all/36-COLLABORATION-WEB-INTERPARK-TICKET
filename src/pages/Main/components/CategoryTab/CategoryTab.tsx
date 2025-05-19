import * as styles from './CategoryTab.css';

interface CategoryTabProps {
  keywords: string[];
  selected: string;
  onSelect: (keyword: string) => void;
}

const CategoryTab = ({ keywords, selected, onSelect }: CategoryTabProps) => {
  return (
    <div className={styles.tabWrapper}>
      {keywords.map((keyword) => (
        <button
          key={keyword}
          className={
            selected === keyword
              ? styles.tabItem.selected
              : styles.tabItem.default
          }
          onClick={() => onSelect(keyword)}
        >
          {keyword}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
