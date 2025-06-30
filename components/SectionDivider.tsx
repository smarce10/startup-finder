const SectionDivider = () => {
    return (
        <>
            <div className="absolute bottom-0 z-10 w-full h-24 md:h-32 md:invisible lg:visible">
                <svg 
                className="absolute w-full h-full" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(88, 28, 135)" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
                <path 
                    d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" 
                    fill="url(#curveGradient)"
                />
                </svg>
            </div>
        </>
    )
}

export default SectionDivider;