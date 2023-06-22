import {ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';
import {CardProps} from './Card.props';
import styles from './Card.module.css';

const Card = forwardRef(
  ({color = 'white', className, children, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={cn(styles.card, className, {
          [styles.blue]: color === 'blue',
        })}
        {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
