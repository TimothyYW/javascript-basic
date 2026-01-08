function Navbar(){
    return (
        <div className="container mx-auto flex justify-between items-center py-2">
            <img src="/logo.png" alt="Logo" className="w-[140px] h-[30px] md:h-[40px] md:w-[186px]"/>

            <div className="hidden md:flex gap-4">
                <p>Home</p>
                <p>Portfolio</p>
                <p>About me</p>
            </div>
            <button className="hidden md:border border-[#5e3bee] px-8 py-4 text-[#4e3bee] rounded-md">Contact me</button>
        </div>
    );
}

export default Navbar;