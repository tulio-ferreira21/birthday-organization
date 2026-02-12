# Birthday Organization

Birthday Organization is a Single Page Application (SPA) developed with React (JavaScript) to help users plan and manage birthday events. The platform allows full control over guest lists, item lists, and total event costs, including a visual dashboard with charts for financial analysis.

---

## About the Project

Birthday Organization was built to simplify birthday planning by organizing essential elements such as guests, food, decorations, and disposable items.  

The application calculates costs automatically and provides a dashboard to visualize spending distribution across categories.

All data is stored using the browser's `localStorage`, allowing persistence without a back-end.

---

## Features

- Guest list management  
- Food list management  
- Decoration list management  
- Disposable items list management  
- Add, edit, and remove items  
- Automatic calculation of item total (price × quantity)  
- Total cost per category  
- Overall total event cost  
- Dashboard with cost comparison charts  
- Confirmation dialog before deleting items  
- Modular and organized component structure  

---

## Financial Control System

Each item includes:

- Name  
- Quantity  
- Unit price  

The system automatically calculates:

- Total per item  
- Total per category  
- Overall total event budget  

This allows users to maintain full financial control of the event.

---

## Dashboard

The application includes a graphical dashboard that visually represents:

- Total cost of Food  
- Total cost of Decorations  
- Total cost of Disposables  
- Overall comparison between categories  

This helps users quickly identify which category consumes more of the budget.

---

## Technologies Used

- React  
- React Router DOM  
- JavaScript (ES6+)  
- CSS Modules  
- Bootstrap  
- localStorage  

---

## Project Structure

```txt
  src/
┣ Components/
┃ ┣ Home/
┃ ┣ Pages/
┃ ┣ Routes/
┃ ┗ UI/
┣ Images/
┣ css/
┣ App.jsx
┗ index.jsx
```

The project is organized into reusable components, pages, routing structure, and UI utilities to improve scalability and maintainability.

---

## How to Run the Project

1. Clone the repository:
```bash
  git clone https://github.com/your-username/birthday-organization.git
```

2. Navigate into project folder and install dependencies
```bash
  # navigate into project folder
  cd birthday-organization
  # install dependencies
  npm i
  # or npm install
```
3. Start the development server
```bash
  npm start
```


---

## Learning Objectives

This project was developed to practice:

- React component architecture  
- State management  
- Data persistence using localStorage  
- Dynamic calculations  
- Modular code organization  
- SPA routing  
- Data visualization with charts  

---

## Author

Túlio Diego  
Front-end Developer  
LinkedIn: https://linkedin.com/in/tuliodiego  
GitHub: https://github.com/tulio-ferreira21
