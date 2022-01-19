import React from 'react';
import styles from './style.module.scss';

const TrialForm = () => {
    return (
        <form className={styles.form}>
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
            <div className={styles.termsAndServices}>
                <p className={styles.description}>
                    By clicking the button, you are agreeing to our <a href={'#'}>Terms and Services</a>
                </p>
            </div>
        </form>
    );
};

const Input = (props) => {
    return (
        <input className={styles.input}
               {...props}
        />
    );
};

export default TrialForm;

