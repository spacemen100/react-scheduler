import { en } from "@/locales/en";
import { fr } from "@/locales/fr";
import { LocaleType } from "./types";

export const locales: LocaleType[] = [
  {
    id: "en",
    name: "ENGLISH",
    lang: en,
    translateCode: "en-GB"
  },
  {
    id: "fr",
    name: "FRENCH",
    lang: fr,
    translateCode: "fr-FR"
  }
];
