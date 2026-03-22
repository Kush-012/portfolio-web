import { useState } from "react";

export default function HRInterviewPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const hrQuestions = [
    {
      id: 1,
      question: "Tell me about yourself.",
      answer: "I'm a Computer Science final year student at IIT Delhi with strong DSA skills. Consistently solved 300+ LeetCode problems and built a task management app using React. Seeking to apply my technical skills in real-world projects."
    },
    {
      id: 2,
      question: "Why do you want to work at Amazon?",
      answer: "I admire Amazon's focus on customer obsession and innovation. The scale of technical challenges here would accelerate my learning. My DSA skills align well with Amazon's problem-solving culture."
    },
    {
      id: 3,
      question: "What are your strengths and weaknesses?",
      answer: "Strengths: Quick learner and problem-solver. Weakness: Sometimes overthink solutions. I'm improving by focusing on MVP first."
    },
    {
      id: 4,
      question: "Where do you see yourself in 5 years?",
      answer: "As a senior engineer contributing to core product features. I aim to lead small projects while continuing to learn new technologies."
    },
    {
      id: 5,
      question: "Why should we hire you?",
      answer: "I combine strong DSA fundamentals with hands-on project experience. My consistency in coding practice shows dedication. I'll quickly adapt and contribute to your team."
    },
    {
      id: 6,
      question: "Describe a challenging situation.",
      answer: "During a hackathon, our API failed hours before submission. I debugged the issue, found a timeout problem, and implemented retry logic. We submitted successfully."
    },
    {
      id: 7,
      question: "What are your salary expectations?",
      answer: "Based on current market standards for freshers, I expect around ₹12-15 LPA. I'm flexible and value learning opportunities."
    },
    {
      id: 8,
      question: "How do you handle failure?",
      answer: "I analyze what went wrong and document learnings. Recently failed a coding test, practiced that topic specifically, and improved."
    },
    {
      id: 9,
      question: "Do you have any questions for us?",
      answer: "What are growth opportunities for freshers? How does your team handle technical decisions? What's the onboarding process like?"
    },
    {
      id: 10,
      question: "How do you stay updated?",
      answer: "Daily LeetCode practice. Follow tech blogs and build small projects with new tools. Participate in coding communities."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">
            <span className="text-white">HR Interview</span>
            <span className="text-green-400 ml-2">Prep</span>
          </h1>
          <p className="text-gray-400">Essential questions with concise answers for students</p>
        </div>

        {/* Questions Grid */}
        <div className="space-y-3">
          {hrQuestions.map((q, index) => (
            <div key={q.id} className="border border-gray-700 rounded-lg overflow-hidden">
              
              {/* Question */}
              <div 
                className="p-4 bg-gray-800/50 cursor-pointer hover:bg-gray-800 transition"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                      <span className="text-green-400 font-bold">{q.id}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">{q.question}</h3>
                  </div>
                  <div className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Answer */}
              {openIndex === index && (
                <div className="p-4 bg-gray-800/30 border-t border-gray-700">
                  <div className="text-gray-300 leading-relaxed">
                    {q.answer}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <span className="text-sm text-green-400 font-medium">Tip:</span>
                    <span className="text-sm text-gray-400 ml-2">Customize with your experiences</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 p-4 bg-gray-800/30 rounded-lg border border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Practice answers aloud. Be authentic. Focus on clarity and confidence.
          </p>
        </div>

      </div>
    </div>
  );
}