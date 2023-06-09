import {ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';
import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';

const Textarea = forwardRef(({className, error, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(className, styles.textareaWrapper)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
