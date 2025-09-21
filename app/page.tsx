import Link from 'next/link';
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-5">All about Dogs</h1>
        <p className="text-lg mb-5">Welcome to our website where you can learn everything about dogs, their breeds, training tips and much more!</p>
        <Link href="/breeds"><a className="text-blue-500 underline">Learn more about breeds</a></Link>
        <Link href="/training"><a className="text-blue-500 underline mt-3 block">Find training tips</a></Link>
      </main>
      <Footer />
    </div>
  );
}