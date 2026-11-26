# E|C React Practice — Tasks 5.1–5.6

A practical React + Vite project developed for Engineering College. This project demonstrates React fundamentals, JSX, reusable components, Props, State, event handling, and conditional rendering.

## Author Information

- **Name:** Radomir Konovalov
- **College:** Engineering College
- **Project:** E|C React Practice
- **Programming Language:** JavaScript

## 1. Technologies Used

- React
- Vite
- JavaScript (ES6+)
- JSX
- CSS3
- Node.js
- npm
- Git
- GitHub
- Vercel

## 2. System Requirements

- Ubuntu, Windows, or macOS
- Node.js 18 or newer
- npm
- Visual Studio Code or WebStorm
- A modern web browser
- Internet connection for installing dependencies and deployment

## 3. Project Installation and Setup

### 3.1. Check Node.js and npm

```bash
node -v
npm -v
```

### 3.2. Clone the GitHub Repository

```bash
git clone git@github.com:karkar1939/React_Practice-.git
```

### 3.3. Enter the Project Directory

```bash
cd React_Practice-/react-practice
```

### 3.4. Install Dependencies

```bash
npm install
```

### 3.5. Start the Development Server

```bash
npm run dev
```

Open the local address displayed in the terminal, usually:

```text
http://localhost:5173/
```

To stop the development server, press `Ctrl + C`.

## 4. Practice Tasks

### 5.1. Project Setup

- Install Node.js and npm.
- Create a React project using Vite.
- Configure the development environment.
- Install project dependencies.
- Understand the basic project structure.

### 5.2. Deployment with Vercel

- Create a GitHub repository.
- Initialize Git in the project directory.
- Commit and push project files to GitHub.
- Create a Vercel account.
- Connect Vercel to GitHub.
- Import the React repository.
- Configure the Vite build settings.
- Deploy the application.
- Configure automatic deployment after Git pushes.

### 5.3. Environment and Hello React

Create an Introduction to React section containing:

- A main heading: Introduction to React.
- A paragraph explaining what React is.
- A footer displaying the current year dynamically using JavaScript in JSX.

Example:

```jsx
<footer>© {new Date().getFullYear()}</footer>
```

### 5.4. JSX and Components

Create the following reusable function components:

- Title
- Subtitle
- Paragraph
- HighlightBox
- StudentCard

Practice the following concepts:

- Creating and using React function components.
- Combining multiple components inside the main App component.
- Passing information through Props.
- Creating at least three StudentCard components with different information.
- Storing student information in an array.
- Using `.map()` to render student cards.
- Assigning unique keys to rendered elements.

### 5.5. State and Interactivity

Implement the following interactive components.

**Counter Component**

- Display a numerical value.
- Create an increment button.
- Create a decrement button.
- Update the displayed number using `useState`.

**CourseInfo Component**

- Display the course name.
- Create a Show Details button.
- Create a Hide Details function.
- Display or hide additional information when the button is clicked.
- Use State and conditional rendering.

**LivePreview Component**

- Create a text input.
- Display the entered text below the input.
- Update the displayed text immediately when the user types.
- Use a controlled input with `useState` and `onChange`.

### 5.6. Mini Project: E|C Student List

Create a student list application using a hard-coded array of student objects.

Each student should contain:

- Name
- Track
- Activity status (`isActive`)

Required components:

- StudentList
- StudentFilter

Required functionality:

- Display all students.
- Display student names and tracks.
- Show whether each student is active.
- Create an All filter.
- Create an Active Only filter.
- Update the displayed list when a filter is selected.
- Use `.map()` to render students.
- Use unique keys for list elements.
- Use React State for filtering.
- Use conditional rendering.
- Optionally highlight active students using CSS.

## 5. Key React Concepts

**JSX**

An HTML-like syntax used inside JavaScript to describe React elements.

**Components**

Reusable JavaScript functions that return JSX and represent parts of the user interface.

**Props**

Properties used to pass data from a parent component to a child component.

Example:

```jsx
<StudentCard name="Aida" />
```

**State**

Data managed inside a component. When State changes, React updates the interface.

