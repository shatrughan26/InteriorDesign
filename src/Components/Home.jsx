import React, { useState, useMemo } from 'react';
import { LayoutGrid, Bed, Sofa, Hammer, IndianRupee } from 'lucide-react'; // Optional: npm i lucide-react for clean icons

export default function Home() {
  // State for user selections
  const [selections, setSelections] = useState({
    kitchenShape: 'Straight',
    kitchenMaterial: 'Laminate',
    bedroomWardrobe: 'Standard',
    bedroomBed: 'Box Storage',
    livingSofa: '3-Seater',
    livingPaneling: 'None',
    ceilingMaterial: 'Gypsum',
    ceilingComplexity: 'Minimal',
  });

  // Handler to update selections
  const handleSelect = (category, value) => {
    setSelections((prev) => ({ ...prev, [category]: value }));
  };

  // Dynamic Price Estimator logic based on selections
  const calculatedPrice = useMemo(() => {
    let base = 10000; // Minimum starting price

    // Kitchen Shape additions
    if (selections.kitchenShape === 'L-Shape') base += 15000;
    if (selections.kitchenShape === 'U-Shape') base += 25000;

    // Material additions (Premium vs Budget)
    if (selections.kitchenMaterial === 'Acrylic') base += 20000;
    if (selections.kitchenMaterial === 'Veneer') base += 30000;

    // Bedroom additions
    if (selections.bedroomWardrobe === 'Full Wall') base += 15000;
    if (selections.bedroomBed === 'Hydraulic') base += 8000;

    // Living Room additions
    if (selections.livingSofa === 'L-Shaped Sectional') base += 12000;
    if (selections.livingPaneling === 'Full Accent Wall') base += 10000;

    // Ceiling additions
    if (selections.ceilingComplexity === 'Decorative') base += 5000;

    // Cap it to realistic display limits if needed, but lets it scale beautifully
    return Math.min(base, 100000);
  }, [selections]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header Section */}
      <header className="bg-white border-b border-slate-200 py-12 px-6 text-center">
        <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase bg-amber-50 px-3 py-1 rounded-full">
          Premium Interior Solutions
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Customize Your Dream Space
        </h1>
        <p className="mt-3 text-lg text-slate-500 italic font-medium">
          “Designing Spaces That Define You”
        </p>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Configuration Columns (Left/Center) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. Modular Kitchen */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <LayoutGrid className="text-amber-600 w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-900">Modular Kitchen Configuration</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Kitchen Layout Shape</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Straight', 'L-Shape', 'U-Shape'].map((shape) => (
                    <button
                      key={shape}
                      onClick={() => handleSelect('kitchenShape', shape)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                        selections.kitchenShape === shape
                          ? 'border-amber-600 bg-amber-50/50 text-amber-700 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Cabinet & Shutter Material</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'Laminate', desc: 'Budget-Friendly' },
                    { name: 'Acrylic', desc: 'Premium Gloss' },
                    { name: 'Veneer', desc: 'Luxury Wood Finish' }
                  ].map((mat) => (
                    <button
                      key={mat.name}
                      onClick={() => handleSelect('kitchenMaterial', mat.name)}
                      className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        selections.kitchenMaterial === mat.name
                          ? 'border-amber-600 bg-amber-50/50 text-amber-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <span className="text-sm font-semibold">{mat.name}</span>
                      <span className="text-xs opacity-70 mt-1">{mat.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 2. Master Bedroom */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Bed className="text-amber-600 w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-900">Master Bedroom</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Wardrobe Size</label>
                <select 
                  value={selections.bedroomWardrobe}
                  onChange={(e) => handleSelect('bedroomWardrobe', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600"
                >
                  <option value="Standard">Standard (Sub-surface)</option>
                  <option value="Full Wall">Full Wall Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Bed Storage Mechanism</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Box Storage', 'Hydraulic'].map((bed) => (
                    <button
                      key={bed}
                      onClick={() => handleSelect('bedroomBed', bed)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                        selections.bedroomBed === bed
                          ? 'border-amber-600 bg-amber-50/50 text-amber-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {bed}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Living Room & Ceilings */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Sofa className="text-amber-600 w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-900">Living & Ceiling Architecture</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Sofa Setup & TV Unit</label>
                <select 
                  value={selections.livingSofa}
                  onChange={(e) => handleSelect('livingSofa', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600"
                >
                  <option value="3-Seater">Compact 3-Seater + Sleek Unit</option>
                  <option value="L-Shaped Sectional">L-Shaped Sectional + Designer Floating Unit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Wall Paneling & Decor</label>
                <select 
                  value={selections.livingPaneling}
                  onChange={(e) => handleSelect('livingPaneling', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600"
                >
                  <option value="None">Minimal Decor (No Paneling)</option>
                  <option value="Full Accent Wall">Premium Veneer Wall Paneling</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">False Ceiling Material</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Gypsum Board', 'POP (Plaster of Paris)'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => handleSelect('ceilingMaterial', mat)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium border transition-all ${
                        selections.ceilingMaterial === mat
                          ? 'border-amber-600 bg-amber-50/50 text-amber-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Ceiling Complexity</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Minimal', 'Decorative'].map((comp) => (
                    <button
                      key={comp}
                      onClick={() => handleSelect('ceilingComplexity', comp)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium border transition-all ${
                        selections.ceilingComplexity === comp
                          ? 'border-amber-600 bg-amber-50/50 text-amber-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Pricing Summary Sticky Sidebar (Right Side) */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl sticky top-6 border border-slate-800">
            <h3 className="text-lg font-bold tracking-wide text-slate-400 uppercase">Estimated Budget</h3>
            
            <div className="mt-4 flex items-baseline gap-1 text-amber-400">
              <IndianRupee className="w-7 h-7 self-center" />
              <span className="text-4xl font-extrabold tracking-tight">
                {calculatedPrice.toLocaleString('en-IN')}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 mt-2">
              *Estimated cost ranges from ₹10,000 to ₹1,00,000 based on standard material hardware components.
            </p>

            <hr className="border-slate-800 my-6" />

            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Selection Blueprint</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between"><span className="opacity-60">Layout:</span> <span>{selections.kitchenShape}</span></li>
              <li className="flex justify-between"><span className="opacity-60">Finish:</span> <span>{selections.kitchenMaterial}</span></li>
              <li className="flex justify-between"><span className="opacity-60">Bed Type:</span> <span>{selections.bedroomBed}</span></li>
              <li className="flex justify-between"><span className="opacity-60">Ceiling:</span> <span>{selections.ceilingComplexity}</span></li>
            </ul>

            <button className="w-full mt-8 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl transition-colors shadow-lg shadow-amber-600/10 text-center text-sm">
              Book Expert Consultation
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}