// src/data/suggestions.ts

export const IntroMessages = {
  en: {
    title: "Need Movie Recommendations?",
    button: "Start Chatting",
    body: `
      <p>🎬 <strong>How it works</strong></p>
      <p>Chat with MoviesYouDidntWatch for personalized film suggestions.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Discover underrated gems</li>
        <li>Find movies by genre or mood</li>
      </ul>
      <p class="mt-2"><em>Examples:</em><br>
      “Recommend a sci-fi thriller.”<br>
      “What are some classic French comedies?”</p>
    `.trim()
  },

  fr: {
    title: "Besoin de suggestions de films ?",
    button: "Commencer la discussion",
    body: `
      <p>🎬 <strong>Comment ça marche</strong></p>
      <p>Discutez avec MoviesYouDidntWatch pour obtenir des idées de films à voir.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Découvrez des perles méconnues</li>
        <li>Trouvez des films par genre ou ambiance</li>
      </ul>
      <p class="mt-2"><em>Exemples :</em><br>
      « Un bon thriller de science-fiction ? »<br>
      « Des comédies françaises incontournables ? »</p>
    `.trim()
  },

}



export const WelcomeMessage = {
  en: `
Hey there! 👋
Welcome to MoviesYouDidntWatch.
Ask me for movie recommendations —
I'll do my best to help. 🎬
`.trim(),

  fr: `
Bonjour ! 👋
Bienvenue sur MoviesYouDidntWatch.
Demandez-moi des recommandations de films —
je ferai de mon mieux pour vous aider. 🎬
`.trim()

}



export const suggestions = [
  {
    key: "trending",
    label: {
      en: "Trending",
      fr: "Tendances",
    },
    userText: {
      en: "What movies are trending?",
      fr: "Quels films sont populaires en ce moment ?",
    },
    botReply: {
      en: `Here are a few popular titles this week. Which genres interest you?`.trim(),
      fr: `Voici quelques titres populaires cette semaine. Quels genres vous intéressent ?`.trim(),
    },
  },
  {
    key: "genre",
    label: {
      en: "Genre Picks",
      fr: "Films par genre",
    },
    userText: {
      en: "Suggest some action movies",
      fr: "Suggère-moi des films d'action",
    },
    botReply: {
      en: `Here are a few action movies you might enjoy.`.trim(),
      fr: `Voici quelques films d'action que vous pourriez aimer.`.trim(),
    },
  },
  {
    key: "help",
    label: {
      en: "Help",
      fr: "Aide",
    },
    userText: {
      en: "Help me use this app",
      fr: "Aide-moi à utiliser cette application",
    },
    botReply: {
      en: `Select a suggestion or ask for movies by genre, actor or year.`.trim(),
      fr: `Choisissez une suggestion ou demandez des films par genre, acteur ou année.`.trim(),
    },
  },
]
export const NetworkErrorMessage = {
  en: "\u274c Sorry, I couldn't reach the server.",
  fr: "\u274c D\u00e9sol\u00e9, je n'ai pas pu contacter le serveur.",
}

