// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'bk' | 'fb' | 'm' | 'mw' | 'esa' | 'gn' | 'gc' | 'gm' | 'mail' | 'cal' | 'gtm' | 'ts' | 'gh' | 'st' | 'l' | 'me' | 'ig' | 'tw' | 'tr' | 'vs' | 'todo' |
                           'c' | 'wf' | '$' | 'cal' | 'uvacovid' | 'hs' | 'p' | 'n' | 'h' | 'pv' | 'gd' | 'wp' | 'wsj' | 'cnn' | 'wiki' | 'g' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[CommandNames] : CommandType} = {
    bk: {
        name: "Backlog",
        url: "https://sms-jinzai.backlog.jp/",
        complement: "view/JINZAI-",
    },
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        complement: "",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    m: {
        name: "Messenger Desktop App",
        url: "messenger://",
        complement: "",
    },
    mw: {
        name: "Messenger Web",
        url: "https://www.messenger.com/",
        complement: "",
    },
    esa: {
        name: "Esa Eng",
        url: "https://sms-engineer.esa.io/",
        complement: "",
        searchurl: "https://sms-engineer.esa.io/posts?q="
    },
    gn: {
        name: "GitHub Nurse Jinzai Bank",
        url: "https://github.com/bm-sms/jinzaibank-nurse-web/",
        complement: "",
        searchurl: "https://github.com/search?type=code&q=repo%3Abm-sms%2Fjinzaibank-nurse-web%20"
    },
    gc: {
        name: "GitHub Nurse Jinzai Bank Column",
        url: "https://github.com/bm-sms/jinzaibank-nurse-column",
        complement: "",
        searchurl: "https://github.com/search?type=code&q=repo%3Abm-sms%2Fjinzaibank-nurse-column%20"
    },
    gm: {
        name: "GitHub Jinzaibank Manager",
        url: "https://github.com/bm-sms/jinzaibank-manager",
        complement: "",
        searchurl: "https://github.com/search?type=code&q=repo%3Abm-sms%2Fjinzaibank-manager%20"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        complement: "",
        searchurl: "https://drive.google.com/drive/u/"
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
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        complement: "",
        searchurl: "https://www.github.com/search?q="
    },
    st: {
        name: "Sentry",
        url: "https://sms.sentry.io/issues/?project=4505904603660288&statsPeriod=14d",
        complement: "",
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
        complement: "",
    },
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/",
        complement: "",
    },
    tw: {
        name: "Twitter",
        url: "https://twitter.com/",
        searchurl: "https://twitter.com/search?q=",
        complement: "",
    },
    me: {
        name: "Rithik.me - Personal Website",
        url: "https://rithik.me/me",
        complement: "",
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q=",
        complement: "",
    },
    wp: {
        name: "Washington Post",
        url: "https://www.washingtonpost.com/regional/",
        complement: "",
    },
    wsj: {
        name: "Wall Street Journal",
        url: "https://www.wsj.com/",
        complement: "",
    },
    cnn: {
        name: "CNN",
        url: "https://www.cnn.com/",
        complement: "",
    },
    tr: {
        name: "HooHacks Trello Board",
        url: "https://trello.com/b/GjKhtVPK/hoohacks",
        complement: "",
    },
    n: {
        name: "Netflix",
        url: "https://netflix.com/",
        searchurl: "https://www.netflix.com/search?q=",
        complement: "",
    },
    h: {
        name: "Hulu",
        url: "https://hulu.com/",
        complement: "",
    },
    pv: {
        name: "Amazon Prime Video",
        url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
        searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k=",
        complement: "",
    },
    p: {
        name: "Piazza",
        url: "https://piazza.com/class",
        complement: "",
    },
    vs: {
        name: "VS Code",
        url: "vscode://",
        complement: "",
    },
    wf: {
        name: "Webflow",
        url: "https://webflow.com/design/hoohacks",
        complement: "",
    },
    hs: {
        name: "Hubspot",
        url: "https://app.hubspot.com/",
        complement: "",
    },
    $: {
        name: "Robinhood",
        url: "https://robinhood.com/", 
        searchurl: "https://robinhood.com/stocks/",
        complement: "",
    },
    c: {
        name: "Robinhood Crypto",
        url: "https://robinhood.com/", 
        searchurl: "https://robinhood.com/crypto/",
        complement: "",
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r",
        complement: "",
    },
    uvacovid: {
        name: "UVA COVID-19 Tracker",
        url: "https://returntogrounds.virginia.edu/covid-tracker",
        complement: "",
    },
    wiki: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/",
        complement: "",
    },
    todo: {
        name: "Microsoft To Do",
        url: "https://to-do.live.com",
        complement: "",
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q=",
        complement: "",
    }
};
