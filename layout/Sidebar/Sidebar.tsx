import {SidebarProps} from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';

const Sidebar = (props: SidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
