import {FC} from 'react';
import cn from 'classnames';
import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';

const Textarea: FC<TextareaProps> = ({className, ...props}) => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};

export default Textarea;
