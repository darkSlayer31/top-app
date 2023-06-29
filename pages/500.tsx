import Htag from '@/components/Htag/Htag';
import {withLayout} from '@/layout/Layout';

const Error500 = () => {
  return (
    <>
      <Htag tag="h1">Ошибка 500</Htag>
    </>
  );
};

export default withLayout(Error500);
