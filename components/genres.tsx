import React from "react";

const genres = [
    {emoji: "🧙", value: "Fantasy"},
    {emoji: "🕵️", value: "Mystery"},
    {emoji: "💑", value: "Romance"},
    {emoji: "🚀", value: "Sci-Fi"},
];

const GenreSelector = ({selectedGenre, onChange}: {
    selectedGenre: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Genre</h3>
            <div className="flex flex-wrap justify-center">
                {genres.map(({value, emoji}) => (
                    <div key={value} className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
                        <input
                            id={value}
                            type="radio"
                            value={value}
                            name="genre"
                            checked={selectedGenre === value}
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

export {GenreSelector};
