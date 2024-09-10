import React from 'react';

const StoryField = ({messages}: { messages: { content: string }[] }) => {
    return <div
        hidden={
            messages.length === 0 ||
            messages[messages.length - 1]?.content.startsWith("Generate")
        }
        className="bg-gray-700 rounded-lg p-4"
    >
        {messages[messages.length - 1]?.content}
    </div>
}

export {StoryField};
