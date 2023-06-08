import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import {withLayout} from '@/layout/Layout';
import {GetStaticProps} from 'next';
import {useState} from 'react';
import axios from 'axios';
import {MenuItem} from '@/interfaces/menu.interface';

function Home({menu}: HomeProps) {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">text</Htag>
      <Button appearance="primary" arrow="right">
        aqwewqe
      </Button>
      <Button appearance="ghost" arrow="down">
        ytuyuyu
      </Button>
      <Ptag>asdasd sadsad assadsa </Ptag>
      <Ptag size="small">asdasd sadsad assadsa </Ptag>
      <Ptag size="large">asdasd sadsad assadsa </Ptag>
      <Tag size="small">asdasd sadsad assadsa </Tag>
      <Tag size="medium" color="ghost">
        ghost
      </Tag>
      <Tag size="small" color="primary">
        primary
      </Tag>
      <Tag size="medium" color="red">
        red
      </Tag>
      <Tag size="small" color="green" href="vk.com">
        green
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
      <Input placeholder="test" />
      <Textarea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;

  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
