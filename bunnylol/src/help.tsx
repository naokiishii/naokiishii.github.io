// @flow strict

import type {
  CommandDataTableType,
  ColumnDataTableType,
  CommandType,
} from "./commands.js";

import { COMMANDS } from "./commands.js";
import { CLASSES } from "./classes.js";
import "jquery";
import "datatables.net";
import DataTable from "datatables.net-dt";

export const viewHelpPage: () => void = function () {
  console.trace();
  const data: Array<CommandDataTableType> = Object.keys(COMMANDS).map(
    (command: string, index: number, array: string[]) => {
      const cmdData: CommandType = COMMANDS[command];
      return {
        name: cmdData.name,
        url: cmdData.url,
        command: command,
      };
    }
  );
  const columns: Array<ColumnDataTableType> = [
    { data: "command", title: "Command" },
    { data: "name", title: "Name" },
    {
      data: "url",
      title: "URL",
      render: function (data, type, row) {
        return (
          '<a href="' +
          row.url +
          '" target="_blank">' +
          row.url +
          "</a>"
        );
      },
    },
  ];

  if (typeof window !== "undefined") {
    new DataTable("#help-table", {
      data: data,
      columns: columns,
      order: [[1, "asc"]],
      paging: false,
    });
  }

  const classesData: Array<CommandDataTableType> = Object.keys(CLASSES).map(
    (command: string, index: number, array: string[]) => {
      const cmdData = CLASSES[command];
      return {
        name: cmdData.name,
        url: cmdData.url,
        // $FlowFixMe - this is actually correct.
        command,
      };
    }
  );

  const classColumns: Array<ColumnDataTableType> = [
    { data: "command", title: "Command" },
    { data: "name", title: "Name" },
    { data: "url", title: "URL" },
  ];

  if (typeof window !== "undefined") {
    new DataTable("#classes-table", {
      data: classesData,
      columns: classColumns,
      order: [[1, "asc"]],
      paging: false,
    });
  }
};
