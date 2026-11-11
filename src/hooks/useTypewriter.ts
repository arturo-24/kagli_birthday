import { useEffect, useState } from "react";

/** Escribe `text` letra por letra y se reinicia cada vez que el texto cambia. */
export function useTypewriter(text: string, delayMs = 19) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, delayMs);
    return () => window.clearInterval(timer);
  }, [text, delayMs]);

  return typed;
}
