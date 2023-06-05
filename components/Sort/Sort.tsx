import {FC} from 'react';
import cn from 'classnames';
import {SortEnum, SortProps} from './Sort.props';
import SortIcon from './sort.svg';
import styles from './Sort.module.css';

const Sort: FC<SortProps> = ({sort, setSort, className}) => {
  return (
    <div className={cn(styles.sort, className)}>
      <span
        className={cn(styles.sortItem, {
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}>
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </span>
      <span
        className={cn(styles.sortItem, {
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}>
        <SortIcon className={styles.sortIcon} />
        По цене
      </span>
    </div>
  );
};

export default Sort;
