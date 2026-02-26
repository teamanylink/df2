import React from 'react';
import { Icon } from '../components/Icon';
import { Screen } from '../types';

interface LibraryScreenProps {
  navigate: (screen: Screen) => void;
}

export const LibraryScreen: React.FC<LibraryScreenProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col w-full h-full bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-black/5 dark:border-white/5 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Icon name="local_fire_department" className="text-primary text-3xl" fill={true} />
          <h1 className="text-xl font-bold tracking-tight dark:text-white">Daily Fire</h1>
        </div>
        <div className="flex items-center bg-black/5 dark:bg-white/10 rounded-full px-3 py-1 gap-1.5 border border-black/5 dark:border-white/5">
          <span className="text-primary text-sm">🔥</span>
          <span className="text-sm font-bold font-mono text-slate-700 dark:text-slate-200">12</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto pb-24">
        {/* Hero: Daily Drop */}
        <div className="p-4 pt-6" onClick={() => navigate(Screen.SESSION)}>
          <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdqL5VOnbkURtwBpGhKwnookPXerzIS6-gn6LEt4fUMTfDUQ0zbuDV9ISqgIw6Iuu95ZSemxcl-I24R9RiNfKY_c9cOMIxP9t799TMmCRzWLXm0ADEMvJOtLfD1vZWGFMg2_CNGw3T7EM1sjzHtbLJ0TKBm1MjhiPO_Og9uaxqX87yfRGx-_cFJSumsRkcMr9562M4chotvq46pM-DknvLWx2r95lEsBaEAkIm1Q4MdESFmdXDfplNMxoABggagGjKx11NfxHZKQP5")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">Daily Drop</span>
                <span className="text-white/70 text-xs font-medium">Verse of the Day</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-2">
                Walk through the fire,<br/>not around it.
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <Icon name="play_circle" className="text-white/80 text-sm" />
                <p className="text-white/80 text-sm font-medium">5 min session</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Series */}
        <section className="flex flex-col mt-4">
          <div className="px-4 pb-3 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight dark:text-white">Trending Series</h2>
            <button className="text-xs font-semibold text-primary uppercase tracking-wider hover:text-primary/80 transition-colors">View All</button>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar px-4 pb-4 gap-4 snap-x snap-mandatory">
            {[
              { title: "Main Character Energy", sub: "Finding your purpose in the chaos", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEuMKRbquWikWUAyDKz08BpXclqRl2Vns8Me89DenZmVjg2xg1EJflIOFZHyT-xWj8cUzxx6gK2wuNJxMx0xd845WHTOWcMWbmKf0M6yR_Em2BulI-A6QgIBpVcUxnOqiYsyRfcWZ-Z1_eumXLvSwVuUqBiqNcz6YKJj1fLrYA0IVe5hq2xB2Sbba-jWuc4puoYM6yVD7_cGCwd2ai9Zv498yKtIlmVhR_i9927XbgCeC1VEJbXfhymu1tEOTbrCuhD8zK_4asag3", badge: "Identity" },
              { title: "Villain Arcs", sub: "Learning from biblical mistakes", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX-zqjVgIjsCO3S3Dq5ROAU1t82kNaGcBQ2I6dJqKrigdWaewHy1-7uuEYw9P2xXO2CIQwmOJfWheAL13rwd7M2gzON4kT000627wqdh4dhxm2bMQ5u1Xzxtvx_5UtG5eKepkGhUSw-BFXkb1da5HUnQ72VlNAfl_dhnDMX-DE_IftPSPf_p2OKqdJrLwkFx-q1_Pm4tUjUopRUFKAKCJSNJeWvEroDC08mCBx5IOjOUSG5HlDlJb44HsphQ-BzFziYsBTzFsujrVM", badge: "Wisdom" },
              { title: "The Glow Up", sub: "Spiritual transformation guide", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSjDvI4w8y_Vr9HzqR399EK-JwDke-uPJafebcaRHSFY9sBi9WaVvHVS9ce8XZQ4ZVIatKPk-8M9EPNkYoEk-5ggSJPSTx-Ia3aqi_X90I_6RVwgNpH_CwH37_W0m-190e3TWGPGS4qV1Mw-91331E9AujNofvKvzWTZvhioerYSJoNYF-k0gzsx7x37oRiuLVwXiFMhq8EnC8_bmIgmBaCZtYSK11JHcXpY8CLBNEp7NTME3bNF0Om7IYd_7idVzaik1nH39cfIpX", badge: "Growth" }
            ].map((card, i) => (
              <div key={i} className="snap-center shrink-0 w-[260px] flex flex-col gap-3 group cursor-pointer">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-surface-dark shadow-lg">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${card.img}")` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10 mb-2 inline-block">{card.badge}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors dark:text-white">{card.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-1">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vibe Check */}
        <section className="flex flex-col mt-4">
          <h2 className="px-4 pb-3 text-xl font-bold tracking-tight dark:text-white">Vibe Check</h2>
          <div className="flex overflow-x-auto hide-scrollbar px-4 pb-4 gap-3">
            {[
              { title: "Anxiety Detox", sub: "Calm", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJZJgGjvKNX8tC5PADMs2Gj99MyVczjBRSChLTUKpd8a1_R0SbnjHuoFucGoWW_G31h1GfgDuhOdpQbrL2fVJAGrvNi_DNLZjaXXp1ZjVr97eXrxGuYuUXuoMbIede3_R3tfl551UGkQqtVPynANHUQY9EVWu50GrDaSA1DAdms4gZkFoz1-0RcySxRLFgQmmLUaneOQYdMgHu4uNvnYxN7c07LQ8lLH-zUq5Vr3EH6YS_UQwbAZ3ah5jTrppRmH92hCkOgLUHoAtB" },
              { title: "Hype Mode", sub: "Energy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg87zLRYiC3BGk4LkkUlO4Cdomf9Cm0HZ_6DbHu7fAzWCXGnk84oaThvzsJx4i0YJo7sAk8Ksjgap3WJCC8Vh4o0Zjumf4JnqYqoa36-KOsktD9b-zVKoj3SPvaSMMmIt3L5v8euNj0wzPwOiOBVd_o9JyTrB9bQgwmbZK3NOTvSsX1Ed8Khoi_fr0evCHQwjsRswfeHniCPhnCYTOMl7MUio-7a4gamTFnEJ60nGyuTe_PRvB1kh1FPp6QOZJQMln_icAlysqbkqp" },
              { title: "Lock In", sub: "Focus", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXIeCRGHt5yCdKY_GgS6MAxXJjHsia3AvFTc9Xizzbnq_XvZ-3KN4Q_NTLgnRICd_xQuQTJE_Yt-UiQokwytQ12DYteOyFxDzG0XiTMQNexpI_VJjhWVp101U5L38ShgHa5_P2TAQKwUzInMpCan8dc6wDmg0EbwxBlSi_FSPWy1qekzXsUGpnoujT8f9GYML53_5ezNGpg7Z0ED0x7Kg0lZ5Tec5QxpK_Q2jctFuiO41NgOUNdHHBmm1o4cMuLyZdj7-3fxTIuIrv" }
            ].map((vibe, i) => (
              <button key={i} className="shrink-0 flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: `url("${vibe.img}")` }}></div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{vibe.title}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wide">{vibe.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Deep Dives */}
        <section className="flex flex-col mt-4 mb-8">
          <h2 className="px-4 pb-3 text-xl font-bold tracking-tight dark:text-white">Deep Dives</h2>
          <div className="flex overflow-x-auto hide-scrollbar px-4 pb-4 gap-4">
             <div className="shrink-0 w-[300px] h-[160px] rounded-xl relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-r00j2K5wrPU5Pcy84cXfwHpGCvFxOUQLA_WASfueM1SUTyLV_t7fVWaxEKu_QIKYZBLdVpUAW2RwaU6aUzY0HlWrHyqn8gKdkkyDC2rlDTtMZLKDBVa-9SSRHljftD7Opzkfo8mE1IFjvzBjn5KKQAxhEFp5gPkZQNR8dBle6LNgt62s2XOU9tT_DJ0KOgciGPi2IO-7HDOSYAmdFqDxjWTI5wg7EiWQg5Bcpcx_cva2VjTiEob9NtBxUYrN73_TYZppv5C_hvXi")' }}></div>
                <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <Icon name="bookmark" className="text-white/50 self-end" />
                    <div>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Truth Series</p>
                        <h3 className="text-2xl font-bold text-white">No Cap</h3>
                        <p className="text-white/70 text-sm mt-1">Real talk on difficult verses.</p>
                    </div>
                </div>
             </div>
             
             <div className="shrink-0 w-[300px] h-[160px] rounded-xl relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC88Xc73JcFw1PfY3p79MxYUPeZrTnZjLrjYT8X1x_WpXdM0pa3oDkKoAMcV14Eg-yHX-c8giksPDJiO7WDj1NEcq4KT25cLEUBU5iAed_vXyu7Q6ZqUq_GA-hzo2dK_5ThNlq5sGq--W_kEyQlsLFOkrVt7vIPKMtCCI8X4e5FMBevYjIitXrI1eaJSOq7CzlL4zBna9IbQO_lmcHYVhq-u1JKnuj8RluvkvfoY9GfMrqS5HXKkhyW65fwuXN-bsVzic7XO2sksYyo")' }}></div>
                <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <Icon name="bookmark" className="text-white/50 self-end" />
                    <div>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Genesis</p>
                        <h3 className="text-2xl font-bold text-white">Origin Stories</h3>
                        <p className="text-white/70 text-sm mt-1">Where it all began.</p>
                    </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* FAB */}
      <button 
        onClick={() => navigate(Screen.SESSION)}
        className="fixed bottom-24 right-5 z-40 bg-primary text-white w-14 h-14 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
      >
        <Icon name="play_arrow" className="text-3xl" fill={true} />
      </button>

      {/* Bottom Nav Fixed */}
      <nav className="fixed bottom-0 left-0 w-full z-50 glass-nav pb-safe">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
            <button onClick={() => navigate(Screen.DASHBOARD)} className="flex flex-col items-center justify-center w-full h-full text-slate-500 dark:text-slate-400 hover:text-white transition-colors group">
                <Icon name="home" className="text-2xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">Home</span>
            </button>
            <button className="flex flex-col items-center justify-center w-full h-full text-primary relative">
                <Icon name="local_library" className="text-2xl mb-1" fill={true} />
                <span className="text-[10px] font-medium absolute bottom-2">Library</span>
                <span className="absolute top-3 right-8 w-1.5 h-1.5 bg-primary rounded-full"></span>
            </button>
            <button className="flex flex-col items-center justify-center w-full h-full text-slate-500 dark:text-slate-400 hover:text-white transition-colors group">
                <Icon name="groups" className="text-2xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">Squad</span>
            </button>
            <button className="flex flex-col items-center justify-center w-full h-full text-slate-500 dark:text-slate-400 hover:text-white transition-colors group">
                <Icon name="person" className="text-2xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">You</span>
            </button>
        </div>
      </nav>
      {/* Safe area spacer */}
      <div className="h-6 shrink-0"></div>
    </div>
  );
};