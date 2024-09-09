import React from "react";
import {ChatRequestOptions, CreateMessage, Message} from "ai";

interface GenerateStoryButtonProps {
    isLoading: boolean;
    state: { genre: string; tone: string; };
    append: (message: Message | CreateMessage, chatRequestOptions?: ChatRequestOptions) => Promise<string | null | undefined>;
    userCharacters: { name: string, description: string, personality: string }[];
}

const GenerateStoryButton: React.FC<GenerateStoryButtonProps> = ({isLoading, state, append, userCharacters}) => {

    const handleClick = () => {
        const message: CreateMessage = {
            role: "user",
            content: `Generate a story with genre ${state.genre} and tone ${state.tone}`
        };
        append(message);
        if (userCharacters !== null) {
            for (const item of userCharacters) {
                const newMessage: CreateMessage = {
                    role: "user",
                    content: `Add this character to the story with the name ${item.name},
                    with these description ${item.description} and personality ${item.personality} `
                };
                append(newMessage);
            }
        }
    };

    return <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        onClick={handleClick} disabled={isLoading || !state.genre || !state.tone}>
        Generate Story
    </button>
};

export {GenerateStoryButton};
