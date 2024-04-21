"use client";

import WelcomePage from '@/common/pages/welcome/Welcome';
import HomePage from '../common/pages/home/Home'

export default function Home() {

  const user = localStorage.getItem('user');

  return (
    <main>
      {
        user ? <HomePage /> : <WelcomePage/>
      }
    </main>
  );
}
