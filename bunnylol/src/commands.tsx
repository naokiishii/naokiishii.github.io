// @flow strict

export type CommandNames =
  | "bk"
  | "fb"
  | "msg"
  | "esa"
  | "gh"
  | "gn"
  | "gc"
  | "gm"
  | "gd"
  | "mail"
  | "cal"
  | "gtm"
  | "ts"
  | "st"
  | "l"
  | "ig"
  | "tw"
  | "g"
  | "tr"
  | "vs"
  | "wiki"
  | "render"
  | "storybook"
  | "nextjs"
  | "react"
  | "netlify"
  | "bullet"
  | "tailwind"
  | "headless"
  | "gqlgen"
  | "openai"
  | "apollo"
  | "vitest"
  | "jet"
  | "tailwindp"
  | "laravel"
  | "readouble"
  | "DEFAULT";

  export type CommandType = {
    name: string;
    url: string;
    searchurl?: string;
    complement?: string;
  };
  
  export type CommandDataTableType = {
  name: string;
  url: string;
  command: string;
};

export type ColumnDataTableType = {
  data: string;
  title: string;
  render?: (data: any, type: any, row: any) => string;
};

export const COMMANDS: {
    [K in CommandNames]: CommandType;
} = {
  bk: {
    name: "Backlog",
    url: "https://sms-jinzai.backlog.jp/",
    complement: "view/JINZAI-",
  },
  fb: {
    name: "Facebook",
    url: "https://www.facebook.com/",
    complement: "",
    searchurl: "https://www.facebook.com/search/top/?q=",
  },
  msg: {
    name: "Messenger Web",
    url: "https://www.messenger.com/",
    complement: "",
  },
  esa: {
    name: "Esa Eng",
    url: "https://sms-engineer.esa.io/",
    complement: "",
    searchurl: "https://sms-engineer.esa.io/posts?q=",
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/naokiishii/",
    complement: "",
    searchurl:
      "https://github.com/search?type=code&q=repo%3Abm-sms%2Fnaokiishii%20",
  },
  gn: {
    name: "GitHub Nurse Jinzai Bank",
    url: "https://github.com/bm-sms/jinzaibank-nurse-web/",
    complement: "",
    searchurl:
      "https://github.com/search?type=code&q=repo%3Abm-sms%2Fjinzaibank-nurse-web%20",
  },
  gc: {
    name: "GitHub Nurse Jinzai Bank Column",
    url: "https://github.com/bm-sms/jinzaibank-nurse-column",
    complement: "",
    searchurl:
      "https://github.com/search?type=code&q=repo%3Abm-sms%2Fjinzaibank-nurse-column%20",
  },
  gm: {
    name: "GitHub Jinzaibank Manager",
    url: "https://github.com/bm-sms/jinzaibank-manager",
    complement: "",
    searchurl:
      "https://github.com/search?type=code&q=repo%3Abm-sms%2Fjinzaibank-manager%20",
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/0",
    complement: "",
    searchurl: "https://drive.google.com/drive/u/",
  },
  mail: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0/#inbox",
    complement: "",
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/u/0/r/week",
    complement: "",
  },
  gtm: {
    name: "Google Tag Manager",
    url: "https://tagmanager.google.com/#/home",
    complement: "",
  },
  ts: {
    name: "Team Sprint",
    url: "https://smsc001.my.salesforce.com/home/home.jsp",
    complement: "",
  },
  st: {
    name: "Sentry",
    url: "https://sms.sentry.io/issues/?project=4505904603660288&statsPeriod=14d",
    complement: "",
  },
  l: {
    name: "Linkedin",
    url: "https://www.linkedin.com/",
    complement: "",
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://www.instagram.com/",
    complement: "",
  },
  tw: {
    name: "Twitter",
    url: "https://twitter.com/",
    searchurl: "https://twitter.com/search?q=",
    complement: "",
  },
  g: {
    name: "Google",
    url: "https:/www./google.com/",
    searchurl: "https://www.google.com/search?q=",
    complement: "",
  },
  tr: {
    name: "HooHacks Trello Board",
    url: "https://trello.com/b/GjKhtVPK/hoohacks",
    complement: "",
  },
  vs: {
    name: "VS Code",
    url: "vscode://",
    complement: "",
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
    complement: "",
  },
  render: {
    name: "Render(Dashboard)",
    url: "https://dashboard.render.com/",
    complement: "",
  },
  storybook: {
    name: "Storybook",
    url: "https://storybook.js.org/",
    complement: "",
  },
  nextjs: {
    name: "Next.JS",
    url: "https://nextjs.org/docs",
    complement: "",
  },
  react: {
    name: "React.dev",
    url: "https://react.dev/",
    complement: "",
  },
  netlify: {
    name: "Netlify",
    url: "https://app.netlify.com/",
    complement: "",
  },
  bullet: {
    name: "Bulletproof React",
    url: "https://github.com/alan2207/bulletproof-react",
    complement: "",
  },
  tailwind: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    complement: "",
  },
  headless: {
    name: "Headless UI",
    url: "https://headlessui.com/",
    complement: "",
  },
  gqlgen: {
    name: "GraphQL Codegen",
    url: "https://the-guild.dev/graphql/codegen",
    complement: "",
  },
  openai: {
    name: "OpenAI dev",
    url: "https://platform.openai.com/",
    complement: "",
  },
  apollo: {
    name: "Apollo Client",
    url: "https://www.apollographql.com/docs/react/",
    complement: "",
  },
  vitest: {
    name: "Vitest",
    url: "https://vitest.dev/",
    complement: "",
  },
  jet: {
    name: "MailJet",
    url: "https://www.mailjet.com/",
    complement: "",
  },
  tailwindp: {
    name: "Awesome Tailwind CSS",
    url: "https://github.com/aniftyco/awesome-tailwindcss",
    complement: "",
  },
  laravel: {
    name: "Laravel.com",
    url: "https://laravel.com/docs/10.x",
    complement: "",
  },
  readouble: {
    name: "readouble.com",
    url: "https://readouble.com/laravel/",
    complement: "",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    complement: "",
  },
};
