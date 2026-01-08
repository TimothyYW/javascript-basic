import Card from "./Card";

function Expertise(){
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
    ]

    return (
        <div className="container mx-auto py-24">
            <p className="font-bold text-sm">My Skills</p>
            <p className="font-bold text-5xl">My Expertise</p>
            <div className="grid grid-cols-3 gap-8 mt-8">
                {skills.map((skill, index) => {
                    return <Card key={index} title={skill} />;
    })}
            </div>
        </div>
    );
}

export default Expertise;