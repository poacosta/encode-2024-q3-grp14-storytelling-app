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
        index: undefined,
        name: '',
        description: '',
        personality: '',
    });
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const [userCharacters, setUserCharacters] = useState([formData]);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userCharacters[0] && userCharacters[0]['name'] === '') {
            setUserCharacters([])
        }
        if (formData['index'] != null) {
            userCharacters[formData['index']] = formData
            setUserCharacters(userCharacters);
        } else {
            setUserCharacters((prevData) =>
                [...prevData, formData]);
        }
        setFormData({index: undefined, name: '', description: '', personality: ''});
    };

    const handleDelete = (index: number) => {
        if (userCharacters.length == 1) {
            setUserCharacters([]);
        } else {
            setUserCharacters(userCharacters.splice(index, 1));
        }
    }
    const handleEdit = (index: number) => {
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
