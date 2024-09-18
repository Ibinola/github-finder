# GitHub User Finder

This is a React application that allows users to search for GitHub profiles using the GitHub API. The app fetches GitHub users based on search queries and displays them along with their profile information.

## Features

- Search for GitHub users using the GitHub API.
- Displays a list of user profiles based on the search query.
- Show loading spinner while fetching data.
- Error handling for failed API requests.
- Clear search results functionality.
- View more details about each user (link placeholder).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: Used for navigation between pages.
- **Context API & useReducer**: For state management across the app.
- **Tailwind CSS**: For styling components.
- **DaisyUI**: A Tailwind CSS plugin for styled components.
- **Axios**: For making API requests to GitHub.
- **GitHub API**: For fetching user data.

## Getting Started

To run this project locally, follow the instructions below.

### Prerequisites

- Node.js installed
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-user-finder.git
   cd github-user-finder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add the following environment variables:

   ```bash
   REACT_APP_BASE_URL=https://api.github.com
   REACT_APP_GITHUB_TOKEN=your_github_token_here
   ```

4. Start the development server

   ```bash
   npm start
   ```

5. Visit `https://localhost:3000` in your browser

### Project Structure

```bash
    src
    │
    ├── components
    │ ├── layouts
    │ │ ├── Navbar.js
    │ │ └── Footer.js
    │ ├── users
    │ │ ├── SearchUser.js
    │ │ └── UserResults.js
    │
    ├── context
    │ ├── GithubContext.js
    │ └── GithubReducer.js
    │
    ├── pages
    │ ├── Home.js
    │ └── NotFound.js
    │
    ├── assets
    │ └── loadingspinner.gif
    │
    └── App.js
```

### Contributing

Feel free to fork this project and submit pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.
