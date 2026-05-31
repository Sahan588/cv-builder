import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg"
      >
       {/* Logo එක මෙතනට එකතු කළා */}
        <div className="flex justify-center mb-8">
          <img 
            src="/Cv_Design_Helper_logo_web.png" 
            alt="DesignHelper Logo" 
            className="w-32 h-auto hover:scale-105 transition-transform duration-300" 
          />
        </div>

        <h1 className="text-4xl font-bold mb-6 text-center text-slate-900">About DesignHelper</h1>
        
        {/* English Section */}
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-indigo-600">Why Choose Us?</h2>
          <p className="text-slate-600 leading-relaxed">
            At <strong>DesignHelper</strong>, we believe that your CV is your first impression. 
            Our mission is to help job seekers create professional, modern, and eye-catching 
            CVs that stand out from the crowd. With years of experience in design, we ensure 
            your professional journey is represented with perfection.
          </p>
        </div>

        {/* Sinhala Section */}
        <div className="space-y-4 border-t pt-8">
          <h2 className="text-xl font-semibold text-indigo-600">අප ගැන</h2>
          <p className="text-slate-600 leading-relaxed">
            <strong>DesignHelper</strong> හිදී අපි විශ්වාස කරන්නේ ඔබගේ CV එක යනු ඔබගේ පළමු පෙනී සිටීම බවයි. 
            වෘත්තීය මට්ටමේ සහ ආකර්ෂණීය CV නිර්මාණය කිරීම හරහා ඔබගේ රැකියා සිහිනය සැබෑ කරගැනීමට උදව් කිරීම අපගේ අරමුණයි. 
            අපගේ වසර ගණනාවක අත්දැකීම් සමඟින්, ඔබගේ වෘත්තීය ජීවිතය වඩාත් සාර්ථක කර ගැනීමට අවශ්‍ය CV නිර්මාණයන් අපි ඔබට ලබා දෙන්නෙමු.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-indigo-50 p-6 rounded-2xl">
            <h3 className="font-bold text-indigo-900 mb-2">✅ Fast Delivery</h3>
            <p className="text-sm text-indigo-700">Get your professional CV ready on time.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl">
            <h3 className="font-bold text-indigo-900 mb-2">✅ Modern Designs</h3>
            <p className="text-sm text-indigo-700">ATS friendly and modern layouts.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;