import {useScrollY} from '@/hooks/useScrollY';
import styles from './Up.module.css';
import {useAnimation, motion} from 'framer-motion';
import {useEffect} from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const Up = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight});
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div animate={controls} initial={{opacity: 0}} className={styles.up}>
      <ButtonIcon icon="up" appearance="primary" onClick={scrollToTop} />
    </motion.div>
  );
};

export default Up;
