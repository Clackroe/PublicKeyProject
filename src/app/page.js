import Image from "next/image";
import Person from "./components/person";

export default function Home() {

    const NUM_PEOPLE = 3;
    const renderPeople = () => {
        const people = [];
        for (let i = 0; i < NUM_PEOPLE; i++) {
            people.push(<Person key={i} />);
        }
        return people;
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                {renderPeople()}
            </div>
        </main>
    );
}
