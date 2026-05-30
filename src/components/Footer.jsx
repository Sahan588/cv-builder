export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* වම් පැත්තේ නම */}
        <div>
          <h2 className="text-xl font-bold text-white">Sahan Jayamal</h2>
          <p className="text-slate-400 text-sm mt-1">© 2026 All Rights Reserved.</p>
        </div>

        {/* මැද ලින්ක්ස් */}
        <div className="flex space-x-6 text-slate-400">
          <a href="#" className="hover:text-orange-500 transition-colors">GitHub</a>
          <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
        </div>

        {/* දකුණු පැත්තේ මැසේජ් එක */}
        <p className="text-slate-500 text-sm">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}