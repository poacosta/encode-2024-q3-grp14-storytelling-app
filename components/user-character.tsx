import React from "react";

const UserCharacter = ({formData, handleFormChange, handleFormSubmit, userCharacters, handleDelete, handleEdit}: {
    formData: { index: number | undefined, name: string, description: string, personality: string, };
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    userCharacters: { name: string, description: string, personality: string }[];
    handleDelete: (index: number) => void;
    handleEdit: (index: number) => void;
}) => {

    return (
        <div className="space-y-6 bg-gray-800 rounded-lg p-6 text-white">
            <h3 className="text-2xl font-bold">Add User Characters</h3>
            <div className="space-y-6 bg-gray-700 rounded-lg p-6">
                <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
                    <input hidden name="index" value={formData.index}/>
                    {/* Form fields */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
                        <input required type="text" id="name" name="name"
                               className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                               value={formData.name} onChange={handleFormChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="personality">Personality:</label>
                        <input required type="text" id="personality" name="personality"
                               className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                               value={formData.personality} onChange={handleFormChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="description">Description:</label>
                        <textarea id="description" name="description" required
                                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                  value={formData.description} onChange={handleFormChange}/>
                    </div>
                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                            type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                {userCharacters.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">User Characters</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto border-collapse">
                                <thead>
                                <tr className="bg-gray-600">
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Description</th>
                                    <th className="px-4 py-2 text-left">Personality</th>
                                    <th className="px-4 py-2" colSpan={2}></th>
                                </tr>
                                </thead>
                                <tbody>
                                {userCharacters.map((item, i) => (
                                    <tr key={i} className="border-t border-gray-500">
                                        {Object.values(item).slice(1).map((value, index) => (
                                            <td key={index} className="px-4 py-2">{value}</td>
                                        ))}
                                        <td className="px-4 py-2">
                                            <button onClick={() => handleEdit(i)}
                                                    className="bg-green-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-lg transition duration-300 ease-in-out"
                                                    type="button">
                                                Edit
                                            </button>
                                        </td>
                                        <td className="px-4 py-2">
                                            <button onClick={() => handleDelete(i)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg transition duration-300 ease-in-out"
                                                    type="button">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export {UserCharacter};
