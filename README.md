# Portfolio Website

This project is a portfolio website that showcases the user's information, projects, and interview resources. It is built using React and TypeScript.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Contains the React components for different sections of the portfolio.
    - **AboutMe.tsx**: Displays information about the user.
    - **Projects.tsx**: Lists the user's projects with descriptions and links.
    - **InterviewResources.tsx**: Provides resources and tips for interviews.
  - **App.tsx**: The main application component that sets up routing and includes the other components.
  - **index.tsx**: The entry point of the application that renders the App component.
  - **styles/**: Contains the CSS styles for the application.
    - **main.css**: Styles for the tabs and layout.
- **public/**: Contains the public assets for the application.
  - **index.html**: The main HTML file that includes the root div for the React application and links to the CSS file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: npm configuration file for dependencies and scripts.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Features

- About Me section to introduce the user.
- Projects section to showcase work and projects.
- Interview Resources section to provide helpful tips and resources for job interviews.

## License

This project is licensed under the MIT License.