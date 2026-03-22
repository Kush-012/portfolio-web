import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Roadmap() {
  const { role } = useParams()
  const navigate = useNavigate()

  const selectedRole = role || 'data-science'

  const roadmaps = {
    'data-science': {
      title: 'Data Science Roadmap',
      sections: [
        {
          name: 'Core Skills',
          boxes: [
            { name: 'Python', items: ['Syntax', 'Data Structures', 'Functions'] },
            { name: 'SQL', items: ['Queries', 'Joins', 'Aggregations'] }
          ]
        },
        {
          name: 'Statistics',
          boxes: [
            { name: 'Descriptive Stats', items: ['Mean, Median, Mode', 'Variance', 'Std Deviation'] },
            { name: 'Probability', items: ['Distributions', 'Bayes Theorem'] },
            { name: 'Correlation', items: ['Pearson', 'Spearman'] }
          ]
        },
        {
          name: 'Data Analysis',
          boxes: [
            { name: 'NumPy', items: ['Arrays', 'Operations', 'Broadcasting'] },
            { name: 'Pandas', items: ['DataFrames', 'Series', 'Grouping'] },
            { name: 'Data Cleaning', items: ['Missing values', 'Outliers', 'Normalization'] }
          ]
        },
        {
          name: 'Visualization',
          boxes: [
            { name: 'Matplotlib', items: ['Plots', 'Charts', 'Customization'] },
            { name: 'Seaborn', items: ['Statistical plots', 'Heatmaps'] },
            { name: 'Power BI', items: ['Dashboards', 'Reports'] }
          ]
        },
        {
          name: 'Machine Learning',
          boxes: [
            { name: 'scikit-learn', items: ['Model training', 'Pipelines'] },
            { name: 'Regression', items: ['Linear', 'Polynomial'] },
            { name: 'Classification', items: ['Logistic', 'SVM', 'KNN'] },
            { name: 'Clustering', items: ['K-Means', 'DBSCAN'] }
          ]
        },
        {
          name: 'Tools',
          boxes: [
            { name: 'Excel', items: ['Pivot Tables', 'Lookups', 'Formulas'] },
            { name: 'Jupyter Notebook', items: ['Interactive coding', 'Documentation'] }
          ]
        },
        {
          name: 'Output & Sharing',
          boxes: [
            { name: 'Dashboards', items: ['Interactive visuals', 'KPIs'] },
            { name: 'Reports', items: ['Documentation', 'Insights'] },
            { name: 'GitHub', items: ['Version control', 'Collaboration'] }
          ]
        },
        {
          name: 'Projects',
          boxes: [
            { name: 'Real-world Projects', items: ['Apply all skills', 'Build portfolio'] }
          ]
        }
      ]
    },
    'full-stack': {
      title: 'Full Stack Developer Roadmap',
      sections: [
        {
          name: 'Frontend',
          boxes: [
            { name: 'Languages', items: ['HTML', 'CSS', 'JavaScript'] },
            { name: 'CSS Libraries / Frameworks', items: ['Tailwind CSS', 'Bootstrap'] },
            { name: 'JS Libraries / Frameworks', items: ['React', 'Next.js'] }
          ]
        },
        {
          name: 'Backend',
          boxes: [
            { name: 'Runtime / Languages', items: ['Node.js', 'PHP'] },
            { name: 'Frameworks', items: ['Express.js', 'Laravel'] }
          ]
        },
        {
          name: 'Database',
          boxes: [
            { name: 'SQL', items: ['MySQL', 'PostgreSQL'] },
            { name: 'NoSQL', items: ['MongoDB'] }
          ]
        },
        {
          name: 'API Development',
          boxes: [
            { name: 'REST APIs', items: ['GET, POST, PUT', 'DELETE'] },
            { name: 'GraphQL', items: ['Queries', 'Mutations'] }
          ]
        },
        {
          name: 'Security & Authentication',
          boxes: [
            { name: 'Authentication', items: ['JWT', 'OAuth', 'Tokens'] },
            { name: 'Authorization', items: ['Role-based access', 'Permissions'] }
          ]
        },
        {
          name: 'DevOps',
          boxes: [
            { name: 'Version Control', items: ['Git & GitHub'] },
            { name: 'Containerization', items: ['Docker'] },
            { name: 'CI / CD', items: ['GitHub Actions', 'GitLab CI'] },
            { name: 'Cloud Platforms', items: ['AWS', 'Firebase', 'Vercel'] }
          ]
        },
        {
          name: 'Deployment',
          boxes: [
            { name: 'Platforms', items: ['Vercel', 'AWS', 'Firebase', 'Netlify'] }
          ]
        }
      ]
    },
    'ai-ml': {
      title: 'AI / ML Engineer Roadmap',
      sections: [
        {
          name: 'Programming',
          boxes: [
            { name: 'Python', items: ['Advanced syntax', 'OOP', 'Libraries'] },
            { name: 'SQL', items: ['Basic queries', 'Data retrieval'] }
          ]
        },
        {
          name: 'Mathematics (Required)',
          boxes: [
            { name: 'Statistics', items: ['Mean, Variance', 'Probability', 'Distributions'] },
            { name: 'Linear Algebra', items: ['Vectors', 'Matrices', 'Operations'] }
          ]
        },
        {
          name: 'Data Handling',
          boxes: [
            { name: 'NumPy', items: ['Arrays', 'Mathematical ops'] },
            { name: 'Pandas', items: ['DataFrames', 'Manipulation'] },
            { name: 'Data Cleaning', items: ['Missing values', 'Feature scaling', 'Encoding'] }
          ]
        },
        {
          name: 'Data Visualization',
          boxes: [
            { name: 'Matplotlib', items: ['Basic plots', 'Customization'] },
            { name: 'Seaborn', items: ['Statistical viz', 'Distributions'] }
          ]
        },
        {
          name: 'Machine Learning',
          boxes: [
            { name: 'scikit-learn', items: ['Model training', 'Evaluation'] },
            { name: 'Supervised Learning', items: ['Linear Regression', 'Logistic Regression', 'Decision Tree'] },
            { name: 'Unsupervised Learning', items: ['K-Means', 'PCA'] }
          ]
        },
        {
          name: 'Advanced ML',
          boxes: [
            { name: 'Ensemble Methods', items: ['Random Forest', 'XGBoost'] },
            { name: 'Model Evaluation', items: ['Accuracy', 'Precision / Recall', 'Confusion Matrix'] }
          ]
        },
        {
          name: 'Deep Learning',
          boxes: [
            { name: 'Frameworks', items: ['TensorFlow', 'PyTorch'] },
            { name: 'Neural Networks', items: ['Architecture', 'Training'] },
            { name: 'CNN', items: ['Image processing', 'Classification'] },
            { name: 'RNN / LSTM', items: ['Text analysis', 'Time-Series'] }
          ]
        },
        {
          name: 'Specialized Domains',
          boxes: [
            { name: 'NLP', items: ['NLTK', 'spaCy', 'Transformers'] },
            { name: 'Computer Vision', items: ['OpenCV', 'Image processing'] }
          ]
        },
        {
          name: 'Model Deployment',
          boxes: [
            { name: 'API Development', items: ['Flask', 'FastAPI'] },
            { name: 'Containerization', items: ['Docker'] },
            { name: 'Cloud', items: ['AWS', 'GCP'] }
          ]
        },
        {
          name: 'MLOps',
          boxes: [
            { name: 'Version Control', items: ['Git & GitHub'] },
            { name: 'CI/CD', items: ['Automation', 'Testing'] },
            { name: 'Monitoring', items: ['Model performance', 'Drift detection'] }
          ]
        },
        {
          name: 'Projects',
          boxes: [
            { name: 'Build & Deploy', items: ['End-to-end ML projects', 'Portfolio'] }
          ]
        }
      ]
    }
  }

  const currentRoadmap = roadmaps[selectedRole]

  const handleRoleChange = (newRole) => {
    navigate(`/roadmap/${newRole}`)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6 sm:p-8">
      <div className="max-w-7xl mx-auto">

        {/* ===== Mobile Role Selector (Top Tabs) ===== */}
        <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 mb-6">
          {['data-science', 'full-stack', 'ai-ml'].map(r => (
            <button
              key={r}
              onClick={() => handleRoleChange(r)}
              className={`px-4 py-2 whitespace-nowrap rounded-full border text-sm font-medium transition
                ${
                  selectedRole === r
                    ? 'border-green-500 bg-green-500/10 text-green-400'
                    : 'border-gray-700 text-gray-400'
                }`}
            >
              {r === 'data-science' && 'Data Science'}
              {r === 'full-stack' && 'Full Stack'}
              {r === 'ai-ml' && 'AI / ML'}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ===== Desktop Sidebar ===== */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              <h1 className="text-2xl font-bold">Select Roadmap</h1>

              {['data-science', 'full-stack', 'ai-ml'].map(r => (
                <button
                  key={r}
                  onClick={() => handleRoleChange(r)}
                  className={`w-full p-4 rounded-xl border transition
                    ${
                      selectedRole === r
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-700 bg-gray-800/50'
                    }`}
                >
                  <h3 className="font-semibold text-lg">
                    {r === 'data-science' && 'Data Science'}
                    {r === 'full-stack' && 'Full Stack'}
                    {r === 'ai-ml' && 'AI / ML'}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* ===== Roadmap Content ===== */}
          <div className="flex-1">
            <div className="bg-gray-800 rounded-xl p-4 sm:p-8 shadow-xl">

              <h2 className="text-xl sm:text-3xl font-bold text-green-400 border-b border-green-500 pb-4 text-center">
                {currentRoadmap.title}
              </h2>

              <div className="space-y-10 mt-8">
                {currentRoadmap.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>

                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 text-gray-900 rounded-full flex items-center justify-center font-bold">
                        {sectionIndex + 1}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-green-400">
                        {section.name}
                      </h3>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.boxes.map((box, boxIndex) => (
                        <div
                          key={boxIndex}
                          className="bg-gray-700 rounded-lg p-4 border border-green-500/30 hover:border-green-500 transition"
                        >
                          <h4 className="text-green-300 font-semibold mb-3 border-b border-green-500/30 pb-1">
                            {box.name}
                          </h4>

                          <ul className="space-y-2 text-sm text-gray-300">
                            {box.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex gap-2">
                                <span className="w-1.5 h-1.5 mt-2 bg-green-400 rounded-full" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}