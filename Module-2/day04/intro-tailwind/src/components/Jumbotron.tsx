function Jumbotron(){
    return (
        <div className="bg-[#f5fcff]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 py-24 gap-12">
                    {/* left */}
                    <div className="flex flex-col justify-center space-y-4">
                        <p className="text-xl font-bold">Hi there, I am Timothy Yeremia Wewengkang.</p>

                        <h1 className="text-4xl md:text-6xl font-bold">I am an IT Software and Web developer program.</h1>

                        <p className="text-xl md:text-xl">A red fox jump over the lazy dog</p>

                        <button className="border px-8 py -4 bg-[#5e3bee] text-white rounded-lg w-fit">Get In Touch</button>
                    </div>
                    {/* right */}
                    <div>
                        <img src="profile.png" alt="Profile"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;