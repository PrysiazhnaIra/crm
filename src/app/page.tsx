import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-green-500">
        Hello, Next.js! This is a Home Page {new Date().toTimeString()}
      </h1>
      <StatusLabel status={Status.Active}> Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
