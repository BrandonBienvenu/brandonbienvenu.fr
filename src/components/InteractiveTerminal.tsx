import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "cv", desc: "Télécharger mon CV", action: () => window.open("/cv/BIENVENU_brandon.pdf", "_blank") },
  { cmd: "github", desc: "Voir mon GitHub", action: () => window.open("https://github.com/BrandonBienvenu", "_blank") },
  { cmd: "linkedin", desc: "Voir mon LinkedIn", action: () => window.open("https://www.linkedin.com/in/brandon-bienvenu-045858348/", "_blank") },
  { cmd: "contact", desc: "Aller au bouton d'envoi", action: () => document.getElementById("send-message-btn")?.scrollIntoView({ behavior: "smooth", block: "center" }) },
  { cmd: "67", desc: "???", action: null },
  { cmd: "help", desc: "Afficher les commandes disponibles", action: null },
];

export const InteractiveTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "input" | "output" | "error"; content: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, { type: "input", content: `$ ${trimmedCmd}` }]);

    if (trimmedCmd === "help") {
      const helpOutput = commands.filter(c => c.cmd !== "67").map((c) => `  ${c.cmd.padEnd(12)} - ${c.desc}`).join("\n");
      setHistory((prev) => [
        ...prev,
        { type: "output", content: `Commandes disponibles:\n${helpOutput}` },
      ]);
    } else if (trimmedCmd === "67") {
      setHistory((prev) => [
        ...prev,
        { type: "output", content: `
   _____ _____ _  __ 
  / ___//__  /| |/ / 
  \\__ \\   / / |   /  
 ___/ /  / /  /   |  
/____/  /_/  /_/|_|  
                     
🎵 "SIX SEVEN KID" 🎵
        
   Why you actin' like you know me?
   Why you actin' like you know me?
   Boy, you better keep on scrollin'...
        ` },
      ]);
    } else if (trimmedCmd === "clear") {
      setHistory([]);
    } else {
      const command = commands.find((c) => c.cmd === trimmedCmd);
      if (command && command.action) {
        command.action();
        setHistory((prev) => [
          ...prev,
          { type: "output", content: `Exécution de "${trimmedCmd}"...` },
        ]);
      } else if (!command) {
        setHistory((prev) => [
          ...prev,
          { type: "error", content: `Commande non reconnue: "${trimmedCmd}". Tapez "help" pour voir les commandes disponibles.` },
        ]);
      }
    }

    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div 
        className="rounded-xl bg-card/60 border border-border/50 backdrop-blur-xl overflow-hidden shadow-elevated cursor-text"
        onClick={focusInput}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green/70" />
          </div>
          <span className="text-xs font-mono text-muted-foreground ml-2">brandon@portfolio:~</span>
        </div>

        {/* Terminal content */}
        <div 
          ref={containerRef}
          className="p-4 h-64 overflow-y-auto font-mono text-sm"
        >
          {/* Help hint when not typing */}
          {!isTyping && history.length === 0 && (
            <div className="text-muted-foreground animate-pulse">
              <p className="mb-2">Commandes disponibles:</p>
              {commands.map((c) => (
                <p key={c.cmd} className="text-xs">
                  <span className="text-primary">{c.cmd.padEnd(12)}</span>
                  <span className="text-muted-foreground"> - {c.desc}</span>
                </p>
              ))}
              <p className="mt-4 text-xs text-muted-foreground/60">
                Commencez à taper pour interagir...
              </p>
            </div>
          )}

          {/* Command history */}
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              <p className={
                entry.type === "input" 
                  ? "text-primary" 
                  : entry.type === "error" 
                    ? "text-destructive" 
                    : "text-muted-foreground whitespace-pre-line"
              }>
                {entry.content}
              </p>
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setIsTyping(e.target.value.length > 0);
              }}
              onBlur={() => setIsTyping(input.length > 0)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="w-2 h-5 bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
