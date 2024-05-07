'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Encrypt } from '../Utils/Encrypt';

function Person({ message, setEncrypted, encrypted }) {

    const [person, setPerson] = useState(null);
    const [decrypted, setDecrpyted] = useState(null);

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

    function encryptMessage() {
        setEncrypted(person.encrypt(message));
    }

    function decryptMessage() {
        setDecrpyted(person.decrypt(encrypted));
    }




    return (
        <div className="relative flex flex-col items-center mt-20 border-white border p-3">
            <button
                className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={rerollKeys}
            >
                <Image
                    className="rounded-full"
                    priority
                    src="/refresh.svg"
                    width={15}
                    height={15}
                    alt="refresh"
                />

            </button>
            <div className="flex flex-col items-center">
                <Image
                    className="rounded-full mb-5"
                    priority
                    src="/pfp.svg"
                    width={100}
                    height={100}
                    alt="PFP"
                />
                <p className="mb-2 font-mono">Private: {renderObject(person && person.privateKey)}</p>
                <p className="mb-3 font-mono">Public: {renderObject(person && person.publicKey)}</p>
                <div className='flex'>
                    <button
                        className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={encryptMessage}
                    >
                        Encrypt
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={decryptMessage}
                    >
                        Decrypt
                    </button>
                </div>
                <p>{decrypted}</p>
            </div>
        </div>
    );
}


export default Person;
