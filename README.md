# Yahir Paz - Personal Portfolio

A dynamic and fully responsive single page portfolio website built with React, Vite, and Tailwind CSS. This project showcases my skills, experience, and projects through a unique, modern "computer terminal" user interface. The site is designed to be easily updatable by modifying a central data file.

[**View the Live Demo**](https://yahirpaz.com)

## Features

-   **Modern Terminal UI**: A unique aesthetic inspired by command line interfaces, with "window" components for each section.
-   **Responsive Design**: The layout is optimized for a seamless experience on all devices, from mobile phones to desktops.
-   **Dark/Light Mode**: A theme toggle that saves the user's preference in their browser via `localStorage`.
-   **Dynamic Content**: Project details, skills, and personal information are managed in a central `portfolioData.js` file for easy updates.
-   **Functional Contact Form**: Integrated with EmailJS to send messages directly to my personal email address.
-   **Interactive Components**: Includes a typing animation for the hero section and a filterable skills display.
-   **Resume Download**: A dedicated button allows recruiters to easily download a PDF version of my resume.

## Tech Stack

-   **Frontend:** React, Vite, Tailwind CSS
-   **Deployment:** Vercel
-   **Email Service:** EmailJS

## Getting Started

To clone and run this project locally, you will need to have Node.js and npm installed on your machine.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm

### Installation & Running

1.  **Clone the repository:** Open your terminal and clone the project to your local machine.
    ```sh
    git clone [https://github.com/yahirpaz1102/Portfolio-website.git](https://github.com/yahirpaz1102/Portfolio-website.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Portfolio-website
    ```

3.  **Install dependencies:** This will install all the necessary packages for the project.
    ```sh
    npm install
    ```

4.  **Run the development server:** This command starts the local server, typically on `http://localhost:5173`.
    ```sh
    npm run dev
    ```

## Code Overview

The project is structured with a focus on modularity and separation of concerns, making it easy to manage and scale.

### `src/data/`

-   **Responsibility:** Contains the central data source for the entire application.
-   **Details:** `portfolioData.js` exports a single JavaScript object containing all personal information, project descriptions, skills, and experience. This allows for content updates without touching the component logic.

### `src/components/`

-   **Responsibility:** Holds all reusable, presentational components used throughout the site.
-   **Details:** This folder includes components like `Header.jsx`, `Footer.jsx`, `Icons.jsx`, and `TerminalWindow.jsx`. These components are self contained and receive data through props.

### `src/sections/`

-   **Responsibility:** Contains the major top level sections of the single-page application.
-   **Details:** Each file (e.g., `Hero.jsx`, `About.jsx`, `Projects.jsx`) corresponds to a major scrollable section on the page. These components are responsible for their own layout and for importing the necessary data and reusable components.

### `src/App.jsx`

-   **Responsibility:** The main component that assembles the entire application.
-   **Details:** It manages the global state (like the dark/light mode preference) and renders all the section components in the correct order.
