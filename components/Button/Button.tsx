import cn from 'classnames';

import {ButtonProps} from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

const Button = ({appearance, arrow, className, children, ...props}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}>
      {children}
      {arrow && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
