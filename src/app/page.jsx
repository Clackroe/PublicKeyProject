'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import Person from "./components/person";

export default function Home() {
    const [message, setMessage] = useState('');
    const [encrypted, setEncrypted] = useState('');

    const handleMessageChange = (e) => {
        setEncrypted('');
        setMessage('');
        setMessage(e.target.value);
    };

    const handleEncryptChange = (encryptedMessage) => {
        setEncrypted(encryptedMessage);
    };

    return (
        <main className="flex flex-col items-center justify-between p-24 min-h-screen">
            <div className="w-full max-w-5xl font-mono text-sm">
                <div className="flex justify-center">
                    {[...Array(3)].map((_, index) => (
                        <Person key={index} message={message} encrypted={encrypted} setEncrypted={handleEncryptChange} />
                    ))}
                </div>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter something"
                    className="w-full max-w-5xl border border-gray-400 text-black p-2 rounded-md mt-4"
                    value={message}
                    onChange={handleMessageChange}
                />
                <div className="w-full max-w-5xl">Encrypted: {encrypted}</div>
            </div>
        </main>
    );
}
