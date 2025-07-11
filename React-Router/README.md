# React Router Based Multipage Website

This is a multipage React application showcasing routing, layout composition, component design, and data fetching using React Router v6. The project demonstrates a responsive user interface using Tailwind CSS and consumes GitHub API for live data.

---


---

## 🚀 Features

- ⚛️ **React Router DOM**
  Implemented nested routes and dynamic user routing with `useParams`, `createBrowserRouter`, `RouterProvider`.

- 🎨 **Tailwind CSS**
  Fully responsive layout using Tailwind utility classes.

- 🌐 **Live GitHub API Integration**
  GitHub followers and avatar displayed via `axios` + `useLoaderData`.

- 📱 **Responsive Header & Footer**
  Clean, modular design using reusable `Header` and `Footer` components.

---

## 🔗 Routes

| Path           | Component     | Description                         |
|----------------|---------------|-------------------------------------|
| `/`            | `Home`        | Landing page with CTA and images    |
| `/about`       | `About`       | About section with text and image   |
| `/contact`     | `Contact`     | Static contact info and form        |
| `/user/:id`    | `User`        | Dynamic user display via `useParams`|
| `/github`      | `GitHub`      | Fetched GitHub followers info       |

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React, Tailwind CSS |
| Routing    | React Router DOM v6 |
| API Client | Axios               |
| Data Source| GitHub REST API     |

---

## 📸 Screenshots

> 📷 Add screenshots here if needed, like homepage, GitHub page, responsive view, etc.

---

## 🧠 Key Concepts Demonstrated

- Routing with `createBrowserRouter`, `Route`, `Outlet`
- Loader-based data fetching with `useLoaderData`
- Dynamic routes using `useParams`
- Component composition: shared layout with `Header` & `Footer`
- Tailwind for utility-first responsive styling

---

## 📬 Contact

**GitHub:** [@git-authority](https://github.com/git-authority)
**Discord:** [Abhrasnata#5301](https://discord.com/users/Abhrasnata#5301)
**Twitter/X:** [@abhrasnata_btc](https://x.com/abhrasnata_btc)

---

## ⚙️ Installation & Running the App

### 1. Clone the repository

```bash
git clone https://github.com/git-authority/React-Projects.git
cd React-Router
```

### 2. Install Dependencies

```bash
npm install
npm install react-router-dom
npm install axios
```

### 3. Start the development server

```bash
npm run dev
```


The app will run at:

http://localhost:5173 (if using Vite), or

http://localhost:3000 (if using CRA)


---


## 🧠 Key Concepts Demonstrated

- Routing with createBrowserRouter, Route, Outlet

- Loader-based data fetching with useLoaderData

- Dynamic routes using useParams

- Component composition: shared layout with Header & Footer

- Tailwind for utility-first responsive styling