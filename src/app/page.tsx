import Image from 'next/image'
import Navbar from './components/navbar/Navbar';
import Resume from './resume';

export default function Home() {
  return (
    
    <main className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <Resume />
      
    </main>
  )
}
