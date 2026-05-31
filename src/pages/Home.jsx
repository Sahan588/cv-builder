import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState('');
  
  const prices = ["Rs. 400", "Rs. 500", "Rs. 1000"];

 const sendEmail = (e) => {
  e.preventDefault();

  // process.env හරහා .env ෆයිල් එකේ තියෙන variables ගන්නවා
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  emailjs.sendForm(serviceID, templateID, e.target, publicKey)
    .then((result) => {
        alert("✅ Order Submitted Successfully!");
        setShowModal(false);
        e.target.reset(); // Form එක submit වුනාම පෝරමය හිස් කරනවා
    }, (error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Error: " + error.text);
    });
};

  const templates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16  ]; // Template IDs

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      
      {/* 2. Header Section (Templates Text added) */}
      <div className="text-center pt-24 pb-12">
  <motion.h1 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-5xl font-extrabold text-slate-900 mb-4"
  >
    Templates
  </motion.h1>
  <motion.p 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-slate-500 text-lg"
  >
    Choose your professional CV layout and start your career journey today.
  </motion.p>
      </div>

      {/* Templates Section */}
<div className="p-6 md:p-12">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {templates.map((id) => (
      <motion.div 
        key={id} 
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        className="bg-white border p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all"
      >
        {/* මෙතන පින්තූරෙ දානවා */}
        <div className="aspect-[3/4] bg-slate-50 rounded-xl mb-4 overflow-hidden">
          <img 
              src={id < 10 ? `/Cv_00${id}.PNG` : `/Cv_01${id - 10}.PNG`} 
              alt={`CV Template ${id}`} 
              className="w-full h-full object-cover"
        />
        
        </div>
        
        <h3 className="font-semibold text-sm">Layout {id}</h3>
        <p className="text-md font-bold text-indigo-600 mb-3">{prices[id % 3]}</p>
        
        <button 
          onClick={() => { setSelectedLayout(id); setShowModal(true); }}
          className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-indigo-600 transition-all"
        >
          Order Now
        </button>
      </motion.div>
    ))}
  </div>
</div>

      {/* Footer & WhatsApp (එහෙමමයි) */}
      <footer className="mt-20 py-10 border-t text-center">
        <p className="text-slate-600 mb-2">Need help? Chat with us</p>
        <a href="https://wa.me/94763749048" className="text-indigo-600 font-bold text-xl hover:underline">
          WhatsApp: 076 374 9048
        </a>
      </footer>

      {/* Floating WhatsApp Button (එහෙමමයි) */}
      <a href="https://wa.me/94763749048" target="_blank" rel="noopener noreferrer" 
         className="fixed bottom-6 right-6 z-[100] bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
        <span className="text-white text-2xl">💬</span>
      </a>

      {/* Popup Form Modal (එහෙමමයි - කිසිම වෙනසක් නැත) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-3xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Order {selectedLayout}</h2>
              <form onSubmit={sendEmail} className="space-y-4">
                <input name="layout" value={`Layout ${selectedLayout}`} type="hidden" />
                <input name="order_id" value={`CV-${Math.floor(1000 + Math.random() * 9000)}`} type="hidden" />
                
                {/* 1. Personal Details */}
                <h3 className="font-bold text-indigo-600 border-b pb-1 mt-4">👤 Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="user_name" placeholder="Full Name" required className="w-full p-3 border rounded-xl" />
                  <input name="phone" placeholder="Phone" required className="w-full p-3 border rounded-xl" />
                  <input name="user_email" type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
                  <input name="address" placeholder="Address" className="w-full p-3 border rounded-xl" />
                  <input name="dob" placeholder="Date of Birth" type="date" className="w-full p-3 border rounded-xl" />
                  <input name="nic" placeholder="NIC/Passport" className="w-full p-3 border rounded-xl" />
                  <input name="gender" placeholder="Gender" className="w-full p-3 border rounded-xl" />
                  <input name="marital_status" placeholder="Marital Status" className="w-full p-3 border rounded-xl" />
                  <input name="nationality" placeholder="Nationality" className="w-full p-3 border rounded-xl" />
                </div>

                {/* 2. Job Info */}
                <h3 className="font-bold text-indigo-600 border-b pb-1 mt-4">💼 Job Information</h3>
                <input name="job_position" placeholder="Position" className="w-full p-3 border rounded-xl" />
                <input name="industry" placeholder="Industry" className="w-full p-3 border rounded-xl" />
                <input name="country" placeholder="Country" className="w-full p-3 border rounded-xl" />

                {/* 3. Education Details */}
                <h3 className="font-bold text-indigo-600 border-b pb-1 mt-4">🎓 Education Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input name="ol_school_name" placeholder="O/L School" className="w-full p-3 border rounded-xl" />
                  <input name="ol_year" placeholder="O/L Year" className="w-full p-3 border rounded-xl" />
                  <input name="ol_results" placeholder="O/L Results" className="w-full p-3 border rounded-xl" />
                  <input name="al_school_name" placeholder="A/L School" className="w-full p-3 border rounded-xl" />
                  <input name="al_stream" placeholder="A/L Stream" className="w-full p-3 border rounded-xl" />
                  <input name="al_year" placeholder="A/L Year" className="w-full p-3 border rounded-xl" />
                  <input name="al_results" placeholder="A/L Results" className="w-full p-3 border rounded-xl" />
                  <input name="higher_edu" placeholder="Higher Edu" className="w-full p-3 border rounded-xl" />
                  <input name="university_name" placeholder="Institute" className="w-full p-3 border rounded-xl" />
                  <input name="edu_period" placeholder="Period" className="w-full p-3 border rounded-xl" />
                  <input name="edu_results" placeholder="Results/GPA" className="w-full p-3 border rounded-xl" />
                </div>

                {/* 4. Experience & Skills */}
                <textarea name="experience" placeholder="Work Experience" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="skills" placeholder="Skills" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="languages" placeholder="Languages" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="certifications" placeholder="Certifications" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="achievements" placeholder="Achievements" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="volunteer" placeholder="Volunteer Experience" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="hobbies" placeholder="Hobbies" className="w-full p-3 border rounded-xl h-20" />
                <textarea name="references" placeholder="References" className="w-full p-3 border rounded-xl h-20" />

                {/* 5. Files & Design */}
                <h3 className="font-bold text-indigo-600 border-b pb-1 mt-4">📎 Files & Preferences</h3>
                <input name="old_cv" placeholder="Old CV Link" className="w-full p-3 border rounded-xl" />
                <input name="cert_files" placeholder="Certificates Link" className="w-full p-3 border rounded-xl" />
                <input name="photo" placeholder="Photo Link" className="w-full p-3 border rounded-xl" />
                <input name="cv_style" placeholder="CV Style" className="w-full p-3 border rounded-xl" />
                <input name="color" placeholder="Color" className="w-full p-3 border rounded-xl" />
                <input name="deadline" placeholder="Deadline" className="w-full p-3 border rounded-xl" />
                <textarea name="notes" placeholder="Special Notes" className="w-full p-3 border rounded-xl h-20" />

                <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">Submit Order</button>
                <button type="button" onClick={() => setShowModal(false)} className="w-full py-2 text-slate-400 font-medium">Cancel</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;