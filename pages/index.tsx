import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';

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
    </main>
  );
}
