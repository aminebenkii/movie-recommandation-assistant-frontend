// src/data/suggestions.ts

export const IntroMessages = {
  en: {
    title: "Need Legal Help?",
    button: "Start Chatting",
    body: `
      <p>⚖️ <strong>How it works</strong></p>
      <p>Chat with your AI legal assistant for quick answers and links to helpful resources.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Understand basic legal terms and processes</li>
        <li>Get pointers on contracts, employment or tenant rights</li>
      </ul>
      <p class="mt-2">Information provided is general and not legal advice.</p>
      <p class="mt-2"><em>Examples:</em><br>
      “How do I cancel a contract?”<br>
      “What are my rights as a tenant in Québec?”</p>
    `.trim()
  },

  fr: {
    title: "Besoin d'aide juridique ?",
    button: "Commencer la discussion",
    body: `
      <p>⚖️ <strong>Comment ça marche</strong></p>
      <p>Discutez avec votre assistant juridique virtuel pour obtenir des réponses rapides et des liens vers des ressources officielles.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Comprenez les notions et procédures juridiques de base</li>
        <li>Trouvez des informations sur les contrats, l'emploi ou les droits des locataires</li>
      </ul>
      <p class="mt-2">Ces informations sont générales et ne constituent pas un conseil juridique.</p>
      <p class="mt-2"><em>Exemples :</em><br>
      « Comment résilier un contrat ? »<br>
    « Quels sont mes droits de locataire au Québec ? »</p>
    `.trim()
  },

  ar: {
    title: "هل تحتاج إلى مساعدة قانونية؟",
    button: "ابدأ الدردشة",
    body: `
      <p>⚖️ <strong>كيف يعمل</strong></p>
      <p>تحدث مع مساعدك القانوني الذكي للحصول على إجابات سريعة وروابط لمصادر مفيدة.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>فهم المصطلحات والإجراءات القانونية الأساسية</li>
        <li>الحصول على توجيهات حول العقود أو العمل أو حقوق المستأجرين</li>
      </ul>
      <p class="mt-2">المعلومات المقدمة عامة وليست نصيحة قانونية.</p>
      <p class="mt-2"><em>أمثلة:</em><br>
      "كيف أفسخ عقداً؟"<br>
      "ما هي حقوقي كمستأجر؟"</p>
    `.trim()
  }
}



export const WelcomeMessage = {
  en: `
Hey there! 👋
Welcome to your Legal Assistant.
Ask me about everyday legal issues —
I'll do my best to help. ⚖️
`.trim(),

  fr: `
Bonjour ! 👋
Bienvenue sur votre assistant juridique.
Posez-moi vos questions juridiques courantes —
je ferai de mon mieux pour vous aider. ⚖️
`.trim()
,
  ar: `
مرحباً! 👋
أهلاً بك في مساعدك القانوني.
اطرح أسئلتك القانونية اليومية —
سأبذل جهدي لمساعدتك. ⚖️
`.trim()
}



export const suggestions = [
  {
    key: "comedies",
    label: {
      en: "Top Comedies",
      fr: "Meilleures comédies",
      ar: "أفضل الكوميديات",
    },
    userText: {
      en: "Recommend some top comedies",
      fr: "Recommande-moi des comédies incontournables",
      ar: "أوصِني ببعض الكوميديات الرائعة",
    },
    botReply: {
      en: `
Here are a few crowd-pleasing comedies:

- The Grand Budapest Hotel
- Superbad
- Groundhog Day

Which one interests you?
      `.trim(),

      fr: `
Voici quelques comédies populaires :

- The Grand Budapest Hotel
- Superbad
- Un jour sans fin

Laquelle vous tente ?
      `.trim(),

      ar: `
إليك بعض الكوميديات الممتعة:

- The Grand Budapest Hotel
- Superbad
- Groundhog Day

أي واحد يهمك؟
      `.trim(),
    },
  },
  {
    key: "thrillers",
    label: {
      en: "Best Thrillers",
      fr: "Meilleurs thrillers",
      ar: "أفضل أفلام التشويق",
    },
    userText: {
      en: "What are the best thrillers?",
      fr: "Quels sont les meilleurs thrillers ?",
      ar: "ما هي أفضل أفلام التشويق؟",
    },
    botReply: {
      en: `
Fans love these thrillers:

- Se7en
- Inception
- Gone Girl

Ready for a suspenseful night?
      `.trim(),

      fr: `
Les amateurs adorent ces thrillers :

- Seven
- Inception
- Gone Girl

Prêt(e) pour une soirée à suspense ?
      `.trim(),

      ar: `
يعشق الكثيرون أفلام التشويق التالية:

- Se7en
- Inception
- Gone Girl

هل أنت مستعد لليلة مليئة بالإثارة؟
      `.trim(),
    },
  },
  {
    key: "awards",
    label: {
      en: "Award Winners",
      fr: "Films primés",
      ar: "أفلام حائزة على جوائز",
    },
    userText: {
      en: "Show me award-winning movies",
      fr: "Montre-moi des films primés",
      ar: "أرني أفلاماً حائزة على جوائز",
    },
    botReply: {
      en: `
Here are Oscar-winning films from recent years:

- Parasite
- Nomadland
- Everything Everywhere All at Once

Interested in any of these?
      `,

      fr: `
Voici quelques films primés aux Oscars ces dernières années :

- Parasite
- Nomadland
- Everything Everywhere All at Once

L'un de ceux-ci vous attire ?
      `,

      ar: `
إليك أفلاماً فازت بالأوسكار في السنوات الأخيرة:

- Parasite
- Nomadland
- Everything Everywhere All at Once

هل يثير أي منها اهتمامك؟
      `,
    },
  },
]
export const NetworkErrorMessage = {
  en: "\u274c Sorry, I couldn't reach the server.",
  fr: "\u274c D\u00e9sol\u00e9, je n'ai pas pu contacter le serveur.",
  ar: "\u274c عذراً، تعذر الوصول إلى الخادم."
}

