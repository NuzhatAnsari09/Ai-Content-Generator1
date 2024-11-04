# 🤖 AI Content Generator

An advanced AI-powered content generation tool built with Next.js and various modern web technologies.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Dependencies](#-dependencies)
- [Development Dependencies](#-development-dependencies)

## ✨ Features

- 🧠 AI-powered content generation
- 🔒 User authentication with Clerk
- 💾 Database integration with Drizzle ORM
- 📝 Rich text editing capabilities
- 💳 Payment integration with Razorpay
- 🎨 Responsive and animated UI components

## 🛠️ Technologies Used

- **Next.js** (v14.2.4): React framework for building the application
- **React** (v18.3.1): JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Drizzle ORM**: TypeScript ORM for database operations
- **Clerk**: Authentication and user management solution
- **Google AI**: Integration with Google's generative AI capabilities
- **Radix UI**: Unstyled, accessible UI components
- **Toast UI Editor**: Markdown WYSIWYG Editor
- **Axios**: Promise-based HTTP client for API requests
- **Razorpay**: Payment gateway integration

## 🚀 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ai-content-generator.git
   ```

2. Install dependencies:
   ```
   cd ai-content-generator
   npm install
   ```

3. Set up environment variables (create a `.env.local` file with necessary API keys and configurations)

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 📁 Project Structure

The project follows the standard Next.js structure with additional folders for components, hooks, and utilities. Key directories include:

- `/pages`: Next.js pages and API routes
- `/components`: Reusable React components
- `/styles`: Global styles and Tailwind CSS configuration
- `/lib`: Utility functions and shared logic
- `/public`: Static assets

## 📜 Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production application
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint for code linting
- `npm run db:push`: Push database schema changes using Drizzle Kit
- `npm run db:studio`: Open Drizzle Kit studio for database management

## 📦 Dependencies

- `@clerk/elements` & `@clerk/nextjs`: User authentication and management
- `@google/generative-ai`: Google's generative AI capabilities
- `@neondatabase/serverless`: Serverless PostgreSQL database integration
- `@radix-ui/react-*`: Various Radix UI components for accessible UI elements
- `@toast-ui/react-editor`: Markdown WYSIWYG editor
- `axios`: HTTP client for API requests
- `drizzle-orm`: TypeScript ORM for database operations
- `lucide-react`: Icon library
- `moment`: Date formatting and manipulation
- `razorpay`: Payment gateway integration
- `react-router-dom`: Routing for React applications
- `tailwind-merge` & `tailwindcss-animate`: Tailwind CSS utilities and animations

## 🛠️ Development Dependencies

- `@types/node`, `@types/react`, `@types/react-dom`: TypeScript type definitions
- `drizzle-kit`: CLI tools for Drizzle ORM
- `eslint` & `eslint-config-next`: Linting tools for code quality
- `postcss`: Tool for transforming CSS with JavaScript
- `tailwindcss`: Utility-first CSS framework
- `typescript`: TypeScript language support

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](link-to-your-issues-page) if you want to contribute.

## 📄 License

This project is [MIT](link-to-your-license-file) licensed.
