import cn from 'classnames';
import dayjs from 'dayjs';

import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';

const Footer = ({className, ...props}: FooterProps) => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <p>OwlTop © 2020 - {dayjs().format('YYYY')} Все права защищены</p>
      <a href="#" target="_blank" className={styles.link}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={styles.link}>
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
