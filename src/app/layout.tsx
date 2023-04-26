const React = require('react');
const ReactDOM = require('react-dom');
import styles from './styles/RootLayout.module.scss';
import './styles/globals.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export const metadata = {
  title: 'Results Summary',
  description: 'Results Summary Component challenge from Frontend Mentor',
  author: 'Adam Mescher'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
