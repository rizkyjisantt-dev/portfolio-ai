import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Award, Shield, Heart, HandHeart, Globe, Target, Briefcase,
  Star, Calendar, Sparkles, Sprout, Landmark, Gift, Coins, Compass,
  Brain, CheckCircle2, ArrowUpRight
} from 'lucide-react';

const OrgVolunteer = () => {
  const [activeTab, setActiveTab] = useState('volunteer'); // 'volunteer' or 'organization'
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const volunteers = [
    {
      role: "Election Operations Staff",
      org: "Komisi Pemilihan Umum Republik Indonesia (KPU RI)",
      duration: "Dec 2023 – Feb 2024",
      category: "Public Operations",
      description: "Coordinated localized voting operations and secure logistics tallies during the Indonesian General Election, ensuring complete transparency.",
      highlights: [
        "Ensured strict security and verification protocol compliance for 300+ election ballots.",
        "Collaborated with a 7-person team to process and log tallies under time-critical national deadlines."
      ],
      icon: <Landmark className="w-5 h-5" />,
      color: "#00F5FF" // Neon Cyan
    },
    {
      role: "Community Development Specialist",
      org: "Forum Nasional Mahasiswa Lamongan",
      duration: "Jan 2024",
      category: "Sustainable Development",
      description: "Designed community educational outreach campaigns on sustainable farming, organic fertilization, and environmental protection.",
      highlights: [
        "Led organic fertilizer workshops for 40+ local farmers to advocate eco-friendly, cost-effective agricultural practices.",
        "Co-launched a village eco-awareness program, upgrading regional organic waste management workflows."
      ],
      icon: <Sprout className="w-5 h-5" />,
      color: "#4ade80" // Green
    },
    {
      role: "Field Team Leader",
      org: "LPPM Universitas Trunojoyo Madura",
      duration: "Jul 2023",
      category: "Community Empowerment",
      description: "Directed a multi-disciplinary student field team implementing community development projects and digital uplift programs.",
      highlights: [
        "Managed 15 engineering and social specialists executing village digital literacy and sustainable waste initiatives.",
        "Collaborated directly with village heads to align projects with community goals, benefiting 100+ local residents."
      ],
      icon: <Users className="w-5 h-5" />,
      color: "#facc15" // Yellow
    },
    {
      role: "Career Preparation Event Committee",
      org: "Google Developer Groups on Campus - ITTS x UTM",
      duration: "May 2023",
      category: "Talent Acceleration",
      description: "Co-hosted and organized an engineering career accelerator day for tech student recruitment and skill alignment.",
      highlights: [
        "Managed logistical setups and check-in pipelines for over 150+ engineering students.",
        "Facilitated seamless guest relations for senior tech industry representatives and software leaders."
      ],
      icon: <Briefcase className="w-5 h-5" />,
      color: "#7B2FF7" // Purple
    },
    {
      role: "Corporate Partnership Specialist",
      org: "UKM Triple-C UTM",
      duration: "Jul 2022 – Oct 2022",
      category: "Fundraising & Sponsorship",
      description: "Acquired critical event sponsorships and resources for a national Society 5.0 technology championship.",
      highlights: [
        "Authored and pitched competitive proposals to institutional and regional technology sponsors.",
        "Aided in raising external budgets, maximizing organizational resource margins by over 20%."
      ],
      icon: <Coins className="w-5 h-5" />,
      color: "#ec4899" // Pink
    },
    {
      role: "Guest Liaison Officer",
      org: "HIMATIF UTM",
      duration: "Jun 2022 – Sep 2022",
      category: "Stakeholder Coordination",
      description: "Coordinated communications and scheduling for high-profile tech keynote speakers and guest delegates.",
      highlights: [
        "Managed hospitality and itinerary tracking for 10+ external delegates and high-profile keynote speakers.",
        "Resolved real-time logistical challenges, keeping events running 100% on schedule."
      ],
      icon: <Compass className="w-5 h-5" />,
      color: "#38bdf8" // Cyan/Blue
    },
    {
      role: "Organizing Committee Chairman",
      org: "IKAMALA UTM",
      duration: "Feb 2022 – Mar 2022",
      category: "Event Management",
      description: "Spearheaded the planning, budget control, and operational execution of a regional student esports championship.",
      highlights: [
        "Supervised a 20+ member organizing staff across technical, broadcast, and operational units.",
        "Successfully hosted 32 competitive teams, securing high participant engagement and positive reviews."
      ],
      icon: <Star className="w-5 h-5" />,
      color: "#fbbf24" // Amber
    },
    {
      role: "Fundraising Associate",
      org: "FORNASMALA",
      duration: "Dec 2021 – Feb 2022",
      category: "Sponsorship & Outreach",
      description: "Secured corporate funding and brand positioning for a major regional educational exposition.",
      highlights: [
        "Identified and conducted outreach to 15+ potential institutional partners, securing cash and in-kind agreements.",
        "Collaborated with public relations staff to maximize sponsor exposure value throughout the expo."
      ],
      icon: <Gift className="w-5 h-5" />,
      color: "#f472b6" // Rose
    }
  ];

  const organizations = [
    {
      role: "Community Service Department Member",
      org: "FORNASMALA (Forum Nasional Mahasiswa Lamongan)",
      duration: "Aug 2022 – Aug 2024",
      category: "Social Empowerment",
      description: "Directed regional social outreach and sustainable village development operations to boost civic capabilities.",
      highlights: [
        "Executed 5+ community outreach initiatives, connecting university resources to underprivileged rural villages.",
        "Negotiated directly with local administrative heads to optimize distribution logistics and program approvals."
      ],
      icon: <HandHeart className="w-5 h-5" />,
      color: "#4ade80" // Green
    },
    {
      role: "Human Resource Development (PSDM) Officer",
      org: "PAC IPNU-IPPNU Kecamatan Lamongan",
      duration: "Mar 2022 – Mar 2024",
      category: "Leadership Development",
      description: "Structured developmental curricula focusing on youth leadership, organizational science, and digital tools.",
      highlights: [
        "Formulated modular training paths, boosting active member retention and workshop attendance by 25%.",
        "Co-organized 4 large-scale development conferences, empowering 80+ active participants."
      ],
      icon: <Shield className="w-5 h-5" />,
      color: "#facc15" // Yellow
    },
    {
      role: "Co-Lead of External Affairs",
      org: "Google Developer Groups on Campus (GDGoC) UTM",
      duration: "Sep 2022 – Aug 2023",
      category: "Industry Partnerships",
      description: "Directed external developer outreach, media sponsorships, and corporate brand collaborations.",
      highlights: [
        "Pioneered outreach to 8+ tech media partners, expanding GDSC UTM's community audience by 300+ people.",
        "Orchestrated cross-university collaborative hackathons, supervising resource sharing and branding logistics."
      ],
      icon: <Globe className="w-5 h-5" />,
      color: "#00F5FF" // Neon Cyan
    },
    {
      role: "Education Division Specialist",
      org: "IKAMALA UTM",
      duration: "Jan 2022 – Feb 2023",
      category: "Strategic Research & Writing",
      description: "Facilitated academic enrichment programs, research discussions, and strategic writing workshops.",
      highlights: [
        "Moderated 6+ strategic discussion forums on technology and research methodologies for 50+ members.",
        "Mentored junior scholars in formal writing, boosting student paper submissions for university events."
      ],
      icon: <Brain className="w-5 h-5" />,
      color: "#7B2FF7" // Purple
    },
    {
      role: "Talent & Member Engagement Officer",
      org: "IKAMALA UTM",
      duration: "Dec 2020 – Jan 2022",
      category: "Member Engagement",
      description: "Developed engagement pipelines and events to align member skillsets with team project requirements.",
      highlights: [
        "Coordinated artistic and technical skill showcases, growing active student membership participation by 30%.",
        "Administered tracking matrices to record growth metrics across 50+ general members."
      ],
      icon: <Target className="w-5 h-5" />,
      color: "#ec4899" // Pink
    }
  ];

  const currentDataset = activeTab === 'volunteer' ? volunteers : organizations;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-28 relative z-10 overflow-hidden" id="organization">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-accent-purple to-pink-500">
              Leadership & Impact
            </span>
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-neon-cyan via-accent-purple to-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,245,255,0.4)]"></div>
          <p className="text-gray-400 mt-4 text-sm md:text-base font-sans max-w-xl mx-auto">
            Extensive background driving community programs, leading stakeholder collaborations, and executing tech events.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-20">
          <div className="flex p-1.5 rounded-2xl bg-secondary/80 border border-white/5 backdrop-blur-md relative">
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-space font-semibold transition-all duration-300 relative z-10 ${activeTab === 'volunteer' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
            >
              <HandHeart className="w-4 h-4" />
              <span>Volunteer Missions</span>
              <span className="px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-neon-cyan">8</span>
            </button>
            <button
              onClick={() => setActiveTab('organization')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-space font-semibold transition-all duration-300 relative z-10 ${activeTab === 'organization' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
            >
              <Users className="w-4 h-4" />
              <span>Organizational Tenures</span>
              <span className="px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-pink-400">5</span>
            </button>

            {/* Animated Tab Background Pill */}
            <motion.div
              layoutId="activeTabPill"
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(0,0,0,0.6)]"
              style={{
                left: activeTab === 'volunteer' ? '6px' : 'calc(50% + 3px)',
                width: 'calc(50% - 9px)'
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          </div>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Tracker Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-[1px] bg-gradient-to-b from-neon-cyan via-accent-purple to-pink-500 opacity-20 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-12"
            >
              {currentDataset.map((item, index) => {
                const isEven = index % 2 === 0;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`flex flex-col md:flex-row items-stretch relative ${isEven ? 'md:flex-row-reverse' : ''
                      }`}
                  >
                    {/* Timeline Node Point (Center alignment) */}
                    <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-20 pointer-events-none">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.3 : 1,
                          borderColor: isHovered ? item.color : 'rgba(255,255,255,0.15)',
                          boxShadow: isHovered
                            ? `0 0 15px ${item.color}, inset 0 0 8px ${item.color}`
                            : '0 0 0px transparent'
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 rounded-full bg-[#050816] border-2 flex items-center justify-center"
                        style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                      >
                        <motion.div
                          animate={{
                            backgroundColor: isHovered ? item.color : 'rgba(255,255,255,0.3)'
                          }}
                          className="w-1.5 h-1.5 rounded-full"
                        />
                      </motion.div>
                    </div>

                    {/* Left/Right Card Columns */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 flex flex-col justify-center">
                      <div className="relative group rounded-3xl p-[1px] overflow-hidden transition-all duration-500 h-full">
                        {/* Shifting Glow Background border */}
                        <div
                          className="absolute -inset-0.5 rounded-3xl blur opacity-10 group-hover:opacity-60 transition duration-500 group-hover:duration-200"
                          style={{
                            background: `linear-gradient(90deg, ${item.color}30, ${item.color}, #7B2FF740)`
                          }}
                        />

                        {/* Experience Card body */}
                        <div className="relative h-full bg-[#0B1120]/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                          {/* Inner Radial Glow Spot */}
                          <div
                            className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                            style={{ backgroundColor: item.color }}
                          />

                          <div>
                            {/* Card Header Info */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                              <span
                                className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest rounded-lg border uppercase"
                                style={{
                                  color: item.color,
                                  borderColor: `${item.color}30`,
                                  backgroundColor: `${item.color}05`
                                }}
                              >
                                {item.category}
                              </span>
                              <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{item.duration}</span>
                              </div>
                            </div>

                            {/* Core Title Info */}
                            <div className="flex items-start gap-4 mb-4">
                              <div
                                className="p-3 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500"
                                style={{
                                  color: isHovered ? item.color : '#94a3b8',
                                  boxShadow: isHovered ? `0 0 15px ${item.color}25` : 'none'
                                }}
                              >
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="text-lg md:text-xl font-space font-bold text-white leading-snug group-hover:text-white transition-colors">
                                  {item.role}
                                </h4>
                                <h5 className="text-sm font-medium text-gray-400 mt-1">
                                  {item.org}
                                </h5>
                              </div>
                            </div>

                            {/* Brief Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                              {item.description}
                            </p>

                            {/* High-Impact Highlights Bullets */}
                            <ul className="space-y-3">
                              {item.highlights.map((bullet, bulletIdx) => (
                                <li key={bulletIdx} className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
                                  <CheckCircle2
                                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                                    style={{ color: item.color }}
                                  />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Futuristic interactive details */}
                          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                            <span>LEVEL: EXEC_LEADERSHIP</span>
                            <span
                              className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ color: item.color }}
                            >
                              <span>Explore Details</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Empty placeholder Column to preserve timeline layout */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OrgVolunteer;
