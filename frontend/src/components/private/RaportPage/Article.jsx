import React from 'react';


export default function CareerBlogPage() {
  const articles = [
    {
      category: "Quiz",
      date: "Nov 15, 2024",
      title: "Test Your Brainpower",
      excerpt: "50"
    },
    {
      category: "Quiz", 
      date: "Nov 10, 2024",
      title: "How Much Do You Really Know",
      excerpt: "90"
    },
    {
      category: "Quiz",
      date: "Nov 18, 2024", 
      title: "Think Fast: Trivia Challenge",
      excerpt: "90"
    },
    {
      category: "Quiz",
      date: "Nov 14, 2024",
      title: "Quick Facts Quiz", 
      excerpt: "90"
    },
    {
      category: "Quiz",
      date: "Nov 16, 2024",
      title: "Smart or Lucky",
      excerpt: "90"
    },
    {
      category: "Quiz", 
      date: "Nov 19, 2024",
      title: "Ultimate General Knowledge Quiz",
      excerpt: "90"
    },
    {
      category: "Quiz",
      date: "Nov 14, 2024",
      title: "Who Wants to Be a Quiz Master?",
      excerpt: "90"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        

        {/* Articles Grid */}
        <section className="flex-1 grid gap-6">
          {articles.map((article, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <button className="flex items-center text-blue-600 font-medium text-sm hover:text-blue-700">Score :&nbsp; 
                    {article.excerpt}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>     
    </div>
  );
}
