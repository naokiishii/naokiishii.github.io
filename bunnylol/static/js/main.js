'use strict';const COMMANDS = {
  bk: {
    name: "Backlog",
    url: "https://sms-jinzai.backlog.jp/",
    complement: "view/JINZAI-"
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
    complement: ""
  },
  mw: {
    name: "Messenger Web",
    url: "https://www.messenger.com/",
    complement: ""
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
    complement: ""
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/u/0/r/week",
    complement: ""
  },
  gtm: {
    name: "Google Tag Manager",
    url: "https://tagmanager.google.com/#/home",
    complement: ""
  },
  ts: {
    name: "Team Sprint",
    url: "https://smsc001.my.salesforce.com/home/home.jsp",
    complement: ""
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
    complement: ""
  },
  l: {
    name: "Linkedin",
    url: "https://linkedin.com/",
    complement: ""
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://instagram.com/",
    complement: ""
  },
  tw: {
    name: "Twitter",
    url: "https://twitter.com/",
    searchurl: "https://twitter.com/search?q=",
    complement: ""
  },
  me: {
    name: "Rithik.me - Personal Website",
    url: "https://rithik.me/me",
    complement: ""
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    complement: ""
  },
  wp: {
    name: "Washington Post",
    url: "https://www.washingtonpost.com/regional/",
    complement: ""
  },
  wsj: {
    name: "Wall Street Journal",
    url: "https://www.wsj.com/",
    complement: ""
  },
  cnn: {
    name: "CNN",
    url: "https://www.cnn.com/",
    complement: ""
  },
  tr: {
    name: "HooHacks Trello Board",
    url: "https://trello.com/b/GjKhtVPK/hoohacks",
    complement: ""
  },
  n: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q=",
    complement: ""
  },
  h: {
    name: "Hulu",
    url: "https://hulu.com/",
    complement: ""
  },
  pv: {
    name: "Amazon Prime Video",
    url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
    searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k=",
    complement: ""
  },
  p: {
    name: "Piazza",
    url: "https://piazza.com/class",
    complement: ""
  },
  vs: {
    name: "VS Code",
    url: "vscode://",
    complement: ""
  },
  wf: {
    name: "Webflow",
    url: "https://webflow.com/design/hoohacks",
    complement: ""
  },
  hs: {
    name: "Hubspot",
    url: "https://app.hubspot.com/",
    complement: ""
  },
  $: {
    name: "Robinhood",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/stocks/",
    complement: ""
  },
  c: {
    name: "Robinhood Crypto",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/crypto/",
    complement: ""
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r",
    complement: ""
  },
  uvacovid: {
    name: "UVA COVID-19 Tracker",
    url: "https://returntogrounds.virginia.edu/covid-tracker",
    complement: ""
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
    complement: ""
  },
  todo: {
    name: "Microsoft To Do",
    url: "https://to-do.live.com",
    complement: ""
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    complement: ""
  }
};// j = join; d = discussion; c = UVA Collab; default to url; s = special
const CLASSES = {
  f1: {
    name: "CS 4501: F1/10 Autonomous Racing: Perception, Planning, and Control for Autonomous Driving",
    url: "https://linklab-uva.github.io/autonomousracing/",
    collaburl: "https://collab.its.virginia.edu/portal/site/90579f89-3cbf-4f83-a4d7-902848f7703d",
    discussionurl: "https://piazza.com/class/kko5x3rocvl3ky"
  },
  pl: {
    name: "CS 4640: Programming Languages for Web Applications",
    url: "https://www.cs.virginia.edu/~up3f/cs4640/schedule.html",
    collaburl: "https://collab.its.virginia.edu/portal/site/8fff0a03-d2d8-45c8-bda6-760bf8d7e2e4/",
    discussionurl: "https://piazza.com/class/kkestnq1z5u3kl",
    zoomurl: "https://virginia.zoom.us/j/95783077722?pwd=U2lLTkN3Y05WWGhJQ051Z3BUWmxvUT09"
  },
  cv: {
    name: "CS 4501: Introduction to Computer Vision",
    url: "https://www.vicenteordonez.com/vision/",
    collaburl: "https://collab.its.virginia.edu/portal/site/a348b7f2-473b-46d4-b348-f189fc4889e3",
    zoomurl: "https://virginia.zoom.us/j/99413743466?pwd=VHpmQW9SR1A5bmpseVZMN2tPZVZOdz09"
  },
  ear: {
    name: "CS 3501: Embedded Computing & Robotics I",
    url: "https://collab.its.virginia.edu/portal/site/cdd921f5-3ec5-4de7-9bdc-da5f5a1e92c8",
    discussionurl: "discord://",
    specialurl: "https://learn.zybooks.com/zybook/VIRGINIACSECE3501Spring2021?selectedPanel=assignments-panel"
  },
  sts: {
    name: "STS 4600: The Engineer, Ethics, and Professional Responsibility",
    url: "https://collab.its.virginia.edu/portal/site/d360b679-581f-496d-8782-7053d86aefca",
    zoomurl: "https://virginia.zoom.us/j/93721024007?pwd=T1NJKzdrZG03L2pJN0dEQkcwUC91QT09"
  },
  apma: {
    name: "APMA 2501: Mathematics of Information",
    url: "http://www.ece.virginia.edu/~ffh8x/moi/",
    collaburl: "https://collab.its.virginia.edu/portal/site/0778b7b4-8cd8-440c-9fcb-bd8e74d5b9f3",
    discussionurl: "https://piazza.com/class/kknbo8nztqo6vg"
  }
};const viewHelpPage = function () {
  console.trace();
  const data = Object.keys(COMMANDS).map(command => {
    const cmdData = COMMANDS[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      command: command
    };
  });
  const columns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }]; // $FlowFixMe - jQuery import

  $('#help-table').DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false
  });
  const classesData = Object.keys(CLASSES).map(command => {
    const cmdData = CLASSES[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      // $FlowFixMe - this is actually correct.
      command
    };
  });
  const classColumns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }]; // $FlowFixMe - jQuery import

  $('#classes-table').DataTable({
    data: classesData,
    columns: classColumns,
    order: [[1, "asc"]],
    paging: false
  });
};const redirect = async function (url) {
  await window.location.replace(url);
};

