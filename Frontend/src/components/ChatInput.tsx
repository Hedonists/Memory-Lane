import React, { useRef } from 'react';
import { XCircle, FileUp, ArrowRight } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  chatAttachment: File | null;
  setChatAttachment: (file: File | null) => void;
  sendMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  message,
  setMessage,
  chatAttachment,
  setChatAttachment,
  sendMessage
}) => {
  const chatFileInputRef = useRef<HTMLInputElement>(null);

  const handleChatAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('audio/')) {
      alert('Please upload an audio file');
      e.target.value = '';
      return;
    }
    setChatAttachment(file);
  };

  const removeChatAttachment = () => {
    setChatAttachment(null);
    if (chatFileInputRef.current) {
      chatFileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col p-2 md:p-4 space-y-2">

        {/* Input Bar with embedded preview */}
        <div className="flex flex-col w-full bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden">

        {chatAttachment && (
        <div className="px-3 font-outfit pt-3">
          <div className="flex items-center bg-gray-800/60 py-1.5 px-3 rounded-xl w-fit max-w-full">
            <div className="w-7 h-7 rounded bg-gray-700 flex items-center justify-center mr-2">
              <span className="text-[10px] text-gray-300 uppercase">
                {chatAttachment.name.split('.').pop() || 'mp3'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span
                className="text-white text-xs truncate max-w-[150px] md:max-w-xs font-medium block"
                title={chatAttachment.name}
              >
                {chatAttachment.name}
              </span>
              <div className="text-[10px] text-gray-400">
                {(chatAttachment.size / 1024).toFixed(0)} KB
              </div>
            </div>
            <button
              onClick={removeChatAttachment}
              className="ml-2 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <XCircle className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}


          <div className="flex items-center px-3 py-2 md:px-4 md:py-3">
            {/* Upload Button */}
            <button
              onClick={() => chatFileInputRef.current?.click()}
              className="text-gray-400 hover:text-[#459DDC] transition-all duration-300 p-1.5 md:p-2 hover:scale-110"
              title="Attach audio file"
            >
              <FileUp className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <input
              type="file"
              ref={chatFileInputRef}
              accept="audio/*"
              className="hidden"
              onChange={handleChatAttachment}
            />

            {/* Text Input */}
            <input
              type="text"
              className="flex-1 mx-2 py-2 bg-transparent text-white focus:outline-none text-sm md:text-base placeholder-gray-400"
              placeholder={chatAttachment ? "Add a message about this audio file..." : "Type a message..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />

            {/* Send Button */}
            <button
              onClick={sendMessage}
              disabled={!message.trim() && !chatAttachment}
              className={`p-2 md:p-3 transition-all duration-200 rounded-xl ${
                !message.trim() && !chatAttachment
                  ? 'bg-transparent text-gray-500'
                  : 'bg-gradient-to-r from-[#459DDC] to-[#3A7DB5] text-white hover:shadow-lg btn-pulse'
              }`}
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
