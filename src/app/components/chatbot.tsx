import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface QuickReply {
  label: string;
  response: string;
}

const quickReplies: QuickReply[] = [
  { label: "View Projects", response: "projects" },
  { label: "Skills Overview", response: "skills" },
  { label: "Professional Journey", response: "journey" },
  { label: "Contact Mohan", response: "contact" }
];

const botResponses: Record<string, string> = {
  projects: `I've built several impactful projects:

🎵 **Musify** - Modern music streaming app with playlist management and dynamic playback controls (React, JavaScript)

☁️ **Cloud Drive** - Secure cloud storage system with user-based access control (React, Backend APIs)

📄 **Resume Builder** - Dynamic resume generation with real-time preview (React, JavaScript)

📊 **Excel Analytics Platform** - Full-stack analytics processing Excel files with interactive insights (React, Node.js, PostgreSQL, Chart.js)

Would you like to know more about any specific project?`,

  skills: `Here's a breakdown of my technical skills:

**Frontend:**
React, TypeScript, JavaScript, Tailwind CSS, Motion/Framer Motion, HTML5, CSS3

**Backend:**
Node.js, Express, RESTful APIs, GraphQL

**Database:**
PostgreSQL, MongoDB, MySQL

**Tools & Platforms:**
Git, Docker, AWS, Vercel, Figma

I focus on building scalable, performant systems with clean architecture.`,

  journey: `My professional journey highlights:

**Full-Stack Development Intern** (Jan 2024 - Present)
Built full-stack features, implemented RESTful APIs, optimized performance by 40%

**Frontend Engineering Intern** (Jun 2023 - Dec 2023)
Developed production UI components, worked on state management and animations

**Software Development Intern** (Jan 2023 - May 2023)
Built customer-facing features, learned clean code practices

Each role strengthened my end-to-end ownership and problem-solving skills.`,

  contact: `You can reach Mohan Raj at:

📧 **Email:** mohanrajit05@gmail.com

💻 **GitHub:** github.com/mohanraj

🔗 **LinkedIn:** linkedin.com/in/mohanraj

Feel free to connect for collaboration, opportunities, or just to chat about tech!`,

  default: `I can help you learn more about Mohan Raj's:

• Projects and technical work
• Skills and expertise
• Professional experience
• Contact information

Just click any button above or ask me directly!`
};

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hi! Thanks for reaching out 👋\nI'm Mohan Raj's portfolio assistant.\nHow can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickReply = (response: string) => {
    const quickReply = quickReplies.find(q => q.response === response);
    if (!quickReply) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: quickReply.label,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Add bot response after delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponses[response] || botResponses.default,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Determine response based on input
    setTimeout(() => {
      let responseKey = "default";
      const input = inputValue.toLowerCase();
      
      if (input.includes("project")) responseKey = "projects";
      else if (input.includes("skill")) responseKey = "skills";
      else if (input.includes("experience") || input.includes("journey") || input.includes("work")) responseKey = "journey";
      else if (input.includes("contact") || input.includes("email") || input.includes("reach")) responseKey = "contact";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponses[responseKey],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[500px] h-[90vh] max-h-[700px] bg-card border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Portfolio Assistant</h3>
                <p className="text-xs text-muted-foreground">Mohan Raj</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-accent/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-accent text-white"
                        : "bg-secondary/50 border border-border text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary/50 border border-border rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="px-6 pb-4"
              >
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={reply.response}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                        duration: 0.3
                      }}
                      onClick={() => handleQuickReply(reply.response)}
                      className="px-4 py-2 text-sm bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 rounded-lg transition-all hover:scale-105"
                    >
                      {reply.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-accent hover:bg-accent/90 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}