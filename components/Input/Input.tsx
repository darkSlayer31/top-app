import {FC} from 'react';
import cn from 'classnames';
import {InputProps} from './Input.props';
import styles from './Input.module.css';

const Input: FC<InputProps> = ({className, ...props}) => {
  return <input className={cn(className, styles.input)} {...props} />;
};

export default Input;
