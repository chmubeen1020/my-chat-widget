export default function ChatIcon() {
  return (
    <div className="fixed flex items-center justify-center bottom-6 right-6 bg-white w-12 h-12 rounded-full border z-50">
    <button
      aria-label="Chat"
      className="flex items-center justify-center w-10 h-10 bg-primary rounded-full z-50"
    >
    <img src="/chatbotIcon.png" alt="" className=" text-white"/>
    </button>
    </div>
  );
}
