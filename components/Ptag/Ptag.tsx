import {FC} from 'react';
import cn from 'classnames';
import {PtagProps} from './Ptag.props';
import styles from './Ptag.module.css';

const Ptag: FC<PtagProps> = ({size = 'medium', className, children, ...props}) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
      })}
      {...props}>
      {children}
    </p>
  );
};

export default Ptag;
