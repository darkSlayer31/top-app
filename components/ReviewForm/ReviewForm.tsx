import {FC, useState} from 'react';
import cn from 'classnames';
import {useForm, Controller} from 'react-hook-form';
import {ReviewFormProps} from './ReviewForm.props';
import CloseIcon from './close.svg';
import styles from './ReviewForm.module.css';
import Rating from '../Rating/Rating';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import {IReviewForm, IReviewSentResponse} from './ReviewForm.interface';
import axios from 'axios';
import {API} from '@/helpers/api';

const ReviewForm: FC<ReviewFormProps> = ({productId, isOpened, className, ...props}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: {errors},
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {required: {value: true, message: 'Заполните имя'}})}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={!!errors.name}
        />
        <Input
          {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={!!errors.title}
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
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Заполните описание'}})}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label="Текст отзыва"
          aria-invalid={!!errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>
            Отправить
          </Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.panel, styles.success)} role="alert">
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
            role="button"
            aria-label="Закрыть оповещение"
            tabIndex={0}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)} role="alert">
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon
            className={styles.close}
            onClick={() => setError(undefined)}
            role="button"
            aria-label="Закрыть оповещение"
            tabIndex={0}
          />
        </div>
      )}
    </form>
  );
};

export default ReviewForm;
