"use client";

import React, {useState} from "react";
import {useChat} from "ai/react";
import {Title} from "@/components/title";
import {GenreSelector} from "@/components/genres";
import {ToneSelector} from "@/components/tones";
import {StoryField} from "@/components/story-field";
import {GenerateStoryButton} from "@/components/generate-story-button";

export default function Chat() {
    const {messages, append, isLoading} = useChat();
    const [state, setState] = useState({genre: "", tone: ""});
    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [name]: value});
    };

    return (
        <main className="mx-auto w-full p-24 flex flex-col">
            <div className="p4 m-4">
                <div className="flex flex-col items-center justify-center space-y-8 text-white">
                    <Title/>
                    <GenreSelector selectedGenre={state.genre} onChange={handleChange}/>
                    <ToneSelector selectedTone={state.tone} onChange={handleChange}/>
                    <GenerateStoryButton isLoading={isLoading} state={state} append={append}/>
                    <StoryField messages={messages}/>
                </div>
            </div>
        </main>
    );
}
