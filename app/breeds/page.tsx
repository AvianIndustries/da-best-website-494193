import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function BreedsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-5">Breeds</h1>
        <p className="text-lg">Explore various breeds of dogs and their unique capabilities.</p>
      </main>
      <Footer />
    </div>
  );
}