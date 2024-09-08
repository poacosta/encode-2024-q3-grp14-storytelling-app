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
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const [usercharacters, setUserCharacters] = useState([formData]);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let first_element = usercharacters[0]
        if (first_element && first_element['name'] === ''){
            setUserCharacters([])
        }
        if (formData['index'] != null){
            usercharacters[formData['index']] = formData
            setUserCharacters(usercharacters);
        } else{
            setUserCharacters((prevData) =>
                [...prevData, formData]);
        }
        setFormData({ index: undefined, name: '', description: '', personality: '' });
    };

    const handleDelete = (index: number) => {
        if (usercharacters.length == 1){
            setUserCharacters([]);
        } else{
            let new_set = usercharacters.splice(index, 1);
            setUserCharacters(new_set);
        }
    }
    const handleEdit = (index: number) => {
        let record = usercharacters[index];
        setFormData(record);
    }
    return (
        <main className="mx-auto w-full p-24 flex flex-col">
            <div className="p4 m-4">
                <div className="flex flex-col items-center justify-center space-y-8 text-white">
                    <Title/>
                    <GenreSelector selectedGenre={state.genre} onChange={handleChange}/>
                    <ToneSelector selectedTone={state.tone} onChange={handleChange}/>
                    <UserCharacter formData={formData} handleFormChange={handleFormChange}
                        handleFormSubmit={handleFormSubmit} usercharacters={usercharacters}
                        handleDelete={handleDelete} handleEdit={handleEdit} />
                    <GenerateStoryButton isLoading={isLoading} state={state} append={append}
                        usercharacters={usercharacters}/>
                    <StoryField messages={messages}/>
                </div>
            </div>
        </main>
    );
}
