import React from 'react';
import { Icon } from '../components/Icon';
import { Screen } from '../types';

interface OnboardingScreenProps {
  navigate: (screen: Screen) => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigate }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-surface-darker overflow-hidden font-display justify-between">
      {/* Header */}
      <div className="flex items-center p-6 justify-center w-full z-10 pt-12">
        <div className="flex items-center gap-2">
          <div className="text-primary flex size-8 shrink-0 items-center justify-center">
            <Icon name="local_fire_department" className="text-3xl" />
          </div>
          <h2 className="text-[#181411] dark:text-white text-xl font-bold leading-tight tracking-tight">Daily Fire</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 relative">
        {/* Visual */}
        <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-darker/90 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center animate-pulse-slow" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoBwps5UixZ0VRPzWni3O6ePuJhEzcGfaf2lrFVR2tiVeUXwHJCOEmeGg-LxkyHelBuRK_Hb0RTcCJQFtZO2iT-4Brb8BuO5svPIO2Z5khNYlLOJekwJlob9shjGxosa3vZAvoWJ7SmmW9rF2MDDC140s3TwiE-eTGHuV3TTDvsiz3OriYG3oAwc_9VV_O_70e7OkINMtvmTRZaD8Mq5AVxicLtB2JxhhBBNamQU7A1b-cH9lT0Aw6yi5wOpES4QC-FBKx3fb2EZtB")' }}
          ></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3 text-center z-20 max-w-sm">
          <h1 className="text-[#181411] dark:text-white text-4xl font-black leading-tight tracking-tight">
            Ignite Your <span className="text-primary">Spirit</span>
          </h1>
          <p className="text-[#88786a] dark:text-[#baab9c] text-base font-medium leading-relaxed">
            Master scripture with daily fire sessions designed for main character energy.
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="w-full flex flex-col items-center gap-6 pb-10 px-6 z-20">
        {/* Social Proof */}
        <div className="flex items-center gap-3 bg-[#e8e4df] dark:bg-[#2a231d] pl-2 pr-4 py-1.5 rounded-full border border-transparent dark:border-[#393028]">
          <div className="flex -space-x-2 overflow-hidden">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB2IRJphAAMY5fICWkcffsWcyX3cQUhnOfsiSKHli2-zf6bZMF6PjCKnV7h2eOjW9eKuVYP1MEBWrT7kHPRzUPVaOOKAO62-5zyj2NpVcVTRjlETl2WbDBR5t41MRAN4G-wLAL5w01o0FyyiuWt9YTWdyi4ARGrOSld1rlefYh0oXZQZ5nH27BzXbQimL2GkcBGrEeZVgJHWmS2PyTcrFZGDkib8Qc5RW-w6KcGZDMIMMW94TzSA80474Tg6t2Url8df_N078JYd9Mt",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDnTVyCq8UpiLvwhuxQJoH2q_Gf59mErlG1kYp6RyRbIoLQj0gHOjGrUaSkK4cFdaRdNVvfzMCGaUzdO_mLD6_91eVJD8eaN7kic7yjxZoaoznT9mJnW-3WfWQeLC8xG6o4XQaW6Ev8aCgP9tIsc3Mv865ZwGzouIZdvt3RpjZQZ5yiRwdubt_lMzpeluV-NVYL9X_upmmH7-5N6TymoHOnpuu-LhyOcey0Ql-YZvek2EmVw7mXQYKW28CP2JhF7LCRkqgFd3R0NrL2",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCo25fG4DOGujJ0BecwekfWiIhGeMMhSkDeJqvM1tBvlRxQpa2m-Wn2RSmu9P87ZwDaMziF-5K1eT9lhc4sjFZ_QBcnwa3tjozddc4_dUoxElQUpBt_hxfWlAQQhm9-T0BfazNYVP6jnfF-py82FMf334q3yynY6jPMakM7RUuAoWoyvFoVCBhxjmvPEBUBWhmteC4-ApXtZGTnRs4XNJGFx3CLgJ53MMO-MeMjMotkv2ABZLIQOjC4q8w2BheK3Dfwee1UErDdqwLl"
            ].map((url, i) => (
              <div key={i} className="inline-block size-6 rounded-full ring-2 ring-background-light dark:ring-[#2a231d] bg-cover bg-center" style={{ backgroundImage: `url("${url}")` }}></div>
            ))}
          </div>
          <span className="text-[#181411] dark:text-[#baab9c] text-xs font-semibold">Join 10k+ Fire Keepers</span>
        </div>

        {/* CTA */}
        <button 
          onClick={() => navigate(Screen.DASHBOARD)}
          className="w-full max-w-[480px] h-14 bg-primary hover:bg-primary/90 transition-all active:scale-[0.98] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(244,140,37,0.3)]"
        >
          <span className="text-[#181411] text-lg font-bold tracking-wide">Start the Fire</span>
        </button>

        <button className="text-[#88786a] dark:text-[#baab9c] text-sm font-semibold hover:text-primary transition-colors">
          Already have an account? Sign In
        </button>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-40"></div>
    </div>
  );
};