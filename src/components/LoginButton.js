import React, { useState } from 'react';
import styles from './LoginButton.module.css';

export default function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button className={styles.loginButton} onClick={openModal}>
        <span className={styles.icon}>👤</span>
        Login
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <h2>Login</h2>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Sign In
              </button>
            </form>
            <div className={styles.footer}>
              <a href="#">Forgot password?</a>
              <a href="#">Sign up</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 