const Approach = () => {
    return (
        <div className="flex flex-col items-center mx-auto w-full px-8 pb-36 z-10 lg:px-20 2xl:px-0 2xl:max-w-screen-xl pt-12">
            <h2 className="text-6xl mb-6">enfoque</h2>
            <p className="text-lg text-center font-light tracking-wide">Independientemente de los requerimientos de tu web o app, me aseguro de que esta sea...</p>
            <div className="flex flex-wrap w-full mt-16">
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-12">
                    <div className="flex items-center justify-center bg-primary rounded-full w-20 h-20">
                        <img src="/icons/fast-charge.png" width="48" className="-rotate-45"/>
                    </div>
                    <h5 className="font-medium mt-2 mb-6 text-lg tracking-wide">Rápida</h5>
                    <p className="text-center font-light px-8"></p>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-12">
                    <div className="flex items-center justify-center bg-primary rounded-full w-20 h-20">
                        <img src="/icons/responsive.png" width="48"/>
                    </div>
                    <h5 className="font-medium mt-2 mb-6 text-lg tracking-wide">Responsiva</h5>
                    <p className="text-center font-light px-8">7 de cada 10 usuarios entrarán a tu web desde su móvil, su experiencia será fundamental</p>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-12">
                    <div className="flex items-center justify-center bg-primary rounded-full w-20 h-20">
                        <img src="/icons/lamp.png" width="32"/>
                    </div>
                    <h5 className="font-medium mt-2 mb-6 text-lg tracking-wide">Intuitiva</h5>
                    <p className="text-center font-light px-8">Tus usuarios entran a tu web buscando algo, mi prioridad es lograr que lo encuentren</p>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
                    <div className="flex items-center justify-center bg-primary rounded-full w-20 h-20">
                        <img src="/icons/search.png" width="32"/>
                    </div>
                    <h5 className="font-medium mt-2 mb-6 text-lg">Posicionada</h5>
                    <p className="text-center font-light px-8">Al menos con los requerimientos técnicos de SEO completos: meta tags, robots, site maps...</p>
                </div>
            </div>
        </div>
    );
}

export default Approach;