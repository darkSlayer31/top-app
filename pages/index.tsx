import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import Tag from '@/components/Tag/Tag';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
