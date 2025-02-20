import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-green-500">
        Hello, Next.js! This is a Home Page {new Date().toTimeString()}
      </h1>
      <AddCompanyButton />{' '}
    </main>
  );
}
