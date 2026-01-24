# Terezinha’s Birthday Planner

A birthday planning application built with **React** to organize all aspects of **Terezinha’s birthday party**.  
The app helps manage guest lists, food, disposable items, decorations, and calculates total costs based on **price × quantity**.

This project was created for a real event and focuses on clean component structure, state-driven logic, and data persistence using **Supabase**.

---

## Features

- Guest list management  
- Food list with quantity and price  
- Disposable items list  
- Decorations list  
- Automatic total cost calculation  
- Modal-based item creation  
- Dynamic tables for each category  
- Data persistence with Supabase  
- Scoped styling using CSS Modules  

---

## Main Concepts

- Functional components  
- React Hooks (`useState`, `useEffect`)  
- Controlled form inputs  
- Conditional rendering  
- Component separation (avoiding unnecessary re-mounts)  
- Modal with overlay and click-outside-to-close behavior  
- Rendering lists with `map`  
- Table-based layouts  
- Cost calculation logic  
- Supabase integration  
- CSS Modules for isolated styles  

---

## Project Structure (simplified)

```text
src/
├── components/
│   ├── ListConvidados.jsx
│   ├── AddItemModal.jsx
│
├── pages/
│   └── Invites.jsx
│
├── services/
│   └── supabaseClient.js
│
├── css/
│   └── listitems.module.css
