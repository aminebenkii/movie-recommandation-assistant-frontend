
# 🧠 Dev Notes — Legal Assistant Frontend

## ✈️ Project Overview

This is a **React + TypeScript** single-page chatbot interface for *Legal Assistant*, a conversational assistant that helps users find the best flight deals.

It supports:
- 💬 A simple chatbot UI (one message bubble at initialization)
- 🌍 Multilingual interface (English 🇬🇧 / French 🇫🇷)
- 💡 Quick suggestion buttons (localized + bilingual output)
- 🎯 Currency selector (EUR, USD, MAD, GBP)

---

## 📁 Folder Structure

src/
├── components/
│   ├── ChatHeader.tsx         # Logo + title + Language & Currency controls
│   ├── ChatFooter.tsx         # Footer with copyright
│   ├── ChatMessages.tsx       # Chat bubble renderer (currently static)
│   ├── ChatInput.tsx          # Input box (currently UI only, disabled)
│   ├── ChatSuggestionBar.tsx  # Predefined suggestion buttons (multilingual)
│   ├── CurrencyDropdown.tsx   # Currency selector (Shadcn select)
│   └── LanguageToggle.tsx     # Language switcher (EN/FR)
│
├── context/
│   └── LanguageContext.tsx    # Global language context using React Context API
│
├── pages/
│   └── ChatbotPage.tsx        # Main layout that assembles the components
│
├── App.tsx                    # Renders the ChatbotPage
└── main.tsx                   # Entrypoint; wraps App with <LangProvider>

---

## 🏛 Architecture / Logic Flow

### 1. `LangProvider`
Global context provider in `LanguageContext.tsx`. Exposes:
{ lang, setLang }
Accessible via `useLanguage()` hook anywhere in the app.

---

### 2. `ChatbotPage.tsx`
The main chat screen:
- `ChatHeader`: Top section with logo, title, currency dropdown & language toggle
- `ChatMessages`: Currently displays a **static welcome message** (localized)
- `ChatSuggestionBar`: Three bilingual buttons (one way, round trip, help). Their output is printed via `console.log()` for now
- `ChatInput`: Disabled text input & send button (UI only)
- `ChatFooter`: Simple bottom footer

---

## 🌍 Multilingual Support

Language is controlled globally using context.
All localized strings are written inline using:
lang === "en" ? "English text" : "French text"
Applied in: `ChatHeader`, `ChatMessages`, `ChatSuggestionBar`, `ChatInput`

---

## 🚧 Work in Progress

| Feature               | Status     | Notes                                       |
|----------------------|------------|---------------------------------------------|
| Chat message state   | ✅ Done    | Chat history stored in state  |
| Input submission     | ❌ Missing | No message-sending logic yet                |
| Suggestions to Chat  | ⚠️ Partial | Buttons call `console.log()` only           |
| Backend API hookup   | ✅ Done    | Connected to backend API       |

---

## ✅ Tech Stack

- React + TypeScript
- Tailwind CSS
- Shadcn UI components (`Button`, `Input`, `Select`)
- `lucide-react` icons
- Context API for Language control

---

## 📌 Next Steps

1. Wire up `ChatInput.tsx` and `ChatSuggestionBar.tsx` to send messages
2. Implement auto-scroll on new messages
3. Show a typing indicator for the assistant
4. Add unit tests for components and API calls
5. Polish the UI with avatars and better mobile layout

---

Built with ❤️ by Amine Benkirane
