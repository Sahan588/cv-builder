import { useState } from 'react';

export default function BlogPage() {
  // බ්ලොග් දත්ත වලට views සහ likes එකතු කළා
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How I built my Portfolio with React",
      date: "May 29, 2026",
      excerpt: "A deep dive into the tech stack and design choices behind my personal portfolio website.",
      readTime: "5 min read",
      views: 120,
      likes: 15
    },
    {
      id: 2,
      title: "Why Graphic Design matters for Developers",
      date: "May 20, 2026",
      excerpt: "Exploring how design principles can help create better user experiences in web applications.",
      readTime: "3 min read",
      views: 85,
      likes: 10
    }
  ]);

  // Like කරන ෆන්ෂන් එක
  const handleLike = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
    ));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300">
          My Blog
        </h1>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex justify-between items-center text-orange-500 text-sm font-medium mb-4">
                <span>{blog.date} • {blog.readTime}</span>
                <span>👁️ {blog.views} views</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 hover:text-orange-500 transition-colors cursor-pointer">
                {blog.title}
              </h2>
              <p className="text-slate-400 mb-6">{blog.excerpt}</p>
              
              <div className="flex justify-between items-center">
                <button className="text-white font-bold hover:text-orange-500 transition-colors flex items-center gap-2">
                  Read More →
                </button>
                <button 
                  onClick={() => handleLike(blog.id)}
                  className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  ❤️ {blog.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}