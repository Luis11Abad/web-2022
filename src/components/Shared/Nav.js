const Nav = () => {
    return (
        <nav className="h-20 px-8 lg:px-20 flex justify-between items-center fixed left-1/2 -translate-x-1/2 w-screen mx-auto z-50">
            <div className="flex items-end">
                <h6 className="logo text-dark">la<span className="text-primary">.</span></h6>
            </div>
        </nav>
    );
}

export default Nav;