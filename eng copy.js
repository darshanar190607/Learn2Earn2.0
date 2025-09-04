// Engineering Fields Data
const engineeringFields = [
  {
    id: "computer-science",
    title: "Computer Science",
    description: "Develop software, algorithms, and computing systems to solve complex problems.",
    color: "#61DAFB",
    icon: "💻",
    longDescription: "Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems including their theory, design, development, and application.",
    careers: [
      {
        title: "Software Engineer",
        description: "Design and develop applications and systems using various programming languages and frameworks.",
        salary: "$105,000 - $150,000"
      },
      {
        title: "Data Scientist",
        description: "Analyze and interpret complex data to help organizations make better decisions.",
        salary: "$120,000 - $165,000"
      },
      {
        title: "AI/ML Engineer",
        description: "Develop systems and applications that utilize artificial intelligence and machine learning.",
        salary: "$125,000 - $175,000"
      }
    ],
    domains: [
      {
        name: "Artificial Intelligence",
        description: "Development of systems that can perform tasks that typically require human intelligence."
      },
      {
        name: "Cybersecurity",
        description: "Protection of computer systems, networks, and data from digital attacks and unauthorized access."
      },
      {
        name: "Cloud Computing",
        description: "Delivery of computing services over the internet, including servers, storage, databases, and software."
      },
      {
        name: "Full Stack Development",
        description: "Design and development of complete web applications, from database to user interface."
      },
      {
        name: "Data Science",
        description: "Extraction of knowledge and insights from structured and unstructured data."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in programming, algorithms, data structures, and computer systems.",
        subjects: ["Programming", "Data Structures", "Algorithms", "Computer Architecture", "Database Systems"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of computer science.",
        subjects: ["Machine Learning", "Advanced Algorithms", "Computer Graphics", "Distributed Systems", "Data Mining"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of computer science.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "electrical-engineering",
    title: "Electrical Engineering",
    description: "Design and develop electrical systems, from power generation to electronic devices.",
    color: "#FFD700",
    icon: "⚡",
    longDescription: "Electrical Engineering is a field that deals with the study and application of electricity, electronics, and electromagnetism. It covers a wide range of technologies including power generation, transmission and distribution, electronics, control systems, and telecommunications.",
    careers: [
      {
        title: "Power Systems Engineer",
        description: "Design and maintain electrical power generation and distribution systems.",
        salary: "$95,000 - $130,000"
      },
      {
        title: "Electronics Engineer",
        description: "Design and develop electronic circuits, components, and systems.",
        salary: "$90,000 - $140,000"
      },
      {
        title: "Control Systems Engineer",
        description: "Develop systems that control the behavior of other devices or systems.",
        salary: "$100,000 - $135,000"
      }
    ],
    domains: [
      {
        name: "Power Systems",
        description: "Generation, transmission, and distribution of electrical power."
      },
      {
        name: "Electronics",
        description: "Design and development of electronic circuits and devices."
      },
      {
        name: "Control Systems",
        description: "Design of systems that manage, command, direct, or regulate the behavior of other devices or systems."
      },
      {
        name: "Telecommunications",
        description: "Transmission of information across channels such as copper wire, optical fiber, or free space."
      },
      {
        name: "Signal Processing",
        description: "Analysis, modification, and synthesis of signals such as sound, images, and scientific measurements."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in electrical circuits, electronics, electromagnetics, and signal processing.",
        subjects: ["Circuit Theory", "Digital Electronics", "Electromagnetics", "Signal Processing", "Control Systems"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of electrical engineering.",
        subjects: ["Advanced Power Systems", "VLSI Design", "Wireless Communications", "Digital Signal Processing", "Embedded Systems"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of electrical engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical Engineering",
    description: "Design and analyze mechanical systems, from engines to manufacturing processes.",
    color: "#FF6B6B",
    icon: "⚙️",
    longDescription: "Mechanical Engineering is one of the broadest and oldest branches of engineering. It involves the design, analysis, manufacturing, and maintenance of mechanical systems. It requires a solid understanding of core concepts including mechanics, kinematics, thermodynamics, materials science, and structural analysis.",
    careers: [
      {
        title: "Mechanical Design Engineer",
        description: "Design mechanical components, devices, and systems using CAD tools.",
        salary: "$85,000 - $125,000"
      },
      {
        title: "Thermal Engineer",
        description: "Design and analyze systems involving heat transfer and fluid flow.",
        salary: "$90,000 - $130,000"
      },
      {
        title: "Manufacturing Engineer",
        description: "Develop and improve manufacturing processes and systems.",
        salary: "$80,000 - $120,000"
      }
    ],
    domains: [
      {
        name: "Machine Design",
        description: "Design of mechanical components and systems for various applications."
      },
      {
        name: "Thermodynamics",
        description: "Study of heat, work, and energy, and their relationship with mechanical systems."
      },
      {
        name: "Fluid Mechanics",
        description: "Study of fluids (liquids and gases) and the forces acting on them."
      },
      {
        name: "Manufacturing",
        description: "Production of goods using various tools, machines, and processes."
      },
      {
        name: "Robotics",
        description: "Design, construction, operation, and use of robots, as well as computer systems for their control."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in mechanics, thermodynamics, materials science, and design.",
        subjects: ["Statics", "Dynamics", "Thermodynamics", "Materials Science", "Machine Design"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of mechanical engineering.",
        subjects: ["Advanced Thermodynamics", "Robotics", "Finite Element Analysis", "Computational Fluid Dynamics", "Advanced Manufacturing"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of mechanical engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    description: "Design, construct, and maintain the physical and natural built environment.",
    color: "#4CAF50",
    icon: "🏗️",
    longDescription: "Civil Engineering deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams, and buildings. It is perhaps the oldest engineering discipline after military engineering, and it is traditionally broken into several sub-disciplines including structural engineering, transportation engineering, geotechnical engineering, and environmental engineering.",
    careers: [
      {
        title: "Structural Engineer",
        description: "Design and analyze structures to ensure they can safely resist loads.",
        salary: "$80,000 - $120,000"
      },
      {
        title: "Transportation Engineer",
        description: "Plan, design, operate, and maintain transportation systems.",
        salary: "$75,000 - $110,000"
      },
      {
        title: "Geotechnical Engineer",
        description: "Work with soil and rock mechanics for infrastructure design.",
        salary: "$85,000 - $125,000"
      }
    ],
    domains: [
      {
        name: "Structural Engineering",
        description: "Analysis and design of structures that support or resist loads."
      },
      {
        name: "Transportation Engineering",
        description: "Planning, design, operation, and maintenance of transportation systems."
      },
      {
        name: "Geotechnical Engineering",
        description: "Study of soil and rock mechanics for infrastructure design."
      },
      {
        name: "Environmental Engineering",
        description: "Protection of the environment by reducing pollution and waste."
      },
      {
        name: "Construction Engineering",
        description: "Planning and management of construction projects."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in structures, materials, fluid mechanics, and geotechnical engineering.",
        subjects: ["Structural Analysis", "Fluid Mechanics", "Soil Mechanics", "Surveying", "Construction Materials"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of civil engineering.",
        subjects: ["Advanced Structural Analysis", "Transportation Planning", "Water Resources Engineering", "Environmental Engineering", "Construction Management"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of civil engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "chemical-engineering",
    title: "Chemical Engineering",
    description: "Apply chemistry, physics, and biology to design processes and products.",
    color: "#9C27B0",
    icon: "🧪",
    longDescription: "Chemical Engineering is the branch of engineering that deals with chemical production and the manufacture of products through chemical processes. This includes the design of chemical plants, the development of processes to transform raw materials into useful products, and the improvement of production methods.",
    careers: [
      {
        title: "Process Engineer",
        description: "Design and optimize chemical processes for manufacturing.",
        salary: "$90,000 - $130,000"
      },
      {
        title: "Petroleum Engineer",
        description: "Develop methods for extracting oil and gas from the earth.",
        salary: "$100,000 - $150,000"
      },
      {
        title: "Biochemical Engineer",
        description: "Apply engineering principles to biological systems for product development.",
        salary: "$85,000 - $125,000"
      }
    ],
    domains: [
      {
        name: "Process Engineering",
        description: "Design, operation, control, and optimization of chemical processes."
      },
      {
        name: "Petroleum Engineering",
        description: "Exploration, extraction, and production of hydrocarbons (oil and gas)."
      },
      {
        name: "Biochemical Engineering",
        description: "Application of engineering principles to biological systems and processes."
      },
      {
        name: "Materials Science",
        description: "Development and characterization of materials with desired properties."
      },
      {
        name: "Environmental Engineering",
        description: "Development of solutions for environmental issues related to chemical processes."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in chemistry, thermodynamics, fluid mechanics, and process design.",
        subjects: ["Chemical Thermodynamics", "Fluid Mechanics", "Mass Transfer", "Chemical Reaction Engineering", "Process Design"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of chemical engineering.",
        subjects: ["Advanced Thermodynamics", "Transport Phenomena", "Biochemical Engineering", "Process Control", "Polymer Science"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of chemical engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "biomedical-engineering",
    title: "Biomedical Engineering",
    description: "Apply engineering principles to medicine and biology for healthcare solutions.",
    color: "#E91E63",
    icon: "🩺",
    longDescription: "Biomedical Engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes. This field combines the design and problem-solving skills of engineering with medical and biological sciences to advance healthcare treatment, including diagnosis, monitoring, and therapy.",
    careers: [
      {
        title: "Medical Device Designer",
        description: "Design and develop medical devices, equipment, and implants.",
        salary: "$90,000 - $135,000"
      },
      {
        title: "Rehabilitation Engineer",
        description: "Develop devices to help individuals recover physical and cognitive functions.",
        salary: "$85,000 - $120,000"
      },
      {
        title: "Clinical Engineer",
        description: "Apply engineering knowledge in hospital settings to enhance patient care.",
        salary: "$80,000 - $125,000"
      }
    ],
    domains: [
      {
        name: "Medical Devices",
        description: "Design and development of equipment, devices, and implants for medical purposes."
      },
      {
        name: "Biomaterials",
        description: "Development of materials designed to interact with biological systems."
      },
      {
        name: "Tissue Engineering",
        description: "Combination of cells, engineering methods, and materials to improve or replace biological functions."
      },
      {
        name: "Medical Imaging",
        description: "Development of technologies for visualizing internal body structures for medical purposes."
      },
      {
        name: "Bioinformatics",
        description: "Application of computational tools to analyze biological data and solve biological problems."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in engineering principles, biology, and medical sciences.",
        subjects: ["Biology", "Anatomy", "Physiology", "Biomechanics", "Medical Instrumentation"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of biomedical engineering.",
        subjects: ["Biomaterials", "Tissue Engineering", "Medical Imaging", "Rehabilitation Engineering", "Regulatory Affairs"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of biomedical engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "aerospace-engineering",
    title: "Aerospace Engineering",
    description: "Design and develop aircraft, spacecraft, satellites, and missiles.",
    color: "#3F51B5",
    icon: "🚀",
    longDescription: "Aerospace Engineering deals with the design, development, testing, and production of aircraft, spacecraft, and related systems and equipment. It is divided into two major and overlapping branches: aeronautical engineering and astronautical engineering.",
    careers: [
      {
        title: "Aeronautical Engineer",
        description: "Design and develop aircraft and related systems.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Spacecraft Engineer",
        description: "Design and develop spacecraft and related systems.",
        salary: "$100,000 - $150,000"
      },
      {
        title: "Propulsion Engineer",
        description: "Develop and test propulsion systems for aircraft and spacecraft.",
        salary: "$90,000 - $135,000"
      }
    ],
    domains: [
      {
        name: "Aerodynamics",
        description: "Study of the motion of air and its interaction with solid objects."
      },
      {
        name: "Propulsion",
        description: "Generation of thrust to propel an aircraft or spacecraft forward."
      },
      {
        name: "Structures",
        description: "Design and analysis of aircraft and spacecraft structures to withstand various loads."
      },
      {
        name: "Avionics",
        description: "Electronic systems used on aircraft, artificial satellites, and spacecraft."
      },
      {
        name: "Space Systems",
        description: "Design and development of spacecraft and related systems for operation in space."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in aerodynamics, propulsion, structures, and control systems.",
        subjects: ["Aerodynamics", "Flight Mechanics", "Propulsion", "Aerospace Structures", "Control Systems"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of aerospace engineering.",
        subjects: ["Advanced Aerodynamics", "Spacecraft Design", "Orbital Mechanics", "Composite Materials", "Space Mission Design"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of aerospace engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "environmental-engineering",
    title: "Environmental Engineering",
    description: "Develop solutions to environmental problems and protect public health.",
    color: "#8BC34A",
    icon: "♻️",
    longDescription: "Environmental Engineering is the branch of engineering that is concerned with protecting people from the effects of adverse environmental effects, as well as improving environmental quality. Environmental engineers work on water and air pollution control, recycling, waste disposal, and public health issues.",
    careers: [
      {
        title: "Water Resources Engineer",
        description: "Design and implement systems for water supply, treatment, and management.",
        salary: "$75,000 - $110,000"
      },
      {
        title: "Waste Management Engineer",
        description: "Develop and implement solutions for waste disposal and recycling.",
        salary: "$70,000 - $105,000"
      },
      {
        title: "Air Quality Engineer",
        description: "Monitor and develop systems to improve air quality and reduce pollution.",
        salary: "$80,000 - $115,000"
      }
    ],
    domains: [
      {
        name: "Water Resources",
        description: "Management and protection of water resources for human use and environmental conservation."
      },
      {
        name: "Waste Management",
        description: "Collection, transport, processing, recycling, and disposal of waste materials."
      },
      {
        name: "Air Quality",
        description: "Monitoring and improvement of air quality to reduce pollution and its effects."
      },
      {
        name: "Soil Contamination",
        description: "Assessment and remediation of soil contaminated by pollutants."
      },
      {
        name: "Sustainable Development",
        description: "Development that meets current needs without compromising future generations' ability to meet their needs."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in environmental science, fluid mechanics, and waste management.",
        subjects: ["Environmental Science", "Fluid Mechanics", "Water Treatment", "Waste Management", "Air Pollution Control"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of environmental engineering.",
        subjects: ["Advanced Water Treatment", "Hazardous Waste Management", "Environmental Impact Assessment", "Remediation Technologies", "Environmental Modeling"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of environmental engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "industrial-engineering",
    title: "Industrial Engineering",
    description: "Optimize complex systems, processes, and organizations for efficiency.",
    color: "#FF9800",
    icon: "🏭",
    longDescription: "Industrial Engineering is concerned with the development, improvement, implementation, and evaluation of integrated systems of people, knowledge, equipment, energy, material, analysis, and synthesis. Industrial engineers develop efficient systems integrating humans, machines, materials, information, and energy, drawing upon specialized knowledge and skills in the mathematical, physical, and social sciences.",
    careers: [
      {
        title: "Process Improvement Engineer",
        description: "Analyze and improve manufacturing and business processes.",
        salary: "$80,000 - $120,000"
      },
      {
        title: "Supply Chain Engineer",
        description: "Design and optimize supply chain networks and logistics.",
        salary: "$85,000 - $125,000"
      },
      {
        title: "Quality Engineer",
        description: "Ensure products and processes meet quality standards.",
        salary: "$75,000 - $110,000"
      }
    ],
    domains: [
      {
        name: "Operations Research",
        description: "Application of analytical methods to help make better decisions."
      },
      {
        name: "Supply Chain Management",
        description: "Design and management of the flow of goods, services, and information from suppliers to customers."
      },
      {
        name: "Quality Engineering",
        description: "Ensuring products and processes meet quality standards and specifications."
      },
      {
        name: "Ergonomics",
        description: "Design of equipment and devices that fit the human body and its cognitive abilities."
      },
      {
        name: "Manufacturing Systems",
        description: "Design and operation of systems for producing goods efficiently."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in operations research, statistics, and systems engineering.",
        subjects: ["Operations Research", "Statistics", "Production Systems", "Quality Control", "Ergonomics"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of industrial engineering.",
        subjects: ["Advanced Operations Research", "Supply Chain Management", "Advanced Manufacturing Systems", "Human Factors Engineering", "Project Management"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of industrial engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "materials-engineering",
    title: "Materials Engineering",
    description: "Develop, process, and test materials for various applications.",
    color: "#795548",
    icon: "🔍",
    longDescription: "Materials Engineering involves the discovery and design of new materials, with an emphasis on solids. Materials engineers study the relationship between the structure of materials at atomic or molecular scales and their macroscopic properties. They develop, process, and test materials used to create a wide range of products, from computer chips and aircraft wings to golf clubs and biomedical devices.",
    careers: [
      {
        title: "Materials Development Engineer",
        description: "Research and develop new materials with specific properties.",
        salary: "$85,000 - $125,000"
      },
      {
        title: "Metallurgist",
        description: "Study the physical and chemical behavior of metals and their alloys.",
        salary: "$80,000 - $120,000"
      },
      {
        title: "Polymer Engineer",
        description: "Develop and process polymers for various applications.",
        salary: "$90,000 - $130,000"
      }
    ],
    domains: [
      {
        name: "Metals and Alloys",
        description: "Study and development of metallic materials and their alloys."
      },
      {
        name: "Polymers",
        description: "Study and development of polymer materials for various applications."
      },
      {
        name: "Ceramics",
        description: "Study and development of ceramic materials for various applications."
      },
      {
        name: "Composites",
        description: "Study and development of composite materials consisting of two or more constituent materials."
      },
      {
        name: "Nanomaterials",
        description: "Study and development of materials with nanoscale dimensions."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in materials science, solid state physics, and chemistry.",
        subjects: ["Materials Science", "Solid State Physics", "Chemistry", "Materials Processing", "Materials Characterization"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of materials engineering.",
        subjects: ["Advanced Materials Science", "Materials Thermodynamics", "Polymer Science", "Computational Materials Science", "Materials for Energy"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of materials engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "petroleum-engineering",
    title: "Petroleum Engineering",
    description: "Develop methods for extracting oil and gas from the earth.",
    color: "#607D8B",
    icon: "🛢️",
    longDescription: "Petroleum Engineering is the field of engineering that deals with the exploration, extraction, and production of oil and gas. It includes the study of the production of hydrocarbons, the behavior of hydrocarbon fluids in reservoirs, and the design of wells for their extraction.",
    careers: [
      {
        title: "Reservoir Engineer",
        description: "Estimate oil and gas reserves and develop plans for production.",
        salary: "$100,000 - $160,000"
      },
      {
        title: "Drilling Engineer",
        description: "Design and implement drilling programs for oil and gas wells.",
        salary: "$95,000 - $150,000"
      },
      {
        title: "Production Engineer",
        description: "Design and select equipment to bring oil and gas to the surface.",
        salary: "$90,000 - $145,000"
      }
    ],
    domains: [
      {
        name: "Reservoir Engineering",
        description: "Study of the behavior of oil and gas in underground reservoirs."
      },
      {
        name: "Drilling Engineering",
        description: "Design and implementation of drilling programs for oil and gas wells."
      },
      {
        name: "Production Engineering",
        description: "Design and selection of equipment to bring oil and gas to the surface."
      },
      {
        name: "Formation Evaluation",
        description: "Assessment of the properties of rock formations to determine their oil and gas content."
      },
      {
        name: "Enhanced Oil Recovery",
        description: "Development of methods to increase the amount of oil that can be extracted from a reservoir."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in geology, fluid mechanics, and reservoir engineering.",
        subjects: ["Geology", "Fluid Mechanics", "Reservoir Engineering", "Drilling Engineering", "Production Engineering"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of petroleum engineering.",
        subjects: ["Advanced Reservoir Engineering", "Advanced Drilling Engineering", "Formation Evaluation", "Enhanced Oil Recovery", "Petroleum Economics"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of petroleum engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "nuclear-engineering",
    title: "Nuclear Engineering",
    description: "Apply nuclear energy for power generation, medicine, and other applications.",
    color: "#673AB7",
    icon: "☢️",
    longDescription: "Nuclear Engineering is the branch of engineering concerned with the application of nuclear energy and radiation. It includes the design, analysis, development, and maintenance of nuclear reactors, nuclear power plants, nuclear fuel, radioisotopes, and the equipment used to control and protect people from the effects of radiation.",
    careers: [
      {
        title: "Nuclear Power Engineer",
        description: "Design, develop, and operate nuclear power plants.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Radiation Protection Engineer",
        description: "Develop and implement measures to protect people from radiation.",
        salary: "$90,000 - $130,000"
      },
      {
        title: "Nuclear Medicine Engineer",
        description: "Develop and apply nuclear technology for medical diagnosis and treatment.",
        salary: "$85,000 - $125,000"
      }
    ],
    domains: [
      {
        name: "Nuclear Power",
        description: "Generation of electricity using nuclear reactions."
      },
      {
        name: "Radiation Protection",
        description: "Development and implementation of measures to protect people from radiation."
      },
      {
        name: "Nuclear Medicine",
        description: "Application of nuclear technology for medical diagnosis and treatment."
      },
      {
        name: "Nuclear Fuel Cycle",
        description: "Production, use, and disposal of nuclear fuel."
      },
      {
        name: "Nuclear Safety",
        description: "Ensuring the safe operation of nuclear facilities and processes."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in physics, thermodynamics, and nuclear engineering principles.",
        subjects: ["Nuclear Physics", "Thermodynamics", "Reactor Theory", "Radiation Protection", "Nuclear Materials"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of nuclear engineering.",
        subjects: ["Advanced Reactor Design", "Nuclear Fuel Cycle", "Radiation Detection", "Nuclear Safety", "Nuclear Medicine"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of nuclear engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "robotics-engineering",
    title: "Robotics Engineering",
    description: "Design, develop, and test robots and robotic systems.",
    color: "#00BCD4",
    icon: "🤖",
    longDescription: "Robotics Engineering is an interdisciplinary branch of engineering that focuses on the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing. These technologies deal with automated machines that can take the place of humans in dangerous environments or manufacturing processes, or resemble humans in appearance, behavior, or cognition.",
    careers: [
      {
        title: "Robotics Engineer",
        description: "Design and develop robots and robotic systems for various applications.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Automation Engineer",
        description: "Design and implement automated systems for manufacturing and other processes.",
        salary: "$90,000 - $135,000"
      },
      {
        title: "AI Robotics Engineer",
        description: "Develop robots with artificial intelligence capabilities.",
        salary: "$100,000 - $150,000"
      }
    ],
    domains: [
      {
        name: "Industrial Robotics",
        description: "Development of robots for manufacturing and industrial processes."
      },
      {
        name: "Service Robotics",
        description: "Development of robots for service applications, such as healthcare and hospitality."
      },
      {
        name: "AI and Machine Learning",
        description: "Integration of artificial intelligence and machine learning capabilities into robots."
      },
      {
        name: "Human-Robot Interaction",
        description: "Study and development of ways for humans and robots to interact effectively."
      },
      {
        name: "Robot Control Systems",
        description: "Development of systems to control the behavior and movement of robots."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in mechanics, electronics, and computer science.",
        subjects: ["Mechanics", "Electronics", "Programming", "Control Systems", "Artificial Intelligence"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of robotics engineering.",
        subjects: ["Advanced Robotics", "Computer Vision", "Machine Learning", "Robot Dynamics", "Human-Robot Interaction"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of robotics engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Design, develop, and maintain software systems and applications.",
    color: "#2196F3",
    icon: "📱",
    longDescription: "Software Engineering is the systematic application of engineering approaches to the development of software. It involves designing, developing, maintaining, testing, and evaluating software, and applying engineering principles to software creation. Software engineers create systems that are reliable, efficient, and meet user requirements.",
    careers: [
      {
        title: "Software Developer",
        description: "Write, test, and maintain code for software applications.",
        salary: "$90,000 - $140,000"
      },
      {
        title: "DevOps Engineer",
        description: "Combine software development and IT operations for continuous delivery.",
        salary: "$100,000 - $150,000"
      },
      {
        title: "Mobile App Developer",
        description: "Develop applications for mobile devices.",
        salary: "$85,000 - $130,000"
      }
    ],
    domains: [
      {
        name: "Web Development",
        description: "Development of websites and web applications."
      },
      {
        name: "Mobile Development",
        description: "Development of applications for mobile devices."
      },
      {
        name: "Systems Software",
        description: "Development of software that provides services to other software."
      },
      {
        name: "DevOps",
        description: "Combination of software development and IT operations for continuous delivery."
      },
      {
        name: "Software Quality Assurance",
        description: "Ensuring software meets quality standards and requirements."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in programming, data structures, algorithms, and software engineering.",
        subjects: ["Programming", "Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of software engineering.",
        subjects: ["Advanced Software Engineering", "Software Architecture", "Software Quality Assurance", "Project Management", "Specialized Development"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of software engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "telecommunications-engineering",
    title: "Telecommunications Engineering",
    description: "Design and develop communication systems and networks.",
    color: "#009688",
    icon: "📡",
    longDescription: "Telecommunications Engineering focuses on the design, development, and maintenance of telecommunications systems and networks. It encompasses a wide range of technologies including telephone, television, radio, satellite, and internet communication. Telecommunications engineers apply principles of electrical engineering to design and optimize these systems for efficient and reliable communication.",
    careers: [
      {
        title: "Network Engineer",
        description: "Design, implement, and maintain communication networks.",
        salary: "$85,000 - $125,000"
      },
      {
        title: "Wireless Communications Engineer",
        description: "Design and develop wireless communication systems.",
        salary: "$90,000 - $135,000"
      },
      {
        title: "Satellite Communications Engineer",
        description: "Design and develop satellite communication systems.",
        salary: "$95,000 - $140,000"
      }
    ],
    domains: [
      {
        name: "Network Engineering",
        description: "Design, implementation, and maintenance of communication networks."
      },
      {
        name: "Wireless Communications",
        description: "Design and development of wireless communication systems."
      },
      {
        name: "Satellite Communications",
        description: "Design and development of satellite communication systems."
      },
      {
        name: "Optical Communications",
        description: "Design and development of optical communication systems."
      },
      {
        name: "Signal Processing",
        description: "Analysis, modification, and synthesis of signals for communication."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in electronics, signal processing, and communication systems.",
        subjects: ["Electronics", "Signal Processing", "Communication Systems", "Networks", "Wireless Communications"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of telecommunications engineering.",
        subjects: ["Advanced Signal Processing", "Advanced Networks", "Satellite Communications", "Optical Communications", "Wireless Networks"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of telecommunications engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "agricultural-engineering",
    title: "Agricultural Engineering",
    description: "Apply engineering principles to agricultural production and processing.",
    color: "#8BC34A",
    icon: "🌾",
    longDescription: "Agricultural Engineering is the application of engineering principles to agriculture. It involves the design of agricultural machinery, equipment, and structures, as well as the development of methods to improve the efficiency and sustainability of agricultural production and processing. Agricultural engineers work on a wide range of challenges, from irrigation and drainage systems to food processing and environmental protection.",
    careers: [
      {
        title: "Agricultural Machinery Engineer",
        description: "Design and develop machinery for agricultural production.",
        salary: "$75,000 - $110,000"
      },
      {
        title: "Food Process Engineer",
        description: "Design and optimize processes for food production and processing.",
        salary: "$80,000 - $120,000"
      },
      {
        title: "Irrigation Engineer",
        description: "Design and implement irrigation systems for agriculture.",
        salary: "$70,000 - $105,000"
      }
    ],
    domains: [
      {
        name: "Agricultural Machinery",
        description: "Design and development of machinery for agricultural production."
      },
      {
        name: "Food Processing",
        description: "Design and optimization of processes for food production and processing."
      },
      {
        name: "Irrigation and Drainage",
        description: "Design and implementation of systems for water management in agriculture."
      },
      {
        name: "Precision Agriculture",
        description: "Application of information technology to agriculture for optimization."
      },
      {
        name: "Sustainable Agriculture",
        description: "Development of methods for sustainable agricultural production."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in engineering principles, agriculture, and biological sciences.",
        subjects: ["Engineering Mechanics", "Agriculture", "Soil Science", "Hydrology", "Machinery Design"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of agricultural engineering.",
        subjects: ["Advanced Machinery Design", "Food Engineering", "Irrigation Systems", "Precision Agriculture", "Sustainable Agriculture"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of agricultural engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "automotive-engineering",
    title: "Automotive Engineering",
    description: "Design, develop, and manufacture vehicles and their systems.",
    color: "#F44336",
    icon: "🚗",
    longDescription: "Automotive Engineering is a branch of engineering that deals with the design, manufacturing, and operation of automobiles. It is a highly specialized field that combines elements of mechanical, electrical, electronic, and software engineering to create safe, efficient, and innovative vehicles. Automotive engineers develop new and improved designs for vehicle systems, components, and materials.",
    careers: [
      {
        title: "Vehicle Design Engineer",
        description: "Design vehicles and their components.",
        salary: "$85,000 - $130,000"
      },
      {
        title: "Powertrain Engineer",
        description: "Design and develop engines, transmissions, and related components.",
        salary: "$90,000 - $135,000"
      },
      {
        title: "Automotive Electronics Engineer",
        description: "Design and develop electronic systems for vehicles.",
        salary: "$85,000 - $125,000"
      }
    ],
    domains: [
      {
        name: "Vehicle Design",
        description: "Design of vehicles and their components."
      },
      {
        name: "Powertrain Engineering",
        description: "Design and development of engines, transmissions, and related components."
      },
      {
        name: "Automotive Electronics",
        description: "Design and development of electronic systems for vehicles."
      },
      {
        name: "Vehicle Dynamics",
        description: "Study of the forces acting on a vehicle and its response to these forces."
      },
      {
        name: "Autonomous Vehicles",
        description: "Development of vehicles capable of sensing their environment and operating without human input."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in mechanical engineering, electrical engineering, and automotive systems.",
        subjects: ["Mechanics", "Thermodynamics", "Automotive Systems", "Electronics", "Vehicle Dynamics"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in specific areas of automotive engineering.",
        subjects: ["Advanced Powertrain", "Automotive Electronics", "Vehicle Safety", "Autonomous Vehicles", "Sustainable Mobility"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of automotive engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "ai-machine-learning-engineering",
    title: "AI & Machine Learning Engineering",
    description: "Develop systems and applications that utilize artificial intelligence and machine learning.",
    color: "#9C27B0",
    icon: "🧠",
    longDescription: "AI & Machine Learning Engineering involves the development of systems and applications that utilize artificial intelligence and machine learning. This field combines aspects of computer science, data science, and engineering to create intelligent systems that can learn from data, make decisions, and improve over time. AI & Machine Learning engineers design and implement algorithms, build models, and create systems that can perform tasks that would typically require human intelligence.",
    careers: [
      {
        title: "Machine Learning Engineer",
        description: "Design and implement machine learning models and systems.",
        salary: "$110,000 - $160,000"
      },
      {
        title: "AI Research Scientist",
        description: "Conduct research to advance the field of artificial intelligence.",
        salary: "$120,000 - $170,000"
      },
      {
        title: "Computer Vision Engineer",
        description: "Develop systems that can interpret and understand visual information.",
        salary: "$105,000 - $155,000"
      }
    ],
    domains: [
      {
        name: "Machine Learning",
        description: "Development of algorithms and statistical models that enable systems to improve through experience."
      },
      {
        name: "Deep Learning",
        description: "Subset of machine learning involving neural networks with many layers."
      },
      {
        name: "Natural Language Processing",
        description: "Development of systems that can understand, interpret, and generate human language."
      },
      {
        name: "Computer Vision",
        description: "Development of systems that can interpret and understand visual information."
      },
      {
        name: "Reinforcement Learning",
        description: "Development of systems that learn to make decisions by receiving feedback from the environment."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in computer science, mathematics, and programming.",
        subjects: ["Programming", "Data Structures", "Algorithms", "Linear Algebra", "Statistics"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in artificial intelligence and machine learning.",
        subjects: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of AI and machine learning.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "cybersecurity-engineering",
    title: "Cybersecurity Engineering",
    description: "Protect computer systems, networks, and data from digital attacks.",
    color: "#004D40",
    icon: "🔒",
    longDescription: "Cybersecurity Engineering is the discipline of designing, developing, and implementing secure computer systems and networks. It involves the application of engineering principles and methods to protect systems, networks, and data from a wide range of threats. Cybersecurity engineers identify vulnerabilities, implement security measures, and respond to incidents to ensure the confidentiality, integrity, and availability of information systems.",
    careers: [
      {
        title: "Security Engineer",
        description: "Design and implement security systems to protect against cyber threats.",
        salary: "$100,000 - $150,000"
      },
      {
        title: "Penetration Tester",
        description: "Test security systems by attempting to breach them.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Security Analyst",
        description: "Monitor and analyze security systems and respond to incidents.",
        salary: "$90,000 - $135,000"
      }
    ],
    domains: [
      {
        name: "Network Security",
        description: "Protection of computer networks from unauthorized access and attacks."
      },
      {
        name: "Application Security",
        description: "Protection of software applications from threats and vulnerabilities."
      },
      {
        name: "Cryptography",
        description: "Securing communications using mathematical algorithms and codes."
      },
      {
        name: "Incident Response",
        description: "Planning and execution of responses to security incidents."
      },
      {
        name: "Security Architecture",
        description: "Design of security systems and frameworks for organizations."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in computer science, networking, and cybersecurity.",
        subjects: ["Computer Networks", "Operating Systems", "Cryptography", "Information Security", "Programming"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in cybersecurity.",
        subjects: ["Advanced Network Security", "Secure Software Development", "Digital Forensics", "Penetration Testing", "Security Governance"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of cybersecurity.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "quantum-engineering",
    title: "Quantum Engineering",
    description: "Apply quantum mechanics to develop revolutionary technologies.",
    color: "#283593",
    icon: "⚛️",
    longDescription: "Quantum Engineering is an emerging field that applies quantum mechanics principles to develop revolutionary technologies. It involves the design and development of quantum computers, quantum sensors, and other quantum technologies that exploit quantum phenomena such as superposition and entanglement. Quantum engineers work across various disciplines including physics, computer science, and electrical engineering to create technologies that can solve problems beyond the capabilities of classical systems.",
    careers: [
      {
        title: "Quantum Computer Scientist",
        description: "Design and develop quantum computing algorithms and software.",
        salary: "$120,000 - $170,000"
      },
      {
        title: "Quantum Hardware Engineer",
        description: "Design and develop physical quantum computing systems.",
        salary: "$125,000 - $175,000"
      },
      {
        title: "Quantum Cryptographer",
        description: "Develop secure communication systems based on quantum principles.",
        salary: "$115,000 - $160,000"
      }
    ],
    domains: [
      {
        name: "Quantum Computing",
        description: "Development of computers that use quantum phenomena to perform operations on data."
      },
      {
        name: "Quantum Communication",
        description: "Development of secure communication systems based on quantum principles."
      },
      {
        name: "Quantum Sensing",
        description: "Development of sensors that exploit quantum phenomena for increased sensitivity."
      },
      {
        name: "Quantum Cryptography",
        description: "Development of cryptographic systems based on the principles of quantum mechanics."
      },
      {
        name: "Quantum Materials",
        description: "Development of materials with properties governed by quantum mechanics."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in physics, mathematics, and computer science.",
        subjects: ["Quantum Mechanics", "Linear Algebra", "Programming", "Digital Logic", "Physics"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in quantum engineering.",
        subjects: ["Quantum Computing", "Quantum Information Theory", "Quantum Communication", "Quantum Materials", "Quantum Algorithms"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of quantum engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "energy-engineering",
    title: "Energy Engineering",
    description: "Develop efficient systems for energy generation, distribution, and utilization.",
    color: "#FFC107",
    icon: "⚡",
    longDescription: "Energy Engineering focuses on the efficient generation, distribution, and utilization of energy. It involves the design and development of systems and processes for harnessing various energy sources, including fossil fuels, nuclear power, and renewable sources such as solar, wind, and hydro. Energy engineers work to improve energy efficiency, reduce environmental impact, and develop sustainable energy solutions for a wide range of applications.",
    careers: [
      {
        title: "Energy Systems Engineer",
        description: "Design and develop efficient energy systems for various applications.",
        salary: "$85,000 - $125,000"
      },
      {
        title: "Renewable Energy Engineer",
        description: "Design and develop systems for harnessing renewable energy sources.",
        salary: "$90,000 - $130,000"
      },
      {
        title: "Energy Efficiency Engineer",
        description: "Develop methods and systems to improve energy efficiency.",
        salary: "$80,000 - $120,000"
      }
    ],
    domains: [
      {
        name: "Renewable Energy",
        description: "Development of systems for harnessing renewable energy sources such as solar, wind, and hydro."
      },
      {
        name: "Energy Efficiency",
        description: "Development of methods and systems to improve energy efficiency."
      },
      {
        name: "Power Systems",
        description: "Design and analysis of systems for the generation, transmission, and distribution of electrical power."
      },
      {
        name: "Energy Storage",
        description: "Development of technologies for storing energy for later use."
      },
      {
        name: "Energy Management",
        description: "Development of systems and practices for the efficient management of energy resources."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in thermodynamics, fluid mechanics, and electrical systems.",
        subjects: ["Thermodynamics", "Fluid Mechanics", "Electrical Systems", "Renewable Energy", "Energy Conversion"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in energy engineering.",
        subjects: ["Advanced Thermodynamics", "Renewable Energy Systems", "Energy Efficiency", "Energy Storage", "Energy Economics"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of energy engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "nanotechnology-engineering",
    title: "Nanotechnology Engineering",
    description: "Design and develop materials and devices at the nanoscale.",
    color: "#00BCD4",
    icon: "🔬",
    longDescription: "Nanotechnology Engineering involves the design, development, and application of materials, devices, and systems at the nanoscale. It bridges several disciplines including physics, chemistry, biology, and engineering to create and manipulate materials and structures at the atomic and molecular level. Nanotechnology engineers develop applications in areas such as medicine, electronics, materials science, and environmental protection.",
    careers: [
      {
        title: "Nanomaterials Engineer",
        description: "Design and develop materials with nanoscale structures and properties.",
        salary: "$90,000 - $135,000"
      },
      {
        title: "Nanoelectronics Engineer",
        description: "Design and develop electronic devices and systems at the nanoscale.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Bionanotechnology Engineer",
        description: "Apply nanotechnology to biological systems and processes.",
        salary: "$95,000 - $145,000"
      }
    ],
    domains: [
      {
        name: "Nanomaterials",
        description: "Development of materials with nanoscale structures and properties."
      },
      {
        name: "Nanoelectronics",
        description: "Development of electronic devices and systems at the nanoscale."
      },
      {
        name: "Nanobiotechnology",
        description: "Application of nanotechnology to biological systems and processes."
      },
      {
        name: "Nanofabrication",
        description: "Techniques for manufacturing devices and structures at the nanoscale."
      },
      {
        name: "Nanocharacterization",
        description: "Techniques for analyzing and measuring nanoscale materials and structures."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in physics, chemistry, and engineering principles.",
        subjects: ["Physics", "Chemistry", "Materials Science", "Quantum Mechanics", "Nanofabrication"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in nanotechnology engineering.",
        subjects: ["Advanced Nanomaterials", "Nanoelectronics", "Nanobiotechnology", "Nanofabrication Techniques", "Nanosensors"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of nanotechnology engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Design and build systems for collecting, storing, and analyzing large volumes of data.",
    color: "#3F51B5",
    icon: "📊",
    longDescription: "Data Engineering involves the design, development, and management of systems for collecting, storing, and analyzing large volumes of data. It focuses on the practical applications of data collection and analysis, including the development of data pipelines, data warehouses, and data processing systems. Data engineers work with various technologies and tools to ensure that data is available, accessible, and usable for analysis and decision-making.",
    careers: [
      {
        title: "Data Engineer",
        description: "Design and implement systems for managing and processing data.",
        salary: "$100,000 - $145,000"
      },
      {
        title: "Big Data Engineer",
        description: "Develop systems for processing and analyzing large volumes of data.",
        salary: "$105,000 - $150,000"
      },
      {
        title: "ETL Developer",
        description: "Design and develop processes for extracting, transforming, and loading data.",
        salary: "$95,000 - $140,000"
      }
    ],
    domains: [
      {
        name: "Data Pipeline Development",
        description: "Design and implementation of systems for collecting, transforming, and storing data."
      },
      {
        name: "Big Data Processing",
        description: "Development of systems for processing and analyzing large volumes of data."
      },
      {
        name: "Data Warehousing",
        description: "Design and implementation of systems for storing and managing data for analysis."
      },
      {
        name: "Data Architecture",
        description: "Design of data systems and structures for organizations."
      },
      {
        name: "Stream Processing",
        description: "Development of systems for processing and analyzing data in real-time."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in computer science, database systems, and programming.",
        subjects: ["Programming", "Database Systems", "Data Structures", "Software Engineering", "Computer Networks"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in data engineering.",
        subjects: ["Data Warehousing", "Big Data Processing", "Distributed Systems", "Data Architecture", "Cloud Computing"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of data engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "systems-engineering",
    title: "Systems Engineering",
    description: "Design and manage complex engineering projects across multiple disciplines.",
    color: "#795548",
    icon: "🔄",
    longDescription: "Systems Engineering is an interdisciplinary approach to designing, implementing, and managing complex engineering projects throughout their lifecycles. It focuses on the development of complex systems by considering both technical and business needs of all stakeholders, with the aim of providing a quality product that meets user needs. Systems engineers manage the system requirements, architecture, design, development, testing, and evaluation of complex systems across multiple engineering disciplines.",
    careers: [
      {
        title: "Systems Engineer",
        description: "Design and manage complex engineering projects across multiple disciplines.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Requirements Engineer",
        description: "Identify, analyze, and document system requirements.",
        salary: "$90,000 - $130,000"
      },
      {
        title: "Integration Engineer",
        description: "Ensure that different components of a system work together properly.",
        salary: "$85,000 - $125,000"
      }
    ],
    domains: [
      {
        name: "Requirements Engineering",
        description: "Identification, analysis, and documentation of system requirements."
      },
      {
        name: "System Architecture",
        description: "Design of the overall structure and behavior of complex systems."
      },
      {
        name: "Systems Integration",
        description: "Ensuring that different components of a system work together properly."
      },
      {
        name: "Reliability Engineering",
        description: "Ensuring that systems perform as required over time."
      },
      {
        name: "Model-Based Systems Engineering",
        description: "Use of models to support system requirements, design, analysis, and verification."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in engineering principles, systems thinking, and project management.",
        subjects: ["Engineering Principles", "Systems Thinking", "Project Management", "Risk Analysis", "System Design"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in systems engineering.",
        subjects: ["Advanced Systems Engineering", "Requirements Engineering", "Systems Architecture", "Systems Integration", "System Validation"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of systems engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "audio-engineering",
    title: "Audio Engineering",
    description: "Design and develop audio systems and equipment for recording, processing, and reproduction.",
    color: "#673AB7",
    icon: "🎧",
    longDescription: "Audio Engineering involves the design, development, and operation of audio systems and equipment for recording, processing, and reproduction of sound. It combines aspects of electrical engineering, acoustics, and music production to create high-quality audio experiences. Audio engineers work in various settings including recording studios, concert venues, broadcasting stations, and product development for audio equipment.",
    careers: [
      {
        title: "Studio Engineer",
        description: "Record, mix, and master audio in a recording studio.",
        salary: "$60,000 - $90,000"
      },
      {
        title: "Live Sound Engineer",
        description: "Set up and operate audio equipment for live events.",
        salary: "$55,000 - $85,000"
      },
      {
        title: "Audio Equipment Designer",
        description: "Design and develop audio equipment and systems.",
        salary: "$75,000 - $110,000"
      }
    ],
    domains: [
      {
        name: "Studio Recording",
        description: "Recording, mixing, and mastering of audio in a controlled environment."
      },
      {
        name: "Live Sound",
        description: "Setup and operation of audio equipment for live events."
      },
      {
        name: "Audio Equipment Design",
        description: "Design and development of audio equipment and systems."
      },
      {
        name: "Acoustical Engineering",
        description: "Design of spaces and structures to achieve desired acoustic properties."
      },
      {
        name: "Digital Signal Processing",
        description: "Processing of audio signals using digital techniques."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in electrical engineering, acoustics, and audio production.",
        subjects: ["Electrical Engineering", "Acoustics", "Audio Production", "Signal Processing", "Music Theory"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in audio engineering.",
        subjects: ["Advanced Acoustics", "Digital Signal Processing", "Audio System Design", "Spatial Audio", "Music Technology"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of audio engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  },
  {
    id: "vr-ar-engineering",
    title: "VR & AR Engineering",
    description: "Design and develop virtual and augmented reality systems and applications.",
    color: "#E91E63",
    icon: "👓",
    longDescription: "VR & AR Engineering involves the design, development, and implementation of virtual reality (VR) and augmented reality (AR) systems and applications. It combines aspects of computer graphics, computer vision, and human-computer interaction to create immersive and interactive experiences. VR & AR engineers develop hardware, software, and content for a wide range of applications including gaming, education, healthcare, and industrial training.",
    careers: [
      {
        title: "VR/AR Developer",
        description: "Develop applications and content for virtual and augmented reality platforms.",
        salary: "$95,000 - $140,000"
      },
      {
        title: "Immersive Experience Designer",
        description: "Design interactive and immersive experiences for VR and AR.",
        salary: "$90,000 - $135,000"
      },
      {
        title: "3D Artist",
        description: "Create 3D models, textures, and animations for VR and AR applications.",
        salary: "$80,000 - $120,000"
      }
    ],
    domains: [
      {
        name: "VR Application Development",
        description: "Development of applications and content for virtual reality platforms."
      },
      {
        name: "AR Application Development",
        description: "Development of applications and content for augmented reality platforms."
      },
      {
        name: "3D Modeling and Animation",
        description: "Creation of 3D models, textures, and animations for VR and AR applications."
      },
      {
        name: "Human-Computer Interaction",
        description: "Design of interfaces and interactions between humans and computers."
      },
      {
        name: "Computer Vision",
        description: "Development of algorithms and techniques for computers to understand and interpret visual information."
      }
    ],
    education: [
      {
        level: "Bachelor's Degree",
        duration: "4 years",
        description: "Foundation in computer science, graphics, and human-computer interaction.",
        subjects: ["Computer Science", "Computer Graphics", "Human-Computer Interaction", "3D Modeling", "Programming"]
      },
      {
        level: "Master's Degree",
        duration: "2 years",
        description: "Specialized knowledge in VR and AR engineering.",
        subjects: ["Virtual Reality", "Augmented Reality", "Computer Vision", "Game Development", "Spatial Computing"]
      },
      {
        level: "Doctorate",
        duration: "4-5 years",
        description: "Advanced research and contribution to the field of VR and AR engineering.",
        subjects: ["Research Methodology", "Advanced Theory", "Specialized Topics", "Dissertation"]
      }
    ]
  }
];

// Reasons to study engineering
const reasonsToStudyEngineering = [
  {
    title: "High Demand",
    description: "Engineers are consistently in high demand across various industries worldwide.",
    color: "#FF5722"
  },
  {
    title: "Problem Solving",
    description: "Engineering teaches you to solve complex problems using analytical and creative thinking.",
    color: "#2196F3"
  },
  {
    title: "Financial Rewards",
    description: "Engineering careers typically offer above-average salaries and excellent benefits.",
    color: "#4CAF50"
  },
  {
    title: "Global Impact",
    description: "Engineers develop solutions to global challenges like climate change and healthcare access.",
    color: "#673AB7"
  },
  {
    title: "Innovation",
    description: "Engineering is at the forefront of innovation, creating new technologies and products.",
    color: "#FFC107"
  },
  {
    title: "Versatility",
    description: "An engineering degree provides a versatile skill set applicable to many career paths.",
    color: "#00BCD4"
  }
];

// DOM Elements
const branchesGrid = document.getElementById('branches-grid');
const allFieldsGrid = document.getElementById('all-fields-grid');
const reasonsGrid = document.getElementById('reasons-grid');
const exploreBtn = document.getElementById('explore-btn');
const modalContainer = document.getElementById('modal-container');
const fieldDetailModal = document.getElementById('field-detail-modal');
const domainModal = document.getElementById('domain-modal');
const detailModalClose = document.getElementById('detail-modal-close');
const domainModalClose = document.getElementById('domain-modal-close');
const detailBackBtn = document.getElementById('detail-back-btn');
const domainBackBtn = document.getElementById('domain-back-btn');

// Create particles in containers
function createParticles(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 15 + 5;
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    container.appendChild(particle);
  }
}

// Create field card
function createFieldCard(field) {
  const fieldCard = document.createElement('div');
  fieldCard.className = 'field-card';
  fieldCard.id = field.id;
  
  fieldCard.innerHTML = `
    <div class="field-card-color-bar" style="background-color: ${field.color}"></div>
    <div class="field-card-content">
      <div class="field-icon" style="background-color: ${field.color}20">
        <span style="font-size: 1.5rem;">${field.icon}</span>
      </div>
      <h3>${field.title}</h3>
      <p>${field.description}</p>
      <div class="field-card-actions">
        <button class="btn btn-outline explore-btn" data-field-id="${field.id}" style="color: ${field.color}; border-color: ${field.color}">
          Explore Programs
        </button>
        <button class="btn btn-outline domains-btn" data-field-id="${field.id}" style="color: white; border-color: white">
          View Domains
        </button>
      </div>
    </div>
  `;
  
  return fieldCard;
}

// Create reason card
function createReasonCard(reason, index) {
  const reasonCard = document.createElement('div');
  reasonCard.className = 'reason-card';
  
  reasonCard.innerHTML = `
    <span class="reason-number" style="color: ${reason.color}">${index + 1}</span>
    <h3 style="color: ${reason.color}">${reason.title}</h3>
    <p>${reason.description}</p>
  `;
  
  return reasonCard;
}

// Render fields in grid
function renderFields() {
  // Render a subset of fields in branches section
  const topFields = engineeringFields.slice(0, 8);
  topFields.forEach(field => {
    const fieldCard = createFieldCard(field);
    branchesGrid.appendChild(fieldCard);
  });
  
  // Render all fields in all fields section
  engineeringFields.forEach(field => {
    const fieldCard = createFieldCard(field);
    allFieldsGrid.appendChild(fieldCard);
  });
  
  // Add event listeners to buttons
  document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const fieldId = this.getAttribute('data-field-id');
      showFieldDetail(fieldId);
    });
  });
  
  document.querySelectorAll('.domains-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const fieldId = this.getAttribute('data-field-id');
      showDomainModal(fieldId);
    });
  });
}

// Render reasons
function renderReasons() {
  reasonsToStudyEngineering.forEach((reason, index) => {
    const reasonCard = createReasonCard(reason, index);
    reasonsGrid.appendChild(reasonCard);
  });
}

// Show field detail modal
function showFieldDetail(fieldId) {
  const field = engineeringFields.find(f => f.id === fieldId);
  if (!field) return;
  
  const detailTitle = document.getElementById('detail-title');
  const detailDescription = document.getElementById('detail-description');
  const detailOverview = document.getElementById('detail-overview');
  const detailDomains = document.getElementById('detail-domains');
  const detailCareers = document.getElementById('detail-careers');
  const detailEducation = document.getElementById('detail-education');
  
  detailTitle.textContent = field.title;
  detailTitle.style.color = field.color;
  detailDescription.textContent = field.description;
  detailOverview.textContent = field.longDescription;
  
  // Clear previous content
  detailDomains.innerHTML = '';
  detailCareers.innerHTML = '';
  detailEducation.innerHTML = '';
  
  // Add domains
  field.domains.slice(0, 4).forEach(domain => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="domain-bullet" style="color: ${field.color}">•</span>
      <div>
        <span class="domain-name">${domain.name}</span>
        <p class="domain-description">${domain.description}</p>
      </div>
    `;
    detailDomains.appendChild(li);
  });
  
  // Add careers
  field.careers.forEach(career => {
    const careerCard = document.createElement('div');
    careerCard.className = 'career-card';
    careerCard.innerHTML = `
      <h4>${career.title}</h4>
      <p>${career.description}</p>
      <p class="career-salary" style="color: ${field.color}">${career.salary}</p>
    `;
    detailCareers.appendChild(careerCard);
  });
  
  // Add education
  field.education.forEach(edu => {
    const eduItem = document.createElement('div');
    eduItem.className = 'education-item';
    eduItem.style.borderColor = field.color;
    
    let subjectsHTML = '';
    edu.subjects.forEach(subject => {
      subjectsHTML += `<span class="subject-tag" style="background-color: ${field.color}33; color: ${field.color}">${subject}</span>`;
    });
    
    eduItem.innerHTML = `
      <h4>${edu.level} (${edu.duration})</h4>
      <p>${edu.description}</p>
      <div class="education-subjects">
        ${subjectsHTML}
      </div>
    `;
    detailEducation.appendChild(eduItem);
  });
  
  // Set back button color
  detailBackBtn.style.backgroundColor = field.color;
  
  // Show modal
  modalContainer.classList.remove('hidden');
  fieldDetailModal.classList.remove('hidden');
  domainModal.classList.add('hidden');
  document.body.style.overflow = 'hidden';
}

// Show domain modal
function showDomainModal(fieldId) {
  const field = engineeringFields.find(f => f.id === fieldId);
  if (!field) return;
  
  const domainTitle = document.getElementById('domain-title');
  const domainGrid = document.getElementById('domain-grid');
  const domainVisualizer = document.getElementById('domain-visualizer');
  
  domainTitle.textContent = `${field.title} Domains`;
  domainTitle.style.color = field.color;
  
  // Clear previous content
  domainGrid.innerHTML = '';
  
  // Add domains
  field.domains.forEach(domain => {
    const domainCard = document.createElement('div');
    domainCard.className = 'domain-card';
    domainCard.style.borderColor = field.color;
    domainCard.innerHTML = `
      <h3>${domain.name}</h3>
      <p>${domain.description}</p>
    `;
    domainGrid.appendChild(domainCard);
  });
  
  // Create domain visualizer
  createDomainVisualizer(field, domainVisualizer);
  
  // Set back button color
  domainBackBtn.style.backgroundColor = field.color;
  
  // Show modal
  modalContainer.classList.remove('hidden');
  domainModal.classList.remove('hidden');
  fieldDetailModal.classList.add('hidden');
  document.body.style.overflow = 'hidden';
}

// Create domain visualizer
function createDomainVisualizer(field, container) {
  const domains = field.domains;
  container.innerHTML = '';
  
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  
  // Calculate positions for domain circles around center
  const positions = [];
  const radius = 35;
  const angleStep = (2 * Math.PI) / domains.length;
  
  for (let i = 0; i < domains.length; i++) {
    const angle = i * angleStep;
    positions.push({
      x: radius * Math.cos(angle) + 50,
      y: radius * Math.sin(angle) + 50,
    });
  }
  
  // Create connector lines
  positions.forEach((pos, index) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "50");
    line.setAttribute("y1", "50");
    line.setAttribute("x2", pos.x.toString());
    line.setAttribute("y2", pos.y.toString());
    line.setAttribute("stroke", field.color);
    line.setAttribute("stroke-width", "0.5");
    line.setAttribute("class", "domain-connector");
    svg.appendChild(line);
  });
  
  // Create domain circles
  positions.forEach((pos, index) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pos.x.toString());
    circle.setAttribute("cy", pos.y.toString());
    circle.setAttribute("r", "8");
    circle.setAttribute("fill", field.color);
    circle.setAttribute("opacity", "0.8");
    
    const text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text1.setAttribute("x", pos.x.toString());
    text1.setAttribute("y", (pos.y + 0.5).toString());
    text1.setAttribute("font-size", "3");
    text1.setAttribute("fill", "white");
    text1.setAttribute("text-anchor", "middle");
    text1.setAttribute("dominant-baseline", "middle");
    text1.textContent = domains[index].name.charAt(0).toUpperCase();
    
    const text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text2.setAttribute("x", pos.x.toString());
    text2.setAttribute("y", (pos.y + 15).toString());
    text2.setAttribute("font-size", "2.5");
    text2.setAttribute("fill", "white");
    text2.setAttribute("text-anchor", "middle");
    text2.setAttribute("dominant-baseline", "middle");
    text2.textContent = domains[index].name;
    
    g.appendChild(circle);
    g.appendChild(text1);
    g.appendChild(text2);
    svg.appendChild(g);
  });
  
  // Create center circle for field
  const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  centerCircle.setAttribute("cx", "50");
  centerCircle.setAttribute("cy", "50");
  centerCircle.setAttribute("r", "10");
  centerCircle.setAttribute("fill", field.color);
  
  const centerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  centerText.setAttribute("x", "50");
  centerText.setAttribute("y", "50");
  centerText.setAttribute("font-size", "3");
  centerText.setAttribute("fill", "white");
  centerText.setAttribute("text-anchor", "middle");
  centerText.setAttribute("dominant-baseline", "middle");
  centerText.textContent = field.title.split(' ')[0];
  
  svg.appendChild(centerCircle);
  svg.appendChild(centerText);
  
  container.appendChild(svg);
}

// Event listeners
window.addEventListener('DOMContentLoaded', function() {
  // Initialize particles
  createParticles('hero-particles', 30);
  createParticles('branches-particles', 20);
  createParticles('reasons-particles', 15);
  createParticles('fields-particles', 20);
  
  // Render fields and reasons
  renderFields();
  renderReasons();
  
  // Explore button click
  exploreBtn.addEventListener('click', function() {
    document.getElementById('branches').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Modal close button clicks
  detailModalClose.addEventListener('click', function() {
    modalContainer.classList.add('hidden');
    fieldDetailModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
  
  domainModalClose.addEventListener('click', function() {
    modalContainer.classList.add('hidden');
    domainModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
  
  // Back button clicks
  detailBackBtn.addEventListener('click', function() {
    modalContainer.classList.add('hidden');
    fieldDetailModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
  
  domainBackBtn.addEventListener('click', function() {
    modalContainer.classList.add('hidden');
    domainModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside of modal content
  modalContainer.addEventListener('click', function(event) {
    if (event.target === modalContainer) {
      modalContainer.classList.add('hidden');
      fieldDetailModal.classList.add('hidden');
      domainModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Listen for escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
      modalContainer.classList.add('hidden');
      fieldDetailModal.classList.add('hidden');
      domainModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
});
