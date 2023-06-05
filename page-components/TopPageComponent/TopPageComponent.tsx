import Htag from '@/components/Htag/Htag';
import {TopPageComoponentProps} from './TopPageComponent.props';
import Tag from '@/components/Tag/Tag';
import styles from './TopPageComponent.module.css';
import HhData from '@/components/HhData/HhData';
import {TopLevelCategory} from '@/interfaces/page.interface';
import Advantages from '@/components/Advantages/Advantages';
import Sort from '@/components/Sort/Sort';
import {SortEnum} from '@/components/Sort/Sort.props';
import {useReducer} from 'react';
import {sortReducer} from './sort.reducer';

const TopPageComponent = ({products, page, firstCategory}: TopPageComoponentProps) => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort});
  };

  return (
    <div>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products.length && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>{sortedProducts && sortedProducts.map((item) => <div key={item._id}>{item.title}</div>)}</div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {!!page.advantages?.length && (
        <div className={styles.advantages}>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </div>
      )}

      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}

      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((tag) => (
        <Tag key={tag} color="primary">
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
