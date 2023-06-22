import {FC} from 'react';
import cn from 'classnames';
import {useForm, Controller} from 'react-hook-form';
import {ReviewFormProps} from './ReviewForm.props';
import CloseIcon from './close.svg';
import styles from './ReviewForm.module.css';
import Rating from '../Rating/Rating';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import {IReviewForm} from './ReviewForm.interface';

const ReviewForm: FC<ReviewFormProps> = ({productId, className, ...props}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {required: {value: true, message: 'Заполните имя'}})}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: 'Укажите рейтинг'}}}
            render={({field}) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Заполните описание'}})}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};

export default ReviewForm;