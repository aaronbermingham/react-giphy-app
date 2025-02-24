# Giphy explorer (React + Vite)

A React application that fetches and displays GIFs using the Giphy API. Users can search for GIFs and explore trending content.

## Features

- 🔍 Search for GIFs using keywords
- 🔥 View trending GIFs
- ⚡ Fast and lightweight with Vite
- ⬇️ Show more functionality for search results

## 🛠️ Installation

### Prerequisites
- Node.js installed on your machine

### Steps

1. Clone the Repository
    ```sh
    git clone https://github.com/aaronbermingham/react-giphy-app
    cd react-giphy-app
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Add a .env file in the root directory and your Giphy API key:
    ```sh
    VITE_API_KEY=giphy_api_key
    ```

4. Start the development server
    ```sh
    npm run dev
    ```

## 📖 Usage
- Enter a term in the input field to search for GIFs
- Click show more to view more search GIFs in increments of 5
- Scroll down to explore trending GIFs.

## ⚙️ Technologies used
- ⚛️ React
- ⚡ Vite

## 🔧 Improvements
- Create a list component that can be used in both `TrendingList` & `GifSearchResult`
- Save GIFs between renders (possible approach use `useRef` to persist the state)
- An actual skeleton/placeholder for loading rather than just loading text