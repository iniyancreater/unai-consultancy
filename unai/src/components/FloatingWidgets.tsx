import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Phone, X, Send, Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function FloatingWidgets() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Hi there! Welcome to UNAI Consultancy. How can I help you accelerate your digital transformation today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', text: inputValue }]);
    setInputValue('');
    
    // Mock AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'assistant', text: 'Thank you for your message. One of our specialized consultants will review this and assist you shortly. If you prefer, you can also book an appointment directly!' }]);
    }, 1000);
  };

  const WhatsappIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );

  return (
    <div className="fixed z-50 pointer-events-none inset-0 flex flex-col justify-end p-6 pb-8 md:pb-6">
      
      {/* Appointment Booking Trigger (Bottom Left) */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setIsBookingOpen(true)}
          className="bg-navy text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 border border-indigo-900 overflow-hidden group"
        >
          <Calendar className="w-5 h-5 relative z-10" />
          <span className="relative z-10 hidden sm:block">Book Appointment</span>
          <span className="relative z-10 sm:hidden">Book</span>
        </motion.button>
      </div>

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-4 pointer-events-auto items-end">
        
        {/* WhatsApp Button */}
        <motion.a 
          href="https://wa.me/910000000000" target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappIcon />
        </motion.a>

        {/* AI Chatbot Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 focus:outline-none"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-28 right-6 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-navy p-5 pt-6 text-white shrink-0 relative">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shrink-0">
                  <span className="text-xl font-bold italic">U</span>
                </div>
                <div>
                  <h4 className="font-bold text-base leading-tight">UNAI AI Assistant</h4>
                  <p className="text-xs text-indigo-100/70 mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse"></span> Online
                  </p>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-grow p-5 overflow-y-auto bg-slate-50 flex flex-col gap-4 custom-scrollbar">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                    msg.role === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-navy rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <form onSubmit={handleSendMessage} className="flex relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-navy"
                />
                <button type="submit" className="absolute right-2 top-1 bottom-1 w-10 text-primary hover:text-navy transition-colors flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-[800px] h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Left Panel */}
              <div className="w-full md:w-1/3 bg-navy text-white p-8 flex flex-col shrink-0">
                <h3 className="font-headline text-2xl font-black mb-6">Strategic Consultation</h3>
                <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
                  Book a free 30-minute discovery session with our executive architects to discuss scaling your digital operations.
                </p>
                
                <div className="mt-auto space-y-4 text-sm font-medium">
                  <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-accent" /> 30 Minutes</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> No Commitment</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /> Google Meet / Zoom</div>
                </div>
              </div>

              {/* Right Panel (Mock Calendly Interface) */}
              <div className="w-full md:w-2/3 bg-white p-8 overflow-y-auto relative custom-scrollbar flex flex-col">
                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <h4 className="font-headline text-xl font-bold text-navy mb-8 mt-2">Select Date & Time</h4>
                
                {/* Mock Calendar Grid */}
                <div className="grid grid-cols-7 text-center gap-2 mb-8">
                  {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-xs font-bold text-slate-400">{d}</div>)}
                  {/* Empty offsets */}
                  <div></div><div></div><div></div>
                  {/* Days */}
                  {[...Array(28)].map((_, i) => (
                    <button key={i} className="aspect-square rounded-full flex items-center justify-center text-sm font-medium hover:bg-indigo-50 hover:text-primary transition-colors focus:bg-primary focus:text-white border border-transparent shadow-sm mx-auto w-10 h-10">
                      {i + 1}
                    </button>
                  ))}
                </div>

                <h4 className="font-headline text-lg font-bold text-navy mb-4">Available Slots (IST)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {['10:00 AM', '11:30 AM', '02:00 PM', '03:15 PM', '04:30 PM'].map((time, i) => (
                    <button key={i} className="border border-slate-200 rounded-xl py-3 text-sm font-bold text-primary hover:border-primary hover:bg-indigo-50 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-1">
                      {time}
                    </button>
                  ))}
                </div>

                <div className="mt-auto flex justify-end">
                  <button onClick={() => { alert('Appointment confirmed! A calendar invite has been sent to your email.'); setIsBookingOpen(false); }} className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-navy transition-colors">
                    Confirm Booking
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
