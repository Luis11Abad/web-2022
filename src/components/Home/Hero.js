const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center mx-auto w-full px-8 z-10 lg:px-20 2xl:px-0 2xl:max-w-screen-xl pt-12 2xl:pt-24">
            <div className="lg:w-2/5 flex justify-end">
                <div className="relative mt-12 xl:mt-20 2xl:mt-24">
                    <div className="absolute z-50 frame border-2 border-primary move"></div>
                    <div className="frame z-40 border-2 border-primary bg-white move"></div>
                </div>
            </div>
            <div className="w-full text-center mt-20 lg:text-left lg:w-3/5">
                <h4 className="text-secondary uppercase font-medium tracking-wide">Hola me llamo Luis Abad</h4>
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-medium text-dark">construyo  <span className="text-primary">apps</span></h2>
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-medium text-dark mt-1 tracking-wider"><span className="text-primary">moviles</span> y webs</h2>
                <p className="text-xl font-light text-dark mt-8">Soy un <span className="font-medium">UI/UX Designer</span> y <span className="font-medium">Full Stack Developer</span> afincado en Badajoz, España. <span className="hidden md:inline-block">Utilizo las últimas tecnologías y tendencias de diseño para brindar a los usuarios de tu web la mejor experiencia posible.</span></p>
            </div>
        </div>
    );
}

export default Hero;