export const ChartMastery = () => {
  const features = [
    {
      icon: '📊',
      title: 'Identify Liquidity',
      desc: 'Spot high-probability liquidity zones where smart money moves.',
    },
    {
      icon: '🎯',
      title: 'Precision Entries',
      desc: 'Enter trades at optimal points with minimal risk and maximum upside.',
    },
    {
      icon: '📈',
      title: 'Consistent Results',
      desc: 'Apply a repeatable 3-step framework that works across all timeframes.',
    },
  ];

  return (
    <section id="mastery" className="py-20 border-b border-slate-200 relative overflow-hidden bg-slate-50">
      { }
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-slate-50/85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        { }
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
            CHART MASTERY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-slate-900 uppercase tracking-tight">
            CHART <span className="text-red-600 underline decoration-red-600 decoration-4 underline-offset-6">MASTERY</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Unlock the power of the Liquidity Inducement Strategy — the core methodology behind
            consistent forex gains.
          </p>
        </div>

        { }
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          { }
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-slate-800">
            <span>🔍</span>
            <span>Liquidity Inducement Strategy</span>
          </div>

          { }
          <div className="w-full max-w-3xl border-2 border-slate-200 bg-white p-2 shadow-xl overflow-hidden transition-all duration-300 hover:border-red-500 hover:shadow-2xl">
            <img
              src="/chart%20mastery.png"
              alt="Chart Mastery - Liquidity Inducement Strategy"
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          { }
          <div className="grid sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 bg-white border-2 border-slate-200 text-center transition-all duration-300 hover:border-red-500 hover:-translate-y-1 shadow-sm"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h4 className="text-xs font-bold uppercase text-slate-900 tracking-tight mb-2">
                  {f.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
