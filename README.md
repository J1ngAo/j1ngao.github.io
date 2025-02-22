# My Portfolio: A Journey of Learning and Implementation
<img width="978" alt="Screenshot 2023-09-12 at 13 45 37" src="https://github.com/J1ngAo/j1ngao.github.io/assets/99788249/2c17b7fa-0780-45bb-a6fe-71904df3d7a7">

## Introduction
This portfolio serves as a showcase for my skills and is built upon a template provided by Payton Pierce(https://www.paytonpierce.dev/). While the project did start as a template, the customization and deployment process offered me a wealth of learning opportunities.

**Live site**: https://j1ngao.github.io/

## Challenges Faced

### Deploying Create-React-App on GitHub Pages

One of the challenges was the deployment of a React application on GitHub Pages. Unlike simple HTML projects where the `index.html` file resides in the root directory, Create-React-App (CRA) places this file within the `public` folder. Here's how I tackled this issue:

#### Steps for Deployment

1. **Install `gh-pages` as a Dev Dependency**:  
    Run the following command to install `gh-pages`.

    ```bash
    npm install gh-pages --save-dev
    ```

2. **Modify `package.json`**:  
    - Add a `homepage` field, replacing **`{username}`** with your GitHub username.
        
        ```json
        "homepage": "http://{username}.github.io/"
        ```
        
    - Update the `scripts` section to include pre-deployment and deployment commands.
        
        ```json
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            "start": "react-scripts start",
            "build": "react-scripts build"
        }
        ```

3. **Deploy the Application**:  
    Execute the deployment script.

    ```bash
    npm run deploy
    ```

## Ongoing Projects

I am currently working on the following features and projects:

1. **Java + Spring Framework Project**: A collection of classic games such as Pac-Man and Mario.
2. **Resume Integration**: I am in the process of adding my resume to the website.
3. **Interactive "About" Section**: Inspired by Shelley Vohr(https://github.com/codebytere), I am developing an interactive terminal that uses CLI commands to navigate and retrieve information, making the website more engaging.