Example:

```jsx
const [count, setCount] = useState(0);
```

**Events**

Functions that respond to user interactions, such as clicks and input changes.

Example:

```jsx
<button onClick={() => setCount(count + 1)}>
  Increase
</button>
```

**Array map()**

A JavaScript method used to create React elements from an array.

**Conditional Rendering**

Displaying different elements depending on a condition.

## 6. Project Structure

```text
react-practice/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CourseComponents.jsx
│   │   ├── Interactive.jsx
│   │   └── StudentList.jsx
│   ├── data/
│   │   └── students.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

### Main Files

**index.html**

The main HTML document containing the root element where React renders the application.

**src/main.jsx**

The entry point that connects React to the HTML document.

**src/App.jsx**

The main application component that combines the other components.

**src/index.css**

Contains global styles and responsive design rules.

**src/components/**

Contains reusable React components.

**src/data/students.js**

Contains the student data used by the StudentCard and StudentList components.

**package.json**

Contains project information, dependencies, and npm scripts.

**vite.config.js**

Contains the Vite configuration.

**.gitignore**

Specifies files and folders that should not be uploaded to GitHub.

## 7. Running and Testing the Project

### 7.1. Development Mode

```bash
npm run dev
```

Starts the local development server.

### 7.2. Production Build

```bash
npm run build
```

Creates an optimized production version of the application in the `dist/` directory.

### 7.3. Preview Production Build

```bash
npm run preview
```

Starts a local server to preview the production build.

## 8. GitHub Configuration

Initialize Git if it has not already been initialized:

```bash
git init
git add .
git commit -m "Complete React practice tasks"
git branch -M main
```

Connect the GitHub repository:

```bash
git remote add origin git@github.com:karkar1939/React_Practice-.git
```

Push the project:

```bash
git push -u origin main
```

For future updates:

```bash
git add .
git commit -m "Update React app"
git push
```

## 9. Vercel Deployment

The project is deployed using Vercel.

Deployment configuration:

- Framework Preset: Vite
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `dist`
- Root Directory: `react-practice` if the repository contains the project inside this subfolder; otherwise use `./`.

### Project Links

**GitHub Repository:**

https://github.com/karkar1939/React_Practice-

**Live Website:**

PASTE_YOUR_VERCEL_URL_HERE

Vercel automatically builds and deploys new versions when changes are pushed to the connected GitHub branch.

## 10. Files and Dependencies

The following directories and files should not be committed to GitHub:

- `node_modules/`
- `dist/`
- `.env`
- `.env.local`
- Log files

The `.gitignore` file should contain:

```gitignore
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
```

The `package-lock.json` file should remain in the repository because it records the installed dependency versions.

## 11. Final Project Checklist

### Project Setup
- Node.js installed.
- npm installed.
- React project created using Vite.
- Project dependencies installed.
- Development server configured.

### Hello React
- Introduction to React heading.
- Description of React.
- Dynamic current year in the footer.

### JSX and Components
- Title component.
- Subtitle component.
- Paragraph component.
- HighlightBox component.
- StudentCard component.
- At least three student cards.
- Props implementation.
- Array of student objects.
- `.map()` implementation.
- Unique keys.

### State and Interactivity
- Counter component.
- Increment button.
- Decrement button.
- CourseInfo component.
- Show Details functionality.
- Hide Details functionality.
- LivePreview component.
- Controlled input.
- Real-time text preview.

### E|C Student List
- StudentList component.
- StudentFilter component.
- Student data array.
- All filter.
- Active Only filter.
- Activity status.
- Dynamic list rendering.
- State-based filtering.

### Testing and Deployment
- Dependencies installed successfully.
- Development server runs successfully.
- Production build completes successfully.
- Production preview works.
- GitHub repository created.
- Project pushed to GitHub.
- Vercel deployment completed.
- Live website accessible.
- README contains project links.

---

**Project:** E|C React Practice — Tasks 5.1–5.6 
**Institution:** Engineering College 
**Author:** Radomir Konovalov

This project was created for educational purposes to practice React development, component architecture, JavaScript, and web application deployment.
