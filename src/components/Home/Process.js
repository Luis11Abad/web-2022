const Process = () => {
    return (
        <div className="bg-light text-dark">
            <div className="flex flex-col items-center mx-auto w-full px-8 pb-36 z-10 lg:px-20 2xl:px-0 2xl:max-w-screen-lg pt-28">
                <h2 className="text-6xl mb-6">proceso</h2>
                <p className="text-lg text-center font-light tracking-wide">Independientemente de los requerimientos de tu web o app, me aseguro de que esta sea...</p>
                <div className="flex justify-center flex-wrap w-full mt-16">
                    <div className="flex flex-col items-center w-full">
                        <div className="flex self-start flex-col bg-white rounded md:w-3/5 p-8 border-2 border-dashed border-primary mb-16 relative process">
                            <div className="flex items-start justify-end px-3 py-1 bg-dark rounded w-12 h-12">
                                <span className="text-white text-2xl font-medium">1</span>
                            </div>
                            <h5 className="font-medium text-xl mt-3 text-lg tracking-wide">Investigación</h5>
                            <p>Lo primero que necesito es reunir información sobre tu producto/servicio, así como investigar tu sector y tus competidores.</p>
                        </div>
                        <div className="flex self-end flex-col bg-white rounded md:w-3/5 p-8 border-2 border-dashed border-primary mb-16 relative process">
                            <div className="flex items-end justify-start px-3 py-1 bg-dark rounded w-12 h-12">
                                <span className="text-white text-2xl font-medium">2</span>
                            </div>
                            <h5 className="font-medium text-xl mt-3 text-lg tracking-wide">Diseño</h5>
                            <p>Una vez reunida la información, empiezo con el prototipado de la web, desde un boceto básico que defina la estructura de la página hasta uno final en el que se definan colores, formas de los elementos de la UI, etcétera.</p>
                        </div>
                        <div className="flex self-start flex-col bg-white rounded md:w-3/5 p-8 border-2 border-dashed border-primary mb-16 relative process">
                            <div className="flex items-start justify-end px-3 py-1 bg-dark rounded w-12 h-12">
                                <span className="text-white text-2xl font-medium">3</span>
                            </div>
                            <h5 className="font-medium text-xl mt-3 text-lg tracking-wide">Desarrollo</h5>
                            <p>Tras haber decidido el aspecto visual del sitio web o app, procedo con el desarrollo de la misma. Dependiendo de las necesidades del proyecto, esta etapa puede variar bastante, y para esto cuento con experiencia y conocimientos en las tecnologías más utilizadas del mercado</p>
                        </div>
                        <div className="flex self-end flex-col bg-white rounded md:w-3/5 p-8 border-2 border-dashed border-primary mb-16 relative process">
                            <div className="flex items-end justify-start px-3 py-1 bg-dark rounded w-12 h-12">
                                <span className="text-white text-2xl font-medium">4</span>
                            </div>
                            <h5 className="font-medium text-xl mt-3 text-lg tracking-wide">Revisión continua</h5>
                            <p>A medida que avanza el proyecto trato de buscar oportunidades de mejora que involucren incluso procesos que ya había completado. En este sentido, mi objetivo es siempre llegar al mejor resultado posible.</p>
                        </div>
                    </div>
                </div>
                <p className="text-lg text-center font-light tracking-wide my-10">Para realizar estos procesos cuento con conocimientos y experiencia en las tecnologías más demandadas del mercado:</p>
            </div>
        </div>
    );
}

export default Process;