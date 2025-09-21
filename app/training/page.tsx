import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-5">Training</h1>
        <p className="text-lg">Discover effective training techniques for your dog.</p>
      </main>
      <Footer />
    </div>
  );
}