import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mover",
      subtitle: "Data-Driven Solutions for Climate Change",
      category: "Data Analytics Platform",
      duration: "Nov 2023 – Dec 2023",
      association: "Zenius Education – MSIB Batch 5 Independent Study Program",
      status: "Completed",
      description: "Mover is a collaborative climate-focused data analytics project developed during the Zenius Independent Study Program. The project aims to promote sustainable transportation and environmental awareness through data-driven insights, interactive visualization, and machine learning approaches.\n\nThe platform focuses on climate change issues, pollution reduction, and sustainable development by encouraging the use of public transportation to minimize fuel consumption and environmental impact.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2832&auto=format&fit=crop", // Futuristic climate/weather analytics
      tags: [
        "Data Analytics",
        "Machine Learning",
        "Climate Change",
        "Sustainability",
        "Dashboard Visualization",
        "Public Transportation",
        "Data-Driven Solutions"
      ],
      github: "https://github.com/rizkyjisantt-dev/Mover",
      demo: null
    },
    {
      title: "Rainfall Prediction",
      subtitle: "Using Ensemble SVR",
      category: "Thesis Project",
      status: "Deployed",
      description: "This thesis project focuses on rainfall forecasting using Ensemble Support Vector Regression (SVR) with multivariate weather data from BMKG Perak I Meteorological Station.\n\nThe project includes exploratory data analysis, preprocessing, feature engineering, bootstrap ensemble methods, hyperparameter optimization, and rainfall prediction evaluation using MAE and RMSE metrics. The application is deployed using Streamlit for interactive forecasting and visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2832&auto=format&fit=crop", // Dark tech dashboard
      tags: [
        "Machine Learning",
        "Ensemble SVR",
        "Weather Forecasting",
        "Streamlit",
        "Data Preprocessing",
        "Python",
        "Meteorological Data"
      ],
      github: "https://github.com/rizkyjisantt-dev/Rainfall-Prediction-Using-Ensemble-SVR",
      demo: "https://prediksi-cuaca-dengan-ensemblesvr.streamlit.app/"
    },
    {
      title: "Warung Ijo Bu Nik System",
      subtitle: "Web-Based Business Application",
      category: "Web Application System",
      role: "Product Owner",
      status: "Agile Development",
      description: "This project is a web-based business management system developed for Warung Ijo Bu Nik using Agile methodology. The system aims to improve operational efficiency through digital order management, inventory tracking, and user-friendly business processes.\n\nThe development process followed Agile principles with sprint planning, daily collaboration, iterative improvements, and continuous feedback to deliver a modern and efficient business solution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2832&auto=format&fit=crop", // Business analytics dashboard
      tags: [
        "React / Vue.js",
        "Node.js",
        "PHP",
        "Django / Flask",
        "MySQL",
        "PostgreSQL",
        "Agile Methodology",
        "Git & GitHub"
      ],
      github: "https://github.com/rizkyjisantt-dev/WarungIjo-Web-Based-Application-System-with-Agile-Method",
      demo: null
    },
    {
      title: "AFF 2020 Sentiment Analysis",
      subtitle: "Indonesian National Football Team",
      category: "Machine Learning & NLP",
      status: "Completed",
      description: "This project analyzes public sentiment toward the Indonesian National Football Team during the AFF Championship 2020 using Natural Language Processing and the K-Nearest Neighbors (KNN) algorithm.\n\nThe project includes Twitter data collection, preprocessing, TF-IDF feature extraction, sentiment classification, and evaluation using accuracy, precision, recall, and F1-score metrics.",
      image: "https://asset.indosport.com/article/image/q/80/336760/timnas_indonesia_raih_gelar_runner_up-169.jpg?w=750&h=423&t=123", // Real AFF 2020 Team image
      tags: [
        "Python",
        "NLP",
        "KNN",
        "Scikit-learn",
        "TF-IDF",
        "Pandas",
        "NLTK",
        "Data Visualization"
      ],
      github: "https://github.com/rizkyjisantt-dev/sentimen-timnas-indonesia-aff2020-knn",
      demo: null
    },
    {
      title: "Sunan Drajat Tourism",
      subtitle: "Sentiment Analysis Using KNN",
      category: "Tourism Analytics",
      status: "Completed",
      description: "This project focuses on analyzing public sentiment toward Sunan Drajat tourism in Lamongan using the K-Nearest Neighbors (KNN) algorithm.\n\nThe project includes text preprocessing, exploratory data analysis, TF-IDF feature extraction, sentiment classification, and visualization to identify visitor satisfaction trends and tourism insights.",
      image: "/sunan_drajat.png", // Custom AI generated Sunan Drajat complex with analytics
      tags: [
        "Python",
        "KNN",
        "NLP",
        "TF-IDF",
        "Scikit-learn",
        "Data Analysis",
        "Tourism Analytics"
      ],
      github: "https://github.com/rizkyjisantt-dev/sentiment-analysis-sunan-drajat",
      demo: null
    },
    {
      title: "Prediction of Heart Failure",
      subtitle: "Machine Learning Web Application",
      category: "Healthcare Analytics",
      status: "Deployed",
      description: "This project is a machine learning-based web application for predicting heart failure using clinical health data. The application implements multiple machine learning algorithms including Gaussian Naive Bayes, K-Nearest Neighbors, and Decision Tree Classifier.\n\nThe platform provides interactive prediction features, preprocessing visualization, model comparison, and healthcare-focused analytical insights through a modern web interface.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2832&auto=format&fit=crop", // Futuristic healthcare tech
      tags: [
        "Python",
        "Machine Learning",
        "Streamlit",
        "KNN",
        "Decision Tree",
        "Naive Bayes",
        "Healthcare Analytics",
        "Data Visualization"
      ],
      github: "https://github.com/rizkyjisantt-dev/Prediction-of-Heart-Failure",
      demo: "https://rizkyjisantt-dev.github.io/Prediction-of-Heart-Failure/"
    }
  ];

  return (
    <section className="py-32 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-neon-cyan">Featured</span> Projects
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full shadow-neon-purple"></div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center group`}
            >
              {/* Image Container with Floating and Gradient Border */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full md:w-3/5 relative p-[2px] rounded-3xl group/image cursor-pointer"
              >
                {/* Simulated Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-accent-purple to-neon-cyan rounded-3xl opacity-40 group-hover/image:opacity-100 blur-[2px] transition-all duration-700 bg-[length:200%_auto] group-hover/image:bg-right" />

                {/* Inner Image Wrapper */}
                <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden glass z-10 bg-black/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay z-10 group-hover/image:opacity-0 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out grayscale-[40%] group-hover/image:grayscale-0"
                  />

                  {/* Overlay subtle glow */}
                  <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-color z-10 group-hover/image:opacity-0 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              {/* Content Container */}
              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start text-left'}`}>

                {/* Badges */}
                <div className={`flex flex-wrap items-center gap-3 mb-6 ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-neon-cyan font-space tracking-wider uppercase text-sm font-bold shadow-[0_0_10px_rgba(0,245,255,0.1)] px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(123,47,247,0.2)]">
                      <Activity className="w-3 h-3" />
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-accent-purple transition-all duration-300 leading-tight">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <h4 className="text-xl md:text-2xl font-medium text-gray-300 font-space mt-2">
                      {project.subtitle}
                    </h4>
                  )}
                </div>

                {(project.duration || project.association || project.role) && (
                  <div className={`flex flex-col gap-1.5 mb-6 ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start text-left'}`}>
                    {project.duration && <p className="text-sm font-bold text-accent-purple tracking-widest uppercase">{project.duration}</p>}
                    {project.role && <p className="text-sm font-bold text-neon-cyan tracking-widest uppercase">Role: {project.role}</p>}
                    {project.association && <p className="text-sm text-neon-cyan/80 font-medium">{project.association}</p>}
                  </div>
                )}

                <div className="glass-card p-6 md:p-8 rounded-2xl mb-8 relative z-20 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                {/* Highlight Tags */}
                <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                  {project.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-white/5 border border-white/10 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-4 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'} w-full`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 rounded-full glass hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300" title="View Source on GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 rounded-full glass hover:bg-accent-purple/10 hover:text-accent-purple hover:border-accent-purple/50 hover:shadow-[0_0_15px_rgba(123,47,247,0.3)] transition-all duration-300" title="View Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
