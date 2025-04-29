# React + TypeScript + Vite
## Overview

This application is built using modern web technologies including React, React Query, Shadcn, React Hook Form, Tailwind CSS, and Vite. It provides a user-friendly experience with features like dark mode, internationalization, and dynamic forms, as well as advanced functionalities such as filtering, sorting, searching, and drag-and-drop capabilities for table columns.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Query**: A powerful data-fetching library that simplifies the management of server state in React applications.
- **Shadcn**: A component library providing pre-designed components to speed up the development process.
- **React Hook Form**: A library to manage form state and validation in React applications, making forms more efficient and easier to work with.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with a modern design system.
- **Vite**: A build tool that provides fast development and optimized production builds for modern web applications.
- **i18next**: A internationalization framework that supports multi-language functionality in the application, allowing for a seamless user experience across different languages.

## Features

- **Dark Mode and Light Mode**: Users can toggle between dark and light themes, enhancing usability in various lighting conditions.
- **Internationalization**: The application is fully internationalized, allowing users to switch between multiple languages with ease.
- **Dynamic Forms**: Fully dynamic and customizable forms that adapt based on user input and requirements.
- **Table Functionality**:
  - **Filtering**: Easily filter table data to find specific entries.
  - **Sorting**: Sort table data based on different columns for better organization.
  - **Searching**: A robust search functionality to quickly locate specific data.
  - **Drag and Drop**: Users can rearrange table columns through drag-and-drop, improving their workflow.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# countries-info
