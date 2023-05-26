import {LayoutProps} from './Layout.props';
import styles from './Layout.module.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {FC} from 'react';

const Layout = ({children, ...props}: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
