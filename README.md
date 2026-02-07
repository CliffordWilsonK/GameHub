# CliffX 🎮

**CliffX** is a modern video game discovery web application that helps users find new games, view details, and explore vast gaming libraries.

## 🚀 About the Project

CliffX serves as a hub for gamers to search for their next adventure. The application provides a clean, responsive interface to browse games by genre, platform, and rating.

### Data Source: RAWG API

This project is powered by the **[RAWG Video Games Database API](https://rawg.io/apidocs)**. We utilize RAWG because it offers the largest open video game database, providing rich metadata including:

- Game titles and descriptions
- Release dates and Metacritic scores
- High-quality background images and screenshots
- Platform and genre categorization

## ✨ Features

- **Game Search:** Instant search functionality to find specific titles.
- **Filtering:** Sort games by Genre (Action, RPG, Indie) and Platform (PC, PlayStation, Xbox).
- **Responsive Design:** Optimized for desktop, tablet, and mobile viewing.
- **Dark Mode:** (Optional: if your app supports it).

## 🛠️ Tech Stack

- **Frontend:** React (Vite) / TypeScript
- **Styling:** Chakra UI / CSS Modules
- **State Management:** React Hooks / Zustand
- **Data Fetching:** Axios
- **API:** RAWG.io API

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/CliffordWilsonK/GameHub.git
    cd GameHub
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure the API Key**
    This project requires a RAWG API key to fetch data.

    - Go to [https://rawg.io/apidocs](https://rawg.io/apidocs) and create a free account.
    - Get your personalized API Key.
    - Create a `.env` file in the root directory of the project.
    - Add your key to the file:

    <!-- end list -->

    ```env
    # If using Vite:
    VITE_RAWG_API_KEY=your_actual_api_key_here

    # If using Create React App:
    REACT_APP_RAWG_API_KEY=your_actual_api_key_here
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

## 📂 Folder Structure

```text
/src
  ├── components/    # Reusable UI components (GameCard, NavBar)
  ├── hooks/         # Custom hooks (useGames, useGenres)
  ├── services/      # API service configuration (api-client.ts)
  ├── assets/        # Static images and logos
  └── App.tsx        # Main application entry
```
