import { HiOutlineDocumentText } from "react-icons/hi";

interface CardProps {
    title: string;
}

function Card({ title }: CardProps) {
    return (
        <div className="h-[280px] bg-[#f5fcff] rounded-lg p-8 space-y-4">
            <div className="bg-white w-[50px] h-[50px] flex justify-center items-center">
                <HiOutlineDocumentText className="text-4xl" />
            </div>
            <p className="text-lg font-bold">{props, title}</p>
            <p>

            </p>
        </div>
    );
}

export default Card;