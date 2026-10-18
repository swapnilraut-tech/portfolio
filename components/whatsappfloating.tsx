"use client";

import { useState } from "react";

export const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "918788158639"; // Swapnil's phone number with India country code

  const quickPrompts = [
    "Hi Swapnil, I'd like to discuss a job opportunity!",
    "Hey! Interested in collaborating on a project.",
    "Hi Swapnil, saw your portfolio and wanted to connect!",
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || message.trim() || "Hi Swapnil, I came across your portfolio!";
    const encoded = encodeURIComponent(finalMsg);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-[350px] max-h-[calc(100dvh-5.5rem)] bg-[#0c1017] rounded-2xl sm:rounded-3xl border border-amber-500/20 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#128c7e] p-3 sm:p-4 text-white flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#075e54] border-2 border-white/30 flex items-center justify-center font-bold font-mono text-xs sm:text-sm text-amber-300">
                  SR
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#128c7e]" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs sm:text-sm leading-tight truncate">Swapnil Raut</h4>
                <p className="text-[10px] sm:text-[11px] text-emerald-100/90 truncate">
                  Typically replies within an hour
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              type="button"
              suppressHydrationWarning
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs sm:text-sm transition-colors flex-shrink-0 ml-2"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Background & Message Area (Scrollable if height is small) */}
          <div className="p-3 sm:p-4 bg-[#080b11] bg-grid-pattern overflow-y-auto max-h-[280px] sm:max-h-[320px] flex flex-col justify-between space-y-3 sm:space-y-4">
            
            {/* Incoming Bubble */}
            <div className="bg-[#131926] border border-slate-800 rounded-2xl rounded-tl-sm p-3 sm:p-3.5 max-w-[92%] space-y-1 shadow-md">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-amber-400 block">
                Swapnil Raut
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Hi there! 👋 How can I help you with your project or full-stack opportunity?
              </p>
              <div className="text-[9px] sm:text-[10px] text-slate-500 text-right flex items-center justify-end gap-1 pt-0.5">
                <span>Just now</span>
                <span className="text-sky-400">✓✓</span>
              </div>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Quick Prompts:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => handleSend(prompt)}
                    className="text-left text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-amber-500/10 border border-slate-800 hover:border-amber-500/30 text-slate-300 hover:text-amber-300 transition-all leading-snug"
                  >
                    👉 {prompt}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Input Footer Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 sm:p-3 bg-[#0c1017] border-t border-slate-800 flex items-center gap-2 flex-shrink-0"
          >
            <input
              type="text"
              suppressHydrationWarning
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 min-w-0 bg-[#131926] border border-slate-700/80 focus:border-emerald-500 text-slate-100 text-xs px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full outline-none transition-colors"
            />
            <button
              type="submit"
              suppressHydrationWarning
              disabled={!message.trim()}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                message.trim()
                  ? "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-emerald-500/30 scale-100 cursor-pointer"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed scale-95"
              }`}
              aria-label="Send WhatsApp message"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

        </div>
      )}

      {/* Trigger Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        suppressHydrationWarning
        aria-label="Open WhatsApp chat"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        {isOpen ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </button>
    </div>
  );
};
