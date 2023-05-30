import {AppContext} from '@/context/app.context';
import {useContext} from 'react';

const Menu = () => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  return (
    <ul>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </ul>
  );
};

export default Menu;
