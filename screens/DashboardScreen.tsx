import React from 'react';
import { Icon } from '../components/Icon';
import { Screen } from '../types';

interface DashboardScreenProps {
  navigate: (screen: Screen) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigate }) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 pb-2 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 ring-2 ring-primary/20" 
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzqHOWI26SIiNAHwd8e4gYnfDtevkbP_teRp8Zr9SERg4k4Qt6hI8oj6TZoqoA7F5j3PUuBCNYKuKkVfb8qRAoFZ_UMWzzr3uIZ44OmOO8wICCZ93Kut13nvOrwtXcboZ5oMztZcFhYnxy9_VKl_UvYYuxq3x76T1VOeGt6OdHIfcrRnxam5onIV7YMJ-St4u1fEXeiBKyu4QAAD_IMr4OAotIqhzCIVGUA0Sgv9asJja6Ji_qrVOrEwQ4Jv-TELNBVKTxCOiDw1fd")' }}></div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-light dark:border-background-dark"></div>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Good Morning,</p>
            <h2 className="text-lg font-bold leading-none">Alex</h2>
          </div>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
          <Icon name="notifications" />
        </button>
      </header>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-4 pb-24 flex flex-col gap-6">
        
        {/* Streak Card */}
        <section className="relative overflow-hidden rounded-2xl bg-surface-dark shrink-0">
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 50% 120%, #f48c25 0%, rgba(244, 140, 37, 0) 70%)' }}></div>
          <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center gap-4 py-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-2xl opacity-20 animate-pulse rounded-full"></div>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '64px' }}>local_fire_department</span>
            </div>
            <div className="space-y-1">
              <h1 className="text-5xl font-extrabold text-white tracking-tight">12</h1>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Day Streak</p>
            </div>
            <p className="text-slate-300 text-sm font-medium max-w-[200px]">
              You're absolutely crushing it. Keep the fire burning! 🔥
            </p>
            <button className="mt-2 w-full max-w-[200px] h-12 bg-white text-background-dark rounded-full font-bold text-base shadow-lg shadow-orange-900/20 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span>View Stats</span>
              <Icon name="arrow_forward" className="text-xl" />
            </button>
          </div>
        </section>

        {/* Today's Session */}
        <section className="shrink-0">
          <div className="flex items-center justify-between mb-3 px-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Today's Fire Session</h3>
            <button className="text-primary text-sm font-bold hover:underline">See All</button>
          </div>
          <div className="p-1 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/40">
            <div className="relative flex flex-col bg-background-light dark:bg-surface-dark rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 z-10">
                <div className="bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  10 min
                </div>
              </div>
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBK9TN1SGnQPnL5MknSMzSrD0l15lhaotHiDtqHl6xLq9JGFM5Ns9D_kuJKmdrxE1XK3_7qVKWBMhtx57Qij2xzKnhG2cXm22DEUyNmT2Ij7o9JQB5m-0Pv5JLHLYFPemjGTDipwh4fdDmbIV6fp26lXhQF4dPlqFLg2_SJFstQKP2Df6BLoXnCxNxhO5Of9Ye7XXfnZ9SuRbKK3v0beErbKWVnRhbvSYPeop6UkxL0zm_34iaDh8f4uKY6LVmYLm18qhR-JS2cBgjs")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 relative -mt-12">
                <span className="inline-block px-3 py-1 mb-2 rounded-lg bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">Daily Drop</span>
                <h4 className="text-2xl font-bold text-white mb-1">Psalms for Anxiety</h4>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">Find peace in the chaos. Let's memorize Psalm 23:4 and lock in that main character energy.</p>
                <button 
                  onClick={() => navigate(Screen.SESSION)}
                  className="w-full py-3 bg-primary hover:bg-orange-500 active:bg-orange-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-900/20"
                >
                  <Icon name="play_circle" />
                  Start Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 shrink-0">
          {[
            { icon: "trophy", color: "text-yellow-500", text: "Lvl 5 Initiate" },
            { icon: "book_2", color: "text-blue-400", text: "45 Verses" },
            { icon: "trending_up", color: "text-green-400", text: "Top 10%" }
          ].map((stat, i) => (
            <div key={i} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 pl-3 pr-4 shadow-sm">
              <Icon name={stat.icon} className={`${stat.color} text-lg`} />
              <p className="text-slate-900 dark:text-white text-sm font-bold">{stat.text}</p>
            </div>
          ))}
        </section>

        {/* Relevant Series */}
        <section className="pb-6 shrink-0">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Super Relevant Series</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x px-1">
            {[
              { 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD94b-rDunD_PWCuaIEw99rCsYb35H6KlZDzwIYi3-23H1Ka8uqu8VaG_Pjupjck7mVBrxGavqTRk40Jxx3iFUKywzSYFHwEnGOpDyTF5ei-ErFwXqcsjGQt7ALgD0dtpY7o1l9Hrq-bxSNmyufDKSUybxcNF6KLdH-wU-0k8nfI78zlVL18VysWTqYkvoUVFK2c_6GM4rTwJLtfikNMaa3QWsNl9u8kuRL_W37TuUH6BvGDPdKCHrSpczRLaiKV82V1LJI8F_J_pGq",
                tag: "Esther & David", tagColor: "text-primary", title: "Main Character Energy", sessions: 6
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC46dSJxa3BHtwZZr39EZgAWh5bm5cuRubhQEJX9LVW1bM0TI1_qNDb_bptg-CtSqtc9QFTGTxJacQllcmXQcpqVq6gHV0FW2DRl5iJdS0BijP4_XANz-tGU786w1IHv8oYD7IBDuySBn2grTYey5wsPNBvljKt7kg9opdR8J7KqXAsl-QKB5DeHxL701sh-d-g2t_6gz8qoOqsXMWfKHsx_4KAEuqCyYzV7_0UxsozZ9du4DJS8jExTnjyC4RI_X0vsavhK5UYdy3Z",
                tag: "Growth", tagColor: "text-purple-400", title: "Spiritual Glow Up", sessions: 4
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsO_6nTRJC1fX2jeJFCSaKJjA-JveQl4W0ZLNFoyOqeLcHxOLmZyAPrQ5EWw8fcWSy0Zv3m3iQNDbPTyWaomyN_hj3oQp7XHwcdWkPnVw01-rDBpst_6Fs47zOBXs-lesPpKYYbJya8DV1GULvFnJhs6yYnP3BfaGITZN0vvK7MjkQ4CZMXvDLADvYoNfOCLDaWotcdntqynqY2VrU__llW2mQWyALNvC1YEysiAQouvjBaPMU7uMjmtVp6EBLfAC52HxhKNSgE-_u",
                tag: "Proverbs", tagColor: "text-blue-400", title: "No Cap: Just Truth", sessions: 8
              }
            ].map((item, i) => (
              <div key={i} className="snap-start shrink-0 w-[240px] h-[320px] rounded-2xl relative overflow-hidden group cursor-pointer" onClick={() => navigate(Screen.LIBRARY)}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${item.img}")` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <span className={`text-xs font-bold ${item.tagColor} uppercase tracking-wider mb-1 block`}>{item.tag}</span>
                  <h4 className="text-2xl font-bold text-white leading-tight mb-2">{item.title}</h4>
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-medium">
                    <Icon name="filter_none" className="text-sm" />
                    {item.sessions} Sessions
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Nav Floating */}
      <div className="absolute bottom-6 left-6 right-6 z-50">
        <nav className="bg-black/80 dark:bg-surface-dark/90 backdrop-blur-xl border border-white/10 rounded-2xl h-16 shadow-2xl flex items-center justify-between px-2">
          <button onClick={() => navigate(Screen.DASHBOARD)} className="flex-1 flex flex-col items-center justify-center gap-1 text-primary">
            <Icon name="home" fill={true} />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button onClick={() => navigate(Screen.LIBRARY)} className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
            <Icon name="search" />
            <span className="text-[10px] font-medium">Explore</span>
          </button>
          
          <div className="relative -top-6">
            <button 
              onClick={() => navigate(Screen.SESSION)}
              className="size-16 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-background-light dark:border-background-dark transform transition-transform active:scale-95"
            >
              <Icon name="bolt" className="text-3xl" />
            </button>
          </div>

          <button className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
            <Icon name="group" />
            <span className="text-[10px] font-medium">Community</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
            <Icon name="person" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </nav>
      </div>

    </div>
  );
};