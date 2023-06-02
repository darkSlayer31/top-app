import Htag from '../Htag/Htag';
import Ptag from '../Ptag/Ptag';
import styles from './Advantages.module.css';
import {AdvantagesProps} from './Advantages.props';
import AdvantageIcon from './advantage-check.svg';

const Advantages = ({advantages}: AdvantagesProps) => {
  return (
    <>
      {advantages.map((item) => (
        <div key={item._id} className={styles.wrapper}>
          <div>
            <AdvantageIcon />
          </div>
          <Htag tag="h3" className={styles.title}>
            {item.title}
          </Htag>
          <div className={styles.line}></div>
          <Ptag size="large">{item.description}</Ptag>
        </div>
      ))}
    </>
  );
};

export default Advantages;
