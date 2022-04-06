import { keyboardKeyType } from "./types";

export const DANISH_KEYBOARD: keyboardKeyType[] = [
  { name: "~" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "0" },
  { name: "-" },
  { name: "+" },
  { name: "Delete", unique: "delete" },

  { name: "Tab", unique: "tab" },
  { name: "Q" },
  { name: "W" },
  { name: "E" },
  { name: "R" },
  { name: "T" },
  { name: "Y" },
  { name: "U" },
  { name: "I" },
  { name: "O" },
  { name: "P" },
  { name: "[" },
  { name: "]" },
  { name: "\\", unique: "backslash" },

  { name: "CapsLock", unique: "capslock" },
  { name: "A" },
  { name: "S" },
  { name: "D" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
  { name: ";" },
  { name: "'" },
  { name: "Return", unique: "return" },

  { name: "Shift", unique: "leftshift" },
  { name: "Z" },
  { name: "X" },
  { name: "C" },
  { name: "V" },
  { name: "B" },
  { name: "N" },
  { name: "M" },
  { name: "," },
  { name: "." },
  { name: "/" },
  { name: "Shift", unique: "rightshift" },

  { name: "Ctrl", unique: "leftctrl" },
  { name: "win", unique: "command" },
  { name: "Alt" },
  { name: "Space", unique: "space" },
  { name: "Alt Gr", unique: "command" },
  { name: "Alt" },
  { name: "Ctrl" },
  { name: "Fn" },
];
