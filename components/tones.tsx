import React from "react";

const tones = [
    {emoji: "😊", value: "Happy"},
    {emoji: "😢", value: "Sad"},
    {emoji: "😏", value: "Sarcastic"},
    {emoji: "😂", value: "Funny"},
];

const ToneSelector = ({selectedTone, onChange}: {
    selectedTone: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className="space-y-4 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Tones</h3>
            <div className="flex flex-wrap justify-center">
                {tones.map(({value, emoji}) => (
                    <div key={value} className="p-4 m-2 bg-gray-600 rounded-lg">
                        <input
                            id={value}
                            type="radio"
                            name="tone"
                            value={value}
                            checked={selectedTone === value}
                            onChange={onChange}
                        />
                        <label className="ml-2" htmlFor={value}>
                            {`${emoji} ${value}`}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export {ToneSelector};
