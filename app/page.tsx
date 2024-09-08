"use client";

import React, {useState} from "react";
import {useChat} from "ai/react";
import {Title} from "@/components/title";
import {GenreSelector} from "@/components/genres";
import {ToneSelector} from "@/components/tones";
import {StoryField} from "@/components/story-field";
import {GenerateStoryButton} from "@/components/generate-story-button";
import {UserCharacter} from "@/components/user-character"

export default function Chat() {
    const {messages, append, isLoading} = useChat();
    const [state, setState] = useState({genre: "", tone: ""});
    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [name]: value});
    };
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        personality: '',
    });
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const [usercharacters, setUserCharacters] = useState([{name: '', description: '', personality: '' }]);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send the form data to  
        setUserCharacters((prevData) => [...prevData, formData]);
        setFormData({ name: '', description: '', personality: '' });
    };

    return (
        <main className="mx-auto w-full p-24 flex flex-col">
            <div className="p4 m-4">
                <div className="flex flex-col items-center justify-center space-y-8 text-white">
                    <Title/>
                    <GenreSelector selectedGenre={state.genre} onChange={handleChange}/>
                    <ToneSelector selectedTone={state.tone} onChange={handleChange}/>
                    <UserCharacter formData={formData} handleFormChange={handleFormChange}
                        handleFormSubmit={handleFormSubmit} usercharacters={usercharacters} />
                    <GenerateStoryButton isLoading={isLoading} state={state} append={append}
                        usercharacters={usercharacters}/>
                    <StoryField messages={messages}/>
                </div>
            </div>
        </main>
    );
}
