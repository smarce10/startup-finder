const ParticlesEditStartup = () => {
    return(
    <>
        {/* Blob principal superior */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[420px] h-[160px] rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 opacity-30 blur-2xl z-0"></div>
        {/* Partículas grandes */}
        <div className="absolute left-10 top-6 w-16 h-16 bg-pink-400 opacity-20 rounded-full blur-xl z-0 animate-pulse"></div>
        <div className="absolute right-10 top-12 w-12 h-12 bg-indigo-400 opacity-20 rounded-full blur-lg z-0 animate-pulse"></div>
        <div className="absolute left-1/4 bottom-0 w-10 h-10 bg-fuchsia-400 opacity-20 rounded-full blur-lg z-0 animate-pulse"></div>
        {/* Partículas pequeñas */}
        <div className="absolute left-24 top-16 w-4 h-4 bg-pink-300 opacity-30 rounded-full blur-md z-0"></div>
        <div className="absolute left-1/3 top-8 w-3 h-3 bg-indigo-300 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute right-24 top-24 w-3 h-3 bg-fuchsia-300 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute right-1/3 top-20 w-2.5 h-2.5 bg-pink-200 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute left-1/2 bottom-4 w-3 h-3 bg-indigo-200 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute left-36 bottom-10 w-2 h-2 bg-pink-300 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute right-36 bottom-16 w-2 h-2 bg-fuchsia-300 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute left-1/4 top-1/2 w-2.5 h-2.5 bg-indigo-300 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute right-1/4 top-1/3 w-3 h-3 bg-pink-200 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute left-1/2 top-24 w-2 h-2 bg-fuchsia-200 opacity-30 rounded-full blur-sm z-0"></div>
        <div className="absolute right-1/2 bottom-24 w-2 h-2 bg-indigo-200 opacity-30 rounded-full blur-sm z-0"></div>
    </>
    )
}

export default ParticlesEditStartup;