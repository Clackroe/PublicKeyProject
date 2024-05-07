'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Encrypt } from '../Utils/Encrypt';

export default function Person() {

    const [person, setPerson] = useState(null);

    useEffect(() => {
        setPerson(new Encrypt());
    }, []);

    function rerollKeys() {
        setPerson(new Encrypt);
    }


    function renderObject(obj) {
        let out = "";
        if (!obj) return "";
        for (const [k, v] of Object.entries(obj)) {
            out += `${k}: ${v} `;
        }
        return out;
    }


    return (
        <div className="flex flex-col items-center mt-20 border-white border p-3">
            <Image
                className="rounded-full mb-5"
                priority
                src="/pfp.svg"
                width={100}
                height={100}
                alt="PFP"
            />
            <p className="mb-2 font-mono">{renderObject(person && person.privateKey)}</p>
            <p className="mb-3 font-mono">{renderObject(person && person.publicKey)}</p>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={rerollKeys}
            >
                Reroll
            </button>
        </div>
    );
}



