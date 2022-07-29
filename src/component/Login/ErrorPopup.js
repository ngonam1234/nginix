import React, { useEffect } from 'react';
import styles from './style.module.css';

const ErrorPopup = () => {
  return (
    <div className={styles.popup}>

      <div className="fixed left-0 right-0 m-auto flex w-full max-w-xs overflow-hidden bg-gray-200 rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-center w-12 bg-red-500">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
          </svg>
        </div>

        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className="font-semibold text-red-500 dark:text-red-400">Lỗi đăng nhập</span>
            <p className="text-sm text-gray-600 dark:text-gray-200">Sai tên đăng nhập hoặc mật khẩu!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
