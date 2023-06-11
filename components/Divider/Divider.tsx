import {FC} from 'react';
import cn from 'classnames';
import {DividerProps} from './Divider.props';
import styles from './Divider.module.css';

const Divider: FC<DividerProps> = ({className, ...props}) => {
  return <hr className={cn(className, styles.hr)} />;
};

export default Divider;
