export * from "./types";
import platinum from "@/lib/data/sponsors/platinum";
import gold from "@/lib/data/sponsors/gold";
import silver from "@/lib/data/sponsors/silver";
import bronze from "@/lib/data/sponsors/bronze";

export const sponsors = [
  ...platinum,
  ...gold,
  ...silver,
  ...bronze,
];