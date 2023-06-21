import {FC} from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import {ReviewProps} from './Review.props';
import UserIcon from './user.svg';
import styles from './Review.module.css';
import Rating from '../Rating/Rating';

const Review: FC<ReviewProps> = ({review, className, ...props}) => {
  const {name, title, description, createdAt, rating} = review;

  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>{dayjs(createdAt).format('DD MMMM YYYY')}</div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Review;
