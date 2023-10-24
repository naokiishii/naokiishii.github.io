// @flow strict

import type { CommandType } from "./commands.js";
import type { ClassCommands, JoinOrDiscussType, ClassType } from "./classes.js";

import { COMMANDS } from "./commands.js";
import { CLASSES } from "./classes.js";
import { viewHelpPage } from "./help.js";

const redirect: (string) => Promise<void> = async function (url: string) {
  await window.location.replace(url);
};

const bunnylol: (string) => Promise<boolean> = async function (
  command: string,
  arr: Array<string>
) {
  console.log(arr);
  if (arr.length > 0) {
    const prefix: string = arr[0].endsWith(".")
      ? arr[0].substring(0, arr[0].length - 1).toLowerCase()
      : arr[0].toLowerCase();
    if (prefix in CLASSES) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const classData: ClassType = CLASSES[prefix];
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
      const command: CommandType = COMMANDS[prefix];
      const protocol: string = new URL(command.url).protocol;
      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
      }
      if (command.searchurl && arr.length !== 1) {
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        arr.shift();
        await redirect(
          `${command.searchurl}${encodeURIComponent(
            arr.join(' ')
          )}`
        );
        return true;
      } else if (arr.length > 1) {
        await redirect(
          `${command.url}${command.complement}${encodeURIComponent(
            arr[1]
          )}`
        );
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

const command: string = searchParams ? "search" : (commandParams ? "command" : "help");
let params = [];

switch (command) {
  case "help" || "":
    viewHelpPage();
    break;
  case "command":
    params = commandParams.split(',');
    bunnylol("command", params)
      .then((done: boolean) => {
        if (!done && COMMANDS.DEFAULT.searchurl) {
          redirect(
            `${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(params)}`
          );
        }
      })
      .catch((reject: string) => {
        console.log(reject);
      });
    break;
  default:
    params = searchParams.split(/[ +]/g);
    bunnylol("search", params)
      .then((done: boolean) => {
        if (!done && COMMANDS.DEFAULT.searchurl) {
          redirect(
            `${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(params)}`
          );
        }
      })
      .catch((reject: string) => {
        console.log(reject);
      });
    break;
}
