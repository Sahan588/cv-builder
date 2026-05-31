import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState('');
  
  const prices = ["Rs. 400", "Rs. 500", "Rs. 1000"];
  const templates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
          alert("✅ Your Order Has Been Submitted Successfully!");
          setShowModal(false);
          e.target.reset();
      }, (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Error submitting order: " + error.text);
      });
  };

  // O/L ප්‍රධාන විෂයන් 6 ස්වයංක්‍රීයව ඇතුළත් කිරීමට
  const coreOLSubjects = ["Mathematics", "Science", "History", "Religion", "Sinhala", "English"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 font-sans">
      
      {/* Header Section */}
      <div className="text-center pt-24 pb-12">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-extrabold text-slate-950 mb-4 tracking-tight">Premium CV Templates</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-500 text-lg max-w-md mx-auto">Select your favorite professional layout and fast-track your career goals today.</motion.p>
      </div>

      {/* Templates Grid Section */}
      <div className="p-6 md:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((id) => (
            <motion.div key={id} whileHover={{ y: -8 }} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-slate-100 rounded-xl mb-4 overflow-hidden border border-slate-50">
                <img src={id < 10 ? `/Cv_00${id}.PNG` : `/Cv_01${id - 10}.PNG`} alt={`CV Layout ${id}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-800 text-sm">Layout {id}</h3>
                <p className="text-sm font-extrabold text-indigo-600">{prices[id % 3]}</p>
              </div>
              <button onClick={() => { setSelectedLayout(id); setShowModal(true); }} className="w-full py-2.5 bg-slate-950 text-white rounded-xl text-xs font-bold hover:bg-indigo-600 active:scale-95 transition-all shadow-sm">Order This Layout</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 py-10 border-t bg-white text-center shadow-sm">
        <p className="text-slate-500 text-sm mb-1">Need instant support or custom changes?</p>
        <a href="https://wa.me/94763749048" className="text-indigo-600 font-extrabold text-lg hover:underline inline-flex items-center gap-1">💬 WhatsApp: 076 374 9048</a>
      </footer>

      {/* Popup Form Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white p-6 md:p-8 rounded-3xl w-full max-w-3xl shadow-2xl max-h-[92vh] overflow-y-auto border border-slate-100">
              
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Complete Your Application</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Layout Selection: <span className="font-bold text-indigo-600">Template {selectedLayout}</span></p>
                </div>
                <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 text-2xl font-semibold p-1">&times;</button>
              </div>
              
              <form onSubmit={sendEmail} className="space-y-6">
                <input name="layout" value={`Layout ${selectedLayout}`} type="hidden" />
                <input name="order_id" value={`CV-${Math.floor(1000 + Math.random() * 9000)}`} type="hidden" />

                {/* Section 1: Personal Details */}
                <fieldset className="space-y-3 bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100">
                  <legend className="text-sm font-bold text-indigo-700 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm flex items-center gap-1">👤 Personal Details</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">Full Name *</label>
                      <input name="user_name" type="text" placeholder="John Doe" required className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">Phone Number *</label>
                      <input name="phone" type="tel" placeholder="07XXXXXXXX" required className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">Email Address</label>
                      <input name="user_email" type="email" placeholder="example@mail.com" className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">NIC / Passport No</label>
                      <input name="nic" type="text" placeholder="123456789V" className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">Date of Birth</label>
                      <input name="dob" type="date" className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">Residential Address</label>
                      <input name="address" type="text" placeholder="Colombo, Sri Lanka" className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div className="flex flex-col gap-1 col-span-full">
                      <label className="text-xs font-bold text-slate-600">Target Job Position</label>
                      <input name="job_position" type="text" placeholder="Software Engineer / Marketing Executive" className="p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                  </div>
                </fieldset>

                {/* Section 2: Education Details */}
                <fieldset className="space-y-4 bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100">
                  <legend className="text-sm font-bold text-indigo-700 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm flex items-center gap-1">🎓 Academic Qualifications</legend>
                  
                  {/* School & University Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <input name="ol_school" type="text" placeholder="O/L School Name" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                    <input name="ol_year" type="text" placeholder="O/L Year (e.g., 2018)" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                    <input name="al_school" type="text" placeholder="A/L School Name" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                    <input name="al_year" type="text" placeholder="A/L Year (e.g., 2021)" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                    
                    {/* University Fields */}
                    <input name="university_name" type="text" placeholder="University / Institute Name (If applicable)" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500 col-span-full" />
                    <input name="degree_name" type="text" placeholder="Degree / Course Name (e.g., BSc in Computer Science)" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                    <input name="degree_year" type="text" placeholder="Graduation Year (e.g., 2025)" className="p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                  </div>

                  {/* O/L Subjects & Grades Grid */}
                  <div className="border-t pt-3">
                    <h4 className="text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Ordinary Level Results (9 Subjects)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {coreOLSubjects.map((sub, i) => (
                        <div key={i} className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                          <input name={`ol_sub_${i + 1}`} type="text" value={sub} readOnly className="w-2/3 p-1.5 text-[11px] font-medium bg-slate-100 border-none rounded text-slate-700 focus:outline-none" />
                          <input name={`ol_grd_${i + 1}`} type="text" placeholder="Grade" className="w-1/3 p-1.5 text-[11px] text-center border rounded font-bold uppercase focus:ring-1 focus:ring-indigo-500" />
                        </div>
                      ))}
                      {[7, 8, 9].map((num) => (
                        <div key={num} className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                          <input name={`ol_sub_${num}`} type="text" placeholder={`Subject ${num}`} className="w-2/3 p-1.5 text-[11px] border rounded font-medium focus:ring-1 focus:ring-indigo-500" />
                          <input name={`ol_grd_${num}`} type="text" placeholder="Grade" className="w-1/3 p-1.5 text-[11px] text-center border rounded font-bold uppercase focus:ring-1 focus:ring-indigo-500" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* A/L Subjects & Grades Grid */}
                  <div className="border-t pt-3">
                    <h4 className="text-xs font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Advanced Level Results (4 Subjects)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex gap-1 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm">
                          <input name={`al_sub_${num}`} type="text" placeholder={`A/L Subject ${num}`} className="w-2/3 p-1.5 text-[11px] border rounded font-medium focus:ring-1 focus:ring-indigo-500" />
                          <input name={`al_grd_${num}`} type="text" placeholder="Grade" className="w-1/3 p-1.5 text-[11px] text-center border rounded font-bold uppercase focus:ring-1 focus:ring-indigo-500" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <input name="al_zscore" type="text" placeholder="Final Z-Score (e.g., 1.8245)" className="w-full p-2.5 border rounded-xl text-xs bg-white focus:ring-2 focus:ring-indigo-500" />
                    </div>
                  </div>
                </fieldset>

                {/* Section 3: Professional Experience */}
                <fieldset className="space-y-3 bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100">
                  <legend className="text-sm font-bold text-indigo-700 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm flex items-center gap-1">💼 Professional Experience</legend>
                  <div className="pt-2">
                    <textarea name="experience" placeholder="Work History / Projects / Skills (List your previous job titles, company names, or key professional skills here...)" className="w-full p-3 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="3" />
                  </div>
                </fieldset>

                {/* Section 4: File Sharing & Instructions */}
                <fieldset className="space-y-3 bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100">
                  <legend className="text-sm font-bold text-indigo-700 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm flex items-center gap-1">📎 Attachments & Notes</legend>
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-slate-600">Special Instructions / Custom Notes</label>
                      <textarea name="notes" placeholder="Specify color themes, specific fonts, or sections you want to emphasize..." className="p-3 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="2" />
                    </div>
                  </div>
                </fieldset>

                {/* Submission CTA Controls */}
                <div className="pt-2 space-y-3">
                  <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-center text-base tracking-wide hover:bg-indigo-700 active:scale-[0.99] transition-all shadow-lg shadow-indigo-100">🚀 Securely Submit Order</button>
                  <button type="button" onClick={() => setShowModal(false)} className="w-full py-2 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors text-center">Cancel Order</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/94763749048"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[300] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border border-white/20"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.281 0-5.953 2.672-5.953 5.953 0 1.047.281 2.063.82 2.953l-.867 3.164 3.258-.867c.844.469 1.805.719 2.789.719 3.281 0 5.953-2.672 5.953-5.953 0-3.281-2.672-5.953-5.953-5.953zm0 10.734c-.875 0-1.734-.234-2.484-.688l-.18-.109-1.875.5.5-1.828-.109-.188c-.484-.75-.734-1.609-.734-2.484 0-2.687 2.187-4.875 4.875-4.875s4.875 2.187 4.875 4.875c0 2.687-2.187 4.875-4.875 4.875zM15.469 13.5c-.141-.078-.844-.422-.969-.469s-.219-.078-.312.078-.359.469-.438.562-.156.109-.312.031c-.141-.078-.609-.234-1.156-.719-.422-.375-.703-.844-.781-1.016s-.078-.172-.031-.234c.063-.063.141-.172.219-.266s.094-.156.141-.25.031-.188-.016-.266-.422-1.031-.578-1.422c-.156-.375-.312-.328-.422-.328s-.234-.016-.359-.016-.328.047-.5.234c-.172.188-.656.641-.656 1.563s.453 1.812.516 1.891c.063.078.734 1.109 1.766 1.562.25.109.438.172.594.219.25.078.469.063.656.031.203-.031.844-.344.969-.672.125-.328.125-.609.094-.672-.031-.063-.125-.094-.266-.172z"/>
        </svg>
      </a>
    </div>
  );
}

export default Home;