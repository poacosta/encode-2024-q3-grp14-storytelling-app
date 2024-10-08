import React from "react";
import {ChatRequestOptions, CreateMessage, Message} from "ai";

interface GenerateStoryButtonProps {
    isLoading: boolean;
    state: { genre: string; tone: string; };
    append: (message: Message | CreateMessage, chatRequestOptions?: ChatRequestOptions) => Promise<string | null | undefined>;
    userCharacters: { name: string, description: string, personality: string }[];
}

const messages: string[] = [];

const GenerateStoryButton: React.FC<GenerateStoryButtonProps> = ({isLoading, state, append, userCharacters}) => {
    const handleClick = () => {
        messages.push(`Generate a story with genre ${state.genre} and tone ${state.tone}`);
        if (userCharacters.length > 0) {
            for (const item of userCharacters) {
                messages.push(`Add this character to the story with the name ${item.name}, with these description ${item.description} and personality ${item.personality}`);
            }
            messages.push('At the end, summarize how each character contributes to the story.');
        }
        append({role: "user", content: messages.join('.')});
    };

    return <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        onClick={handleClick} disabled={isLoading || !state.genre || !state.tone}>
        Generate Story
    </button>
};

export {GenerateStoryButton};
