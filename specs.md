# 🎬 Frontend Specifications – `MoviesYouDidntWatch.com`

## 🛠️ Project Summary
A web app that lets users **chat conversationally with an AI agent** to get **personalized movie recommendations** based on filters like genre, rating, and popularity, while tracking movies they've already seen.

---

## 🌐 Pages Overview

### 1. `Hero Page (Landing Page)`
**URL:** `/`  
**Purpose:** First contact with the user. Select language + login/register entry point.

#### Features:
- Title & tagline:  
  _“Welcome to MoviesYouDidntWatch.com – Discover films you've missed, not the ones you've already seen!”_
- Language selector: `🇬🇧 English` / `🇫🇷 French`
- Buttons:
  - `Login` → redirects to `/login`
  - `Create Account` → redirects to `/register`

---

### 2. `Login Page`
**URL:** `/login`  
**Purpose:** Auth for existing users

#### Features:
- Email input
- Password input
- Submit button
- Link: `Create an account` → `/register`
- Show basic error handling (e.g. invalid credentials)

---

### 3. `Register Page`
**URL:** `/register`  
**Purpose:** Sign-up for new users

#### Fields:
- First name
- Last name
- Email
- Password
- Submit button
- Link: `Already have an account?` → `/login`

---

### 4. `Chat Page (Main App)`
**URL:** `/app`  
**Protected Route** – Requires login

#### Layout:
- **Left:** Chat interface
- **Right:** Scrollable movie recommendation area

#### Chat Features:
- Chat history
- Input field to send message
- Send button
- Optional: preset quick buttons (e.g. `Thriller`, `Romance`, `Oscar Winner`)

#### Movie Cards:
Each card returned by the bot includes:
- Movie title
- Poster image
- Rating / Votes / Year
- trailer Link
- `I've seen this` button:
  - Removes movie from future suggestions
  - Updates the backend "seen" list

---

## 📱 Responsiveness
- Laptop Only
- Clean UI using TailwindCSS, Shadcn UI, or Material UI
- Adjust chat and cards layout for smaller screens

---

## 🔄 State Management
- Auth token/session (e.g. localStorage or cookies)
- Language preference
- User chat history
- Seen movies list (fetched on login, updated live)

---

## 📦 External Integration (Frontend expectations)
- Communicates with backend (e.g. FastAPI)
  - Sends chat messages
  - Receives response: list of movie objects
  - Sends "seen" updates with movie IDs

---

## 🧪 Error Handling
- Show friendly message if backend fails
- Show loading spinner when waiting for a bot reply
- Optional: fallback messages if no movie matches

---

## ✅ Core Functional Requirements

| Feature                | Required? | Notes                                              |
|------------------------|-----------|----------------------------------------------------|
| Language selection     | ✅         | Store in localStorage or pass in headers           |
| Login / Register       | ✅         | Basic auth flow, no need for OAuth in v1           |
| Chat with bot          | ✅         | Main interaction flow                              |
| Movie cards            | ✅         | Show bot replies as visual movie suggestions       |
| "Seen" button          | ✅         | Click to remove from future suggestions            |
| Session persistence    | ✅         | Keep user logged in and language remembered        |

---

## 🧹 Optional for v1.0 (Nice to have)
- Dark mode toggle
- Save to Watchlist button
- Show genres or mood tags
- Emoji reactions to recommendations

---

## 🔐 Notes
- This spec only covers the **frontend logic and flow**.
- Backend is expected to expose endpoints like:
  - `POST /chat` (input user message, returns movie list)
  - `POST /seen` (add seen movie ID)
  - `GET /seen` (fetch current seen list)

