const ParticlesHome = () => (
  <>
    {/* Blob grande central superior */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-[350px] md:w-[600px] md:max-w-none h-[100px] md:h-[220px] rounded-full bg-gradient-to-r from-primary-dark via-accent-fuchsia to-accent-indigo opacity-30 blur-2xl z-0"></div>
    {/* Partículas grandes */}
    <div className="absolute left-4 md:left-16 top-24 w-12 h-12 md:w-24 md:h-24 bg-accent-pink opacity-20 rounded-full blur-2xl z-0 animate-pulse"></div>
    <div className="absolute right-4 md:right-24 top-40 w-10 h-10 md:w-20 md:h-20 bg-accent-indigo opacity-20 rounded-full blur-xl z-0 animate-pulse"></div>
    <div className="absolute left-1/4 bottom-24 w-8 h-8 md:w-16 md:h-16 bg-accent-fuchsia opacity-20 rounded-full blur-xl z-0 animate-pulse"></div>
    <div className="absolute right-1/4 bottom-16 w-7 h-7 md:w-14 md:h-14 bg-primary-dark opacity-20 rounded-full blur-xl z-0 animate-pulse"></div>
    {/* Partículas pequeñas */}
    <div className="absolute left-40 top-56 w-4 h-4 bg-accent-pink opacity-40 rounded-full blur-md z-0"></div>
    <div className="absolute right-40 top-64 w-3 h-3 bg-accent-yellow opacity-40 rounded-full blur-md z-0"></div>
    <div className="absolute left-1/3 top-1/2 w-3 h-3 bg-accent-fuchsia opacity-40 rounded-full blur-md z-0"></div>
    <div className="absolute right-1/3 top-1/3 w-2.5 h-2.5 bg-accent-indigo opacity-40 rounded-full blur-md z-0"></div>
    <div className="absolute left-1/2 bottom-24 w-3 h-3 bg-accent-yellow opacity-40 rounded-full blur-md z-0"></div>
    <div className="absolute left-1/4 bottom-10 w-2 h-2 bg-accent-pink opacity-40 rounded-full blur-sm z-0"></div>
    <div className="absolute right-1/4 bottom-20 w-2 h-2 bg-accent-fuchsia opacity-40 rounded-full blur-sm z-0"></div>
    <div className="absolute left-1/2 top-32 w-2 h-2 bg-accent-indigo opacity-40 rounded-full blur-sm z-0"></div>
    <div className="absolute right-1/2 bottom-32 w-2 h-2 bg-accent-yellow opacity-40 rounded-full blur-sm z-0"></div>
    {/* Extras para más vida */}
    <div className="absolute left-4 md:left-10 bottom-10 w-6 h-6 md:w-8 md:h-8 bg-accent-pink opacity-20 rounded-full blur-lg z-0"></div>
    <div className="absolute right-4 md:right-10 bottom-16 w-4 h-4 md:w-6 md:h-6 bg-accent-fuchsia opacity-20 rounded-full blur-lg z-0"></div>
    <div className="absolute left-1/3 top-10 w-4 h-4 md:w-5 md:h-5 bg-accent-yellow opacity-30 rounded-full blur-lg z-0"></div>
    <div className="absolute right-1/3 top-20 w-3 h-3 md:w-4 md:h-4 bg-accent-indigo opacity-30 rounded-full blur-lg z-0"></div>
  </>
);

export default ParticlesHome;