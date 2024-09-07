# Storyteller

Storyteller is a web application that allows users to create stories based on genre, tones and characters.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next create a `.env.local` file in the root directory of the project and add the following environment variables:

```bash
OPENAI_API_KEY=<OPTIONAL IF YOU USE LOCAL MODELS>
API_URL=<URL FOR REQUESTING THE AI API>
MODEL=<MODEL NAME>
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
