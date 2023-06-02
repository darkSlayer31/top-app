import Htag from '@/components/Htag/Htag';
import {TopPageComoponentProps} from './TopPageComponent.props';
import Tag from '@/components/Tag/Tag';
import styles from './TopPageComponent.module.css';
import HhData from '@/components/HhData/HhData';
import {TopLevelCategory} from '@/interfaces/page.interface';
import Advantages from '@/components/Advantages/Advantages';

const TopPageComponent = ({products, page, firstCategory}: TopPageComoponentProps) => {
  return (
    <div>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products.length && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <span>sort</span>
      </div>
      <div>{products && products.map((item) => <div key={item._id}>{item.title}</div>)}</div>
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
