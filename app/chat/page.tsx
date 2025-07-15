'use client';

import { useState, useRef, useEffect } from 'react';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import ComponentWrapper from '@/components/component-wrapper';

interface Message {
  id: string;
  name: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
  avatar?: string;
}

const TicketChat = () => {
  const { user } = useUser();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isAtBottom = () => {
    if (!chatContainerRef.current) return true;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    return scrollHeight - scrollTop - clientHeight < 1;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isTyping || messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (message.trim() && user) {
      const wasAtBottom = isAtBottom();
      const newMessage: Message = {
        id: Date.now().toString(),
        name: user.fullName || 'User',
        text: message,
        timestamp: new Date(),
        isUser: true,
        avatar: user.imageUrl,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      setIsTyping(true);
      // Simulate admin response after 2 seconds
      setTimeout(() => {
        const adminResponse: Message = {
          id: (Date.now() + 1).toString(),
          name: 'Support',
          text: 'Thank you for your message. We will get back to you shortly.',
          timestamp: new Date(),
          isUser: false,
          avatar: '/support-avatar.png', // Add your support avatar path
        };
        setMessages((prev) => {
          const updated = [...prev, adminResponse];
          if (wasAtBottom) {
            setTimeout(scrollToBottom, 0);
          }
          return updated;
        });
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <ComponentWrapper>
      <div className='bg-slate-800/50 shadow-lg mx-auto border border-slate-700 rounded-xl w-full max-w-2xl overflow-hidden'>
        <div className='flex justify-between items-center bg-slate-900/50 p-4 border-slate-600 border-b'>
          <h3 className='font-bold text-white text-xl'>Ticket Chat Support</h3>
        </div>
        <SignedOut>
          <div className='p-6'>
            <p className='mb-4 text-slate-300 text-center'>
              Please sign in to start chatting.
            </p>
            <Link
              href='/sign-in'
              className='block bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 px-6 py-3 rounded-lg font-bold text-white text-center transition-all duration-300'>
              Sign In
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <div
            ref={chatContainerRef}
            className='space-y-4 bg-gradient-to-b from-slate-800 to-slate-900 p-4 max-h-96 overflow-y-auto'>
            {messages.length === 0 && !isTyping ? (
              <p className='py-8 text-slate-300 text-center'>
                No messages yet. Start the conversation!
              </p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.isUser ? 'flex-row-reverse' : ''
                  }`}>
                  <img
                    src={msg.avatar || '/default-avatar.png'}
                    alt={msg.name}
                    className='shadow-sm border-2 border-slate-600 rounded-full w-10 h-10'
                  />
                  <div
                    className={`flex flex-col ${
                      msg.isUser ? 'items-end' : 'items-start'
                    }`}>
                    <p className='mb-1 font-semibold text-slate-200 text-sm'>
                      {msg.name}
                    </p>
                    <div
                      className={`px-4 py-2 rounded-2xl shadow-md max-w-md ${
                        msg.isUser
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                          : 'bg-slate-700/70 text-slate-200'
                      }`}>
                      <p className='text-sm'>{msg.text}</p>
                    </div>
                    <p className='mt-1 text-slate-500 text-xs'>
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
            {isTyping && (
              <div className='flex items-start gap-3'>
                <img
                  src='/support-avatar.png'
                  alt='Support'
                  className='shadow-sm border-2 border-slate-600 rounded-full w-10 h-10'
                />
                <div className='flex items-center bg-slate-700/70 shadow-md px-4 py-2 rounded-2xl'>
                  <div className='flex gap-1'>
                    <div className='bg-slate-400 rounded-full w-2 h-2 animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='bg-slate-400 rounded-full w-2 h-2 animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='bg-slate-400 rounded-full w-2 h-2 animate-bounce'></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className='bg-slate-900/50 p-4 border-slate-600 border-t'>
            <div className='flex gap-2'>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type your message here...'
                className='flex-grow bg-slate-800/50 shadow-inner p-3 border border-slate-600 focus:border-blue-400 rounded-xl focus:outline-none min-h-[48px] text-slate-200 transition-all duration-300 resize-none placeholder-slate-400'
                required
              />
              <button
                onClick={handleSend}
                className='bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 shadow-md hover:shadow-lg px-6 py-3 rounded-xl font-bold text-white transition-all duration-300'>
                Send
              </button>
            </div>
          </div>
        </SignedIn>
      </div>
    </ComponentWrapper>
  );
};

export default TicketChat;
