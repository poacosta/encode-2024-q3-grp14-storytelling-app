import React, {useState} from "react";

const UserCharacter = ({formData, handleFormChange, handleFormSubmit, usercharacters}: {
        formData : { name: string, description: string, personality: string,};
        handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
        handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void
        usercharacters : {name: string, description: string, personality: string }[]
    }) => {
        return  <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-">
                <h3>Add User Characters</h3>
                <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
                    <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">Name:</label>
                            <input required type="text" name="name" className="form-input px-4 py-3 text-sm font-medium text-black" value={formData.name} onChange={handleFormChange} />
                        </div>
                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">Personality:</label>
                            <input required type="text" className="form-input px-4 py-3 text-sm font-medium text-black" name="personality" value={formData.personality} onChange={handleFormChange} />
                        </div>
                        <div className="my-2">
                            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" >Description:</label>
                            <textarea className="form-textarea text-sm font-medium text-black" required name="description" value={formData.description} onChange={handleFormChange} />
                        </div>
                        <div className="my-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50" type="submit">Submit</button>
                        </div>
                    </form>
                    {usercharacters.length > 0 && (
                        <div>
                            <h2 className="my-4 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">User Characters</h2>
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Personality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usercharacters.map((item, i) => (
                                        <tr key={i}>
                                            {Object.values(item).map((value) => (
                                            <td key={Math.random()}>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

            </div>
}
export {UserCharacter};