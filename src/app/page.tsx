import AddCompanyButton from './components/AddCompanyButton';
import ClientComponent from './components/ClientComponent';
import ServerComponent from './components/ServerComponent';
import ServerComponentCopy from './components/ServerComponent-copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
      <ServerComponentCopy/>
      </ClientComponent>
    </main>
  );
}
