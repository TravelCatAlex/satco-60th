'use client';

import React, { useState } from 'react';
import { Mail, Play } from 'lucide-react';

export default function SatcoAnniversary() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const videos = [
    { id: 'momentum', title: 'Momentum Linear System', thumbnail: '/momentum_thumbnai_.jpg', people: [{ name: 'Brian Brandes', title: 'SVP | Product Development' }, { name: 'Chris Siegel', title: 'VP | Product Development' }], description: 'Discover how the Momentum Linear Architectural System combines innovative design with adaptive technology. Brian and Chris discuss the development philosophy behind this modular lighting solution designed for modern commercial spaces.', videoUrl: '/momentum_1.mp4' },
    { id: 'doorbell', title: 'Smart Doorbell Innovation', thumbnail: '/Doorbell_thumbnail.png', people: [{ name: 'Chris Siegel', title: 'VP | Product Development' }, { name: 'Doug Fromberg', title: 'Product Manager' }], description: 'Explore the next generation of smart home lighting with our innovative doorbell integration. Chris and Doug reveal how Satco is bridging connected home technology with elegant lighting design.', videoUrl: '/doorbell_1.mp4' },
    { id: 'work-lights', title: 'Professional Work Lights', thumbnail: '/work_light_thumbnail.jpg', people: [{ name: 'James Bell', title: 'Product Manager' }, { name: 'Chris Siegel', title: 'VP | Product Development' }], description: 'Designed for professionals, engineered for performance. James and Chris showcase how work lighting has evolved to meet the demands of construction, photography, and industrial applications.', videoUrl: '/Work_lights_1.mp4' },
    { id: 'under-cabinet', title: 'Under-Cabinet Lighting Solutions', thumbnail: '/under_cabinet_lights_thumbnail.jpg', people: [{ name: 'Brian Brandes', title: 'SVP | Product Development' }, { name: 'Chris Siegel', title: 'VP | Product Development' }], description: 'Transform your kitchen and workspace with premium under-cabinet lighting. Brian and Chris explain how innovative thermal management and dimming technology create the perfect ambient light for any kitchen.', videoUrl: '/Under-cabinet_lights_1.mp4' }
  ];

  const products = [
    { name: 'Starfish', url: 'https://www.satcostarfish.com', description: 'Smart lighting ecosystem', logo: '/starfish_logo.png' },
    { name: 'Momentum', url: 'https://www.satco.com/new-products/MOMENTUM-Linear-Architectural-System', description: 'Linear architectural system', logo: '/momentum_logo.jpg' },
    { name: 'Domino', url: 'https://www.satco.com/domino', description: 'Modular design lighting', logo: '/domino_logo.png' },
    { name: 'Dim to Warm', url: 'https://www.satco.com/landing/warm-dimming-lighting?utm_source=satco_website&utm_medium=homepage_carousel&utm_campaign=landing_dim_to_warm&utm_content=', description: 'Filament lamp technology', logo: '/dimtowarm_logo.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div className="flex items-center gap-4"><img src="/satco_60th_anniversary_logo.png" alt="Satco 60th Anniversary" className="h-16" /><div><h1 className="text-3xl font-bold text-black">Celebrating 60 Years</h1><p className="text-gray-600">of innovation in lighting</p></div></div></div></header>

      <section className="bg-gradient-to-br from-red-50 to-white py-12 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid md:grid-cols-2 gap-12 items-center"><div><h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Six Decades of Innovation</h2><p className="text-lg text-gray-700 mb-6">Since 1966, Satco has been a recognized leader in the lighting industry, consistently demonstrating a commitment to quality, reliability, and innovation.</p><p className="text-lg text-gray-700 mb-8">From cutting-edge architectural systems to smart home integration, we continue to shape the future of lighting design and technology.</p></div><div className="flex flex-col items-center"><img src="/william_gildin_headshot.png" alt="William Gildin" className="rounded-lg shadow-lg max-w-sm w-full" /><p className="text-center text-sm text-gray-600 mt-4">William Gildin<br />President, Satco</p></div></div></div></section>

      <section className="py-16 md:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-4xl font-bold text-black mb-12 text-center">Behind the Innovation</h2><div className="grid md:grid-cols-2 gap-12">{videos.map((video) => (<div key={video.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"><div className="relative bg-gray-900 h-48 overflow-hidden group cursor-pointer"><img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" /><div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-center justify-center"><div className="bg-red-600 rounded-full p-4"><Play className="w-6 h-6 text-white fill-white" /></div></div></div><div className="p-6"><h3 className="text-xl font-bold text-black mb-4">{video.title}</h3><div className="mb-4 space-y-2">{video.people.map((person, idx) => (<div key={idx}><p className="font-semibold text-black">{person.name}</p><p className="text-sm text-gray-600">{person.title}</p></div>))}</div><p className="text-gray-700 mb-6">{video.description}</p><a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors font-semibold"><Play className="w-4 h-4 fill-current" />Watch Video</a></div></div>))}</div></div></section>

      <section className="bg-gray-50 py-16 md:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-4xl font-bold text-black mb-4 text-center">60 Years of Innovation</h2><p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">Check out our latest cutting-edge products that define the future of lighting</p><div className="grid md:grid-cols-4 gap-6">{products.map((product, idx) => (<a key={idx} href={product.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-red-600 transition-all text-center group flex flex-col h-full"><div className="flex-1 flex items-center justify-center mb-6 min-h-48"><img src={product.logo} alt={product.name} className="max-h-40 max-w-full object-contain" /></div><h3 className="font-bold text-black mb-2 text-lg">{product.name}</h3><p className="text-sm text-gray-600 mb-4 flex-1">{product.description}</p><span className="text-red-600 font-semibold text-sm hover:text-red-700">Learn More →</span></a>))}</div></div></section>

      <section className="bg-black text-white py-16 md:py-24"><div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2><p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest innovations and product launches</p><form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto flex-col sm:flex-row"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-600" required /><button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"><Mail className="w-4 h-4" /><span>Subscribe</span></button></form>{subscribed && <p className="text-green-400 mt-4 font-semibold">✓ Thank you for subscribing!</p>}</div></section>

      <footer className="bg-gray-900 text-gray-400 py-8"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-6"><img src="/satco_60th_anniversary_logo.png" alt="Satco" className="h-12 mx-auto mb-4" /></div><div className="grid md:grid-cols-3 gap-8 mb-8"><div><h4 className="text-white font-semibold mb-4">About</h4><p className="text-sm">Satco is a recognized leader in the lighting industry with 60 years of innovation.</p></div><div><h4 className="text-white font-semibold mb-4">Links</h4><ul className="text-sm space-y-2"><li><a href="https://www.satco.com" className="hover:text-white">Visit Satco.com</a></li><li><a href="#" className="hover:text-white">Brand Guidelines</a></li><li><a href="#" className="hover:text-white">Contact Us</a></li></ul></div><div><h4 className="text-white font-semibold mb-4">Follow Us</h4><p className="text-sm">Celebrating 60 years of lighting excellence</p></div></div><div className="border-t border-gray-700 pt-8 text-center text-sm"><p>&copy; 2026 Satco Products Inc. All rights reserved.</p><p className="mt-2">Celebrating 60 Years of Innovation • 1966-2026</p></div></div></footer>
    </div>
  );
}
