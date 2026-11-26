"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

// Ano de quem está visitando, sempre atualizado. No build (pré-renderização) fica vazio,
// porque o Next 16 não permite new Date() ali; no navegador já aparece o ano certo.
export function CurrentYear() {
  return useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);
}
