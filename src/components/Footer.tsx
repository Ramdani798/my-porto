export default function Footer() {
    return (
      <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md relative z-10 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Betalog. All rights reserved.</p>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>System Online. Performa Maksimal 100%.</span>
          </div>
        </div>
      </footer>
    );
  }