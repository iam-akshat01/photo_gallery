# 📸 Photo Gallery App

A responsive Photo Gallery web application built using **React** and **Vite**.  
The application fetches photos from an external API, displays them in a responsive grid layout, allows users to search photos, and mark photos as favorites.

Favorites are persisted using **localStorage**, so they remain saved even after refreshing the page.

---

## 🚀 Features

- Fetch photos from an external API
- Responsive photo gallery grid
- Search photos by **author name or photo ID**
- Mark and unmark photos as **favorites**
- Favorites persist using **localStorage**
- Loading indicator while fetching photos
- Error handling for failed API requests

---

## 🧠 React Concepts Used

### Custom Hook
`useFetchPhotos`

Handles API calls and manages loading and error states.

### useMemo
Used to optimize photo filtering when searching.

### useReducer
Manages the favorites state using action-based updates.

### useCallback
Prevents unnecessary re-creation of the favorite toggle function.

### useEffect
Persists favorites to **localStorage** whenever the state changes.

---

## 📂 Project Structure

```
photo_gallery
│
├── public
│   └── icon.png
│
├── src
│   ├── assets
│   │   └── searchicon.png
│   │
│   ├── components
│   │   ├── CreateGallery.jsx
│   │   └── PhotoCard.jsx
│   │
│   ├── hooks
│   │   └── useFetchPhotos.js
│   │
│   ├── reducer
│   │   └── favoritesReducer.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone https://github.com/iam-akshat01/photo_gallery.git
cd photo_gallery
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---


## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- LocalStorage

---

## 👨‍💻 Author

**Akshat Mani Tripathi**

GitHub:  
https://github.com/iam-akshat01

Repo Link:
https://github.com/iam-akshat01/photo_gallery
