"use client";
import { useState } from "react";

const Soma = () => {
    const [paramFirst, setParamFirst] = useState<number>(0);
    const [paramSecond, setParamSecond] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const sum = () => {
        setResult(paramFirst + paramSecond);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-200">
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-5">Calculadora</h1>
                <div className="space-y-4">
                    <input
                        type="number"
                        value={paramFirst}
                        onChange={(e) => setParamFirst(Number(e.target.value))}
                        placeholder="Número 1"
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <input
                        type="number"
                        value={paramSecond}
                        onChange={(e) => setParamSecond(Number(e.target.value))}
                        placeholder="Número 2"
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <button
                        onClick={sum}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Calcular
                    </button>
                    <h2 className="text-xl font-medium text-gray-700 mt-3">Resultado: {result}</h2>
                </div>
            </div>
        </div>
    );
};

export default Soma;
