import ActiveLabel from './components/active-label';
import NotActiveLabel from './components/not-active-label';
import Pending from './components/pending';
import Suspended from './components/suspended';

export default function Home() {
  return (
    <main>
      <h1>HomePage</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>NotActive</NotActiveLabel>
      <Pending>Pending</Pending>
      <Suspended>Suspended</Suspended>
    </main>
  );
}
