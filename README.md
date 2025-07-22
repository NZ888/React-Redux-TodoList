# React Redux TodoList

A lightweight task manager built with **React**, **Redux Toolkit** and **Vite**. The UI is styled with **Ant Design** components and supports drag and drop using **React DnD**.

## Features

- **Task management** – create, edit and delete tasks with a friendly form.
- **Categories** – organize tasks by category, create and delete categories on the fly.
- **Mark as done** – toggle completion status for any task.
- **Drag and drop** – move tasks between categories by dragging.
- **Search** – filter tasks by title or description in a modal dialog.
- **Masonry layout** – responsive grid of categories powered by `react-masonry-css`.
- **Lazy loaded pages** – routes are loaded on demand with a full page spinner during loading.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

### Scripts

- `npm run dev` – start development server.
- `npm run build` – build for production.
- `npm run preview` – preview production build locally.
- `npm run lint` – run ESLint.

## Project Structure

```
src/
  App.jsx                # Application entry wrapped with Redux store and DnD provider
  App layout/            # Main layout and routing
  components/            # Reusable UI components (header, menu, forms, etc.)
  pages/                 # Application pages (About, Tasks, Create Task)
  Redux/                 # Slices and store configuration
  hooks/                 # Custom hooks
```

## License

This project is licensed under the MIT License.