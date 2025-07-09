# 🎨 DevNotes.md – Frontend (MoviesYouDidntWatch.com)

The frontend is a **React + TailwindCSS** single-page application built to interface cleanly with the FastAPI backend. It provides a conversational UI for discovering movies and integrates with JWT-based auth, OpenAI-powered chat, and movie recommendation APIs.

---

## 📐 Folder Structure

```
frontend/
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ChatBox.jsx
│   │   ├── MovieCard.jsx
│   │   ├── AuthForm.jsx
│   │   └── LanguageSelector.jsx
│   ├── pages/                  # Route-level pages
│   │   ├── Hero.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ChatPage.jsx
│   ├── context/
│   │   └── AuthContext.js      # Auth state + JWT
│   ├── hooks/                  # (Optional) Custom hooks
│   ├── utils/                  # (Optional) Utility functions
│   ├── App.jsx                 # Routes & layout
│   └── main.jsx                # Entry point (ReactDOM)
├── tailwind.config.js
├── index.html
└── package.json
```

---

## 🧠 Tech Stack

| Tool           | Purpose                              |
|----------------|--------------------------------------|
| React          | UI framework                         |
| TailwindCSS    | Styling utility classes              |
| React Router   | Page routing                         |
| Axios / Fetch  | HTTP requests                        |
| i18next        | (Planned) Language internationalization |
| LocalStorage   | JWT storage                          |
| Vite or CRA    | (Depending on scaffold) Build tool   |

---

## 🔁 Frontend Flow

### 1. **User hits landing page**
- `Hero.jsx`: Language selector + login/register buttons

### 2. **Auth**
- `Login.jsx` and `Register.jsx`
  - Form uses `POST /auth/login` and `POST /auth/register`
  - On success → store JWT in localStorage → redirect to `/chat`

### 3. **Main App Page: `/chat`**
- `ChatPage.jsx`: Main layout split in two panels
  - **Left: ChatBox**
    - Text input
    - Messages scrollable (basic UX)
    - Submits via `POST /chat`
    - Renders assistant + user messages
  - **Right: MovieGrid**
    - Displays array of `<MovieCard />`
    - Each card shows poster, rating, etc.
    - ✅ Seen button → `POST /seen`
    - ▶️ Trailer button → opens TMDB / YouTube

---

## 🧱 Components Overview

### `ChatBox.jsx`
- Handles user input
- Shows chat history
- Submits messages to `/chat`
- Handles loading state and assistant reply
- Scrolls to bottom on new messages

### `MovieCard.jsx`
- Props: poster, title, rating, trailer URL
- Buttons:
  - ✅ Mark as Seen → call `POST /seen`
  - ▶️ Watch Trailer → opens external link

### `AuthForm.jsx`
- Used by both login and register pages
- Handles form submission
- On success → redirect with stored JWT

### `LanguageSelector.jsx`
- Toggles between English/French
- Updates i18n state (planned)
- Persists selected language to localStorage

---

## 🔐 Auth Flow (JWT)

| Step                     | Action |
|--------------------------|--------|
| User logs in             | `POST /auth/login` returns JWT |
| Store JWT in frontend    | `localStorage.setItem("token", jwt)` |
| Attach to API requests   | Include `Authorization: Bearer ${token}` |
| Protect chat page route  | Use context to block unauthenticated users |

---

## 🔌 API Endpoints Used

| Endpoint        | Method | Usage |
|-----------------|--------|-------|
| `/auth/login`   | POST   | Login |
| `/auth/register`| POST   | Register |
| `/chat`         | POST   | Send chat message, get movie recommendations |
| `/seen`         | POST   | Mark movie as seen |
| `/seen`         | GET    | (Optional) Fetch seen movies to grey them out |
| `/users/me`     | GET    | (Optional) Fetch user info for greeting etc. |

---

## ⚠️ Gotchas / Tips

- **Always wrap API calls** to inject JWT and handle 401 errors (consider `useApi()` hook).
- **ChatBox will be state-heavy** – start with a dumb version and iterate.
- **Use `useEffect` smartly** to scroll to bottom when new messages arrive.
- Don’t over-style. Tailwind is great for fast iteration. Keep things ugly but readable.
- Don’t worry about mobile responsiveness unless you explicitly want to demo that.

---

## 📌 MVP Build Order (Recommended)

1. ✅ Set up routes: `/`, `/login`, `/register`, `/chat`
2. ✅ Implement `AuthForm.jsx` with API integration
3. ✅ Store JWT after login, protect `/chat`
4. ✅ Build a simple `ChatBox` with input + message list
5. ✅ Call `/chat` and render assistant reply
6. ✅ Render mock `<MovieCard />` results
7. ✅ Wire up “Seen” button to `POST /seen`
8. ⏳ Add loading states, error messages, etc.
9. ⏳ Add language toggle (if needed)
10. ⏳ Implement `/seen GET` to grey out already-seen movies

---

## 🧪 Testing (Manual for now)

- [ ] Login/Register works and JWT persists
- [ ] Can hit `/chat` with token
- [ ] Movie cards render properly
- [ ] "Seen" button works and updates backend
- [ ] Reloading `/chat` retains session (or at least JWT)

---

## 🧠 Final Notes

- Backend is the brain. Frontend is just a messenger — keep it dumb, keep it clean.
- If something breaks, check:
  1. Token in headers?
  2. Response shape changed?
  3. Network errors or CORS?
