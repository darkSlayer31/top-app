import {SidebarProps} from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';
import Logo from '../logo.svg';
import cn from 'classnames';
import Search from '@/components/Search/Search';

const Sidebar = ({className, ...props}: SidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo />
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
