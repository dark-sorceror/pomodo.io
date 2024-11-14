Pomodo.io
Pomodo.io is a minimalist and effective Pomodoro Timer application built with React and Vite. It offers a Zen mode for focused work and includes theme toggles for Light/Dark modes.

Features
Zen Mode for distraction-free focus.
Customizable Pomodoro Timer sequence (work, short break, long break).
Light/Dark Theme toggle support using useTheme().
Fast, responsive UI built with React and Tailwind CSS.
Tech Stack
Frontend: React, Vite, Tailwind CSS
Backend: Node.js, Express
Styling: Tailwind CSS
Getting Started
Prerequisites
Make sure you have Node.js (version 16 or higher) installed. If you need to switch to Node version 16, you can use tools like nvm.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/pomodo.io.git
cd pomodo.io
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
This command will start the frontend server.

Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install backend dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
npm run dev
The backend server will start on its designated port (usually http://localhost:5000).

Available Scripts
In the project directory, you can run:

npm run dev: Starts the development server for the frontend.
npm run build: Builds the app for production.
npm run preview: Serves the production build locally.
Linting
This project uses ESLint to maintain code quality. The Vite setup includes:

@vitejs/plugin-react for Babel-based Fast Refresh.
@vitejs/plugin-react-swc for SWC-based Fast Refresh.
Choose the desired plugin for your project.