import {FC} from 'react';
import cn from 'classnames';
import {TagProps} from './Tag.props';
import styles from './Tag.module.css';

const Tag: FC<TagProps> = ({size = 'medium', color = 'ghost', href, className, children, ...props}) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}>
      {href ? (
        <a className={styles.link} href={href}>
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  );
};

export default Tag;
