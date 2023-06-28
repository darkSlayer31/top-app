import {FC, KeyboardEvent} from 'react';
import cn from 'classnames';
import {SortEnum, SortProps} from './Sort.props';
import SortIcon from './sort.svg';
import styles from './Sort.module.css';

const Sort: FC<SortProps> = ({sort, setSort, className}) => {
  const handleKey = (e: KeyboardEvent<HTMLButtonElement>, sort: SortEnum) => {
    if (e.code == 'Space' || e.code == 'Enter') {
      setSort(sort);
    }
  };

  return (
    <div className={cn(styles.sort, className)}>
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        className={cn(styles.sortButton, {
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
        onKeyDown={(e) => handleKey(e, SortEnum.Rating)}
        tabIndex={0}
        aria-pressed={sort === SortEnum.Rating}
        aria-labelledby="sort rating">
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        id="price"
        className={cn(styles.sortButton, {
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
        onKeyDown={(e) => handleKey(e, SortEnum.Price)}
        tabIndex={0}
        aria-pressed={sort === SortEnum.Price}
        aria-labelledby="sort price">
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
};

export default Sort;