const bunnylol = async function (command, arr) {
  console.log(arr);

  if (arr.length > 0) {
    const prefix = arr[0].endsWith(".") ? arr[0].substring(0, arr[0].length - 1).toLowerCase() : arr[0].toLowerCase();

    if (prefix in CLASSES) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const classData = CLASSES[prefix];

      if (arr.length > 1) {
        if (arr[1].toLowerCase() === "j" && classData.zoomurl) {
          await redirect(`${classData.zoomurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "d" && classData.discussionurl) {
          await redirect(`${classData.discussionurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "c" && classData.collaburl) {
          await redirect(`${classData.collaburl}`);
          return true;
        } else if (arr[1].toLowerCase() === "s" && classData.specialurl) {
          await redirect(`${classData.specialurl}`);
          return true;
        }
      }

      await redirect(`${classData.url}`);
      return true;
    }

    if (prefix in COMMANDS) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command = COMMANDS[prefix];
      const protocol = new URL(command.url).protocol;

      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
      }

      if (command.searchurl && arr.length !== 1) {
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        arr.shift();
        await redirect(`${command.searchurl}${encodeURIComponent(arr.join(' '))}`);
        return true;
      } else if (arr.length > 1) {
        await redirect(`${command.url}${command.complement}${encodeURIComponent(arr[1])}`);
        return true;
      } else {
        await redirect(command.url);
        return true;
      }
    }
  }

  return false;
};

let searchParams = new URL(window.location.href).searchParams.get("search");

if (searchParams !== null && searchParams !== '') {
  searchParams = searchParams.replace(' ', ',');
}

let commandParams = new URL(window.location.href).searchParams.get("command");

if (commandParams !== null && searchParams !== '') {
  commandParams = commandParams.replace(' ', ',');
}

const command = searchParams ? "search" : commandParams ? "command" : "help";
let params = [];

switch (command) {
  case "help" :
    viewHelpPage();
    break;

  case "command":
    params = commandParams.split(',');
    bunnylol("command", params).then(done => {
      if (!done && COMMANDS.DEFAULT.searchurl) {
        redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(params)}`);
      }
    }).catch(reject => {
      console.log(reject);
    });
    break;

  default:
    params = searchParams.split(/[ +]/g);
    bunnylol("search", params).then(done => {
      if (!done && COMMANDS.DEFAULT.searchurl) {
        redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(params)}`);
      }
    }).catch(reject => {
      console.log(reject);
    });
    break;
}