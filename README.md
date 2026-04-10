# TrueStar Construction Website

Welcome to the TrueStar Construction website project! This is a modern, responsive single-page web application built using React, Vite, and Tailwind CSS.

## Getting Started

Follow these steps to run the website locally on your machine.

### Prerequisites

Ensure you have the following installed on your computer:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- `npm` (which comes installed with Node.js)

### Installation

1. Clone the repository or extract the project folder exactly where you want it.
2. Open your terminal (Command Prompt, PowerShell, or MacOS Terminal) and navigate to the project directory:
   ```bash
   cd "Truestar website"
   ```

3. Install the required dependencies using npm:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: The `--legacy-peer-deps` flag is recommended to automatically resolve any peer dependency conflicts with Vite 8 + SWC plugin).*

### Running the Development Server

Start the local development server by running:

```bash
npm run dev
```

Once running, your terminal will display a local URL (e.g., `http://localhost:5173/`). Open this URL in your browser to view the live website. The site will automatically reload whenever you make code changes!

### Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will generate an optimized `dist` folder containing the static HTML, JavaScript, and CSS files ready to be deployed to your hosting provider.

### Deployment on Vercel

This repository includes a `.npmrc` file configured with `legacy-peer-deps=true`. 
This guarantees that Vercel effortlessly installs all dependencies during deployment without failing on modern Vite 8 peer dependency errors.

Simply connect your Github repository to your Vercel dashboard and click "Deploy". Vercel will automatically detect Vite and run the build command flawlessly.
