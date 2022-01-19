import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

const TrialForm = ({ onSubmit }) => {
    return (
        <div className={styles.formBox}>
            <form className={styles.form}
                  onSubmit={onSubmit}
            >
                <Input name={'first_name'}
                       placeholder={'First Name'}
                       type={'text'}
                       required
                />
                <Input name={'last_name'}
                       placeholder={'Last Name'}
                       type={'text'}
                       required
                />
                <Input name={'email'}
                       placeholder={'Email Address'}
                       type={'email'}
                       required
                />
                <Input name={'password'}
                       placeholder={'Password'}
                       type={'password'}
                       required
                />
                <button className={styles.submitButton}
                        type={'submit'}
                >
                    Claim your free trial
                </button>
            </form>
            <div className={styles.termsAndServices}>
                <p className={styles.description}>
                    By clicking the button, you are agreeing to our <a href={'#'}>Terms and Services</a>
                </p>
            </div>
        </div>
    );
};

const Input = (props) => {
    const [error, setError] = useState();
    const onInvalid = useCallback((e) => {
        e.preventDefault();
        const { required, placeholder, type } = props;
        const { valueMissing, typeMismatch } = e.target.validity;
        if (required && valueMissing) {
            setError(`${placeholder} cannot be empty`);
        }
        if (type === 'email' && typeMismatch) {
            setError(`Looks like this is not an email`);
        }
    }, [props]);

    const onChange = useCallback((e) => {
        setError('');
    }, []);

    return (
        <div className={cn(styles.inputWrapper, {
            [styles.error]: error,
        })}>
            <input className={styles.input}
                   onInvalid={onInvalid}
                   onChange={onChange}
                   {...props}
            />
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default TrialForm;

