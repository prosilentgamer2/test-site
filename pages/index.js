import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return ( 
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-col items-center flex-1 text-center'>
        <h1 className='text-6xl font-bold'>Go Fuck Yourself</h1>
        <p className='mt-3 text-xl'>Message Sponsored by Emily</p>
      </main>
      <Footer />
    </div>
   );
}
 
export default Home;