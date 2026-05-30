export default function Contact() {
  const socialLinks = [
    { name: "Gmail", icon: "📧", link: "mailto:sahanjayamal835@gmail.com", color: "hover:text-red-500" },
    { name: "WhatsApp", icon: "💬", link: "https://wa.me/94763749048", color: "hover:text-green-500" },
    { name: "LinkedIn", icon: "in", link: "https://linkedin.com/in/sahanjayamal", color: "hover:text-blue-500" },
    { name: "Facebook", icon: "f", link: "https://facebook.com/sahanjayamal", color: "hover:text-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] pt-40 px-6 flex justify-center items-start">
      <div className="relative max-w-2xl w-full">
        {/* Decorative background blur */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>

        <div className="bg-[#0f172a] border border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
          
          {/* Header Section */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Let's Connect! <span className="text-orange-500">🚀</span>
            </h1>
            <p className="text-slate-400">
              ඔබේ ඕනෑම ව්‍යාපෘතියක් ගැන කතා කිරීමට මම සූදානම්. පහත විස්තර හරහා මාව සම්බන්ධ කරගන්න.
            </p>
          </div>

          {/* Social Links Grid - මේක තමයි ඔයාගේ අර පරණ අවුල තිබ්බ තැන */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {socialLinks.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`flex flex-col items-center gap-3 p-6 bg-[#1e293b] rounded-2xl border border-slate-700/50 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:border-orange-500/50 group ${item.color}`}
              >
                <span className="text-3xl font-bold group-hover:animate-bounce">{item.icon}</span>
                <span className="text-slate-300 text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </div>

         
        </div>
      </div>
    </div>
  );
}