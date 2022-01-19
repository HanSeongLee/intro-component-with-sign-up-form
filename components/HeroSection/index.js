import React from "react";
import styles from './style.module.scss';
import TrialForm from "../TrialForm";
import Container from "../Container";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Learn to code by watching others
                    </h1>
                    <p className={styles.description}>
                        See how experienced developers solve problems in real-time. Watching scripted tutorials is
                        great,
                        but
                        understanding how developers think is invaluable.
                    </p>
                </div>
                <div className={styles.formContainer}>
                    <p className={styles.tryItBox}>
                        <strong>Try it free 7 days</strong> then $20/mo. thereafter
                    </p>

                    <TrialForm/>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
