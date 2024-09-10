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
    const [currentIndex, setCurrentIndex] = useState(-1);
    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [name]: value});
    };

    interface Character {
        name: string;
        description: string;
        personality: string;
    }

    const [formData, setFormData] = useState<Character>({
        name: '',
        description: '',
        personality: '',
    });

    const [userCharacters, setUserCharacters] = useState<Character[]>([]);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (currentIndex === -1) {
            setUserCharacters([...userCharacters, formData]);
        } else {
            setUserCharacters(userCharacters.map((item, i) => i === currentIndex ? formData : item));
        }
        setFormData({name: '', description: '', personality: ''});
        setCurrentIndex(-1);
    };

    const handleDelete = (index: number) => {
        setUserCharacters((prevCharacters) => prevCharacters.filter((_, i) => i !== index));
    }

    const handleEdit = (index: number) => {
        setCurrentIndex(index);
        setFormData(userCharacters[index]);
    }

    return (
        <main className="mx-auto w-full p-24 flex flex-col">
            <div className="p4 m-4">
                <div className="flex flex-col items-center justify-center space-y-8 text-white">
                    <Title/>
                    <GenreSelector selectedGenre={state.genre} onChange={handleChange}/>
                    <ToneSelector selectedTone={state.tone} onChange={handleChange}/>
                    <UserCharacter formData={formData} handleFormChange={handleFormChange}
                                   handleFormSubmit={handleFormSubmit} userCharacters={userCharacters}
                                   handleDelete={handleDelete} handleEdit={handleEdit}/>
                    <GenerateStoryButton isLoading={isLoading} state={state} append={append}
                                         userCharacters={userCharacters}/>
                    <StoryField messages={messages}/>
                </div>
            </div>
        </main>
    );
}
