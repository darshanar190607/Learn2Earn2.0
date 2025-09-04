document.addEventListener('DOMContentLoaded', function() {
    // Combined college data for both Tamil Nadu and All India
    const collegesData = [
      // Tamil Nadu Colleges
      {
        id: 1,
        name: "Indian Institute of Technology Madras",
        city: "Chennai",
        state: "Tamil Nadu",
        nirf_rank: 1,
        website: "https://www.iitm.ac.in/",
        description: "IIT Madras is one of India's foremost institutes of national importance in higher technological education, basic and applied research.",
        eligibility: "JEE Advanced qualification with high rank",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "M.Sc", "MBA", "PhD"],
        facilities: ["World-class laboratories", "Central library", "Sports complex", "Hostels", "Medical center"],
        placement: "Average package: ₹16-18 LPA with top recruiters from all sectors",
        ranking: "Ranked #1 in Engineering by NIRF for consecutive years",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
      },
      {
        id: 2,
        name: "National Institute of Technology Tiruchirappalli",
        city: "Tiruchirappalli",
        state: "Tamil Nadu",
        nirf_rank: 9,
        website: "https://www.nitt.edu/",
        description: "NIT Trichy is one of the premier engineering institutes in India known for its academic excellence and research contributions.",
        eligibility: "JEE Main qualification with good rank",
        fees: "₹1,25,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
        facilities: ["Advanced labs", "Central library", "State-of-art sports facilities", "Wi-Fi campus", "Hostels"],
        placement: "Average package: ₹10-12 LPA with over 90% placement rate",
        ranking: "Ranked #9 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b3/NIT_Trichy_logo.png"
      },
      {
        id: 3,
        name: "Anna University",
        city: "Chennai",
        state: "Tamil Nadu",
        nirf_rank: 14,
        website: "https://www.annauniv.edu/",
        description: "Anna University is a prestigious state technical university offering world-class education in engineering and technology.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank based on 12th scores",
        fees: "₹50,000 - ₹85,000 per annum for B.E/B.Tech",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "PhD"],
        facilities: ["Research centers", "Massive library", "Sports facilities", "Hostels", "Incubation center"],
        placement: "Average package: ₹6-8 LPA with reputed companies",
        ranking: "Ranked #14 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c4/Anna_University_Logo.svg"
      },
      {
        id: 4,
        name: "Vellore Institute of Technology",
        city: "Vellore",
        state: "Tamil Nadu",
        nirf_rank: 15,
        website: "https://vit.ac.in/",
        description: "VIT is one of India's leading private engineering institutions with a strong focus on research and internationalization.",
        eligibility: "VITEEE entrance exam or JEE Main scores",
        fees: "₹1,80,000 - ₹2,50,000 per annum for B.Tech",
        courses: ["B.Tech", "M.Tech", "MCA", "MBA", "PhD"],
        facilities: ["Smart classrooms", "Central library", "Sports complex", "International hostels", "Technology business incubator"],
        placement: "Average package: ₹7-9 LPA with 95%+ placement record",
        ranking: "Ranked #15 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal.svg/1200px-Vellore_Institute_of_Technology_seal.svg.png"
      },
      {
        id: 5,
        name: "Shanmugha Arts Science Technology & Research Academy",
        city: "Thanjavur",
        nirf_rank: 37,
        website: "https://www.sastra.edu/",
        description: "SASTRA is known for its academic excellence and innovative teaching methodologies in various disciplines.",
        eligibility: "JEE Main or SASTRA entrance exam",
        fees: "₹1,25,000 - ₹1,80,000 per annum",
        courses: ["B.Tech", "M.Tech", "MBA", "Law", "Pharmacy", "PhD"],
        facilities: ["Central libraries", "Labs", "Convention center", "Sports complex", "Hostels"],
        placement: "Average package: ₹6-7 LPA with good placement rate",
        ranking: "Ranked #37 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d4/SASTRA_University_Logo.svg"
      },
      {
        id: 6,
        name: "S.R.M. Institute of Science and Technology",
        city: "Chennai",
        nirf_rank: 41,
        website: "https://www.srmist.edu.in/",
        description: "SRM is a leading private university known for its diverse programs and global collaborations.",
        eligibility: "SRMJEEE entrance exam or JEE Main scores",
        fees: "₹1,75,000 - ₹3,00,000 per annum for B.Tech",
        courses: ["B.Tech", "M.Tech", "Medicine", "Management", "Law", "PhD"],
        facilities: ["Tech centers", "Library", "Stadium", "Swimming pool", "Hostels"],
        placement: "Average package: ₹6.5-8 LPA with high-profile recruiters",
        ranking: "Ranked #41 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/SRM_University_logo.png/220px-SRM_University_logo.png"
      },
      {
        id: 7,
        name: "Sri Sivasubramaniya Nadar College of Engineering",
        city: "Kancheepuram",
        nirf_rank: 44,
        website: "https://www.ssn.edu.in/",
        description: "SSN is a premier engineering institution founded by Mr. Shiv Nadar with a focus on holistic education.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹1,50,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "PhD"],
        facilities: ["Research labs", "Library", "Sports complex", "Hostels", "Innovation center"],
        placement: "Average package: ₹7-8 LPA with top companies recruiting",
        ranking: "Ranked #44 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/SSN_College_of_Engineering_logo.png"
      },
      {
        id: 8,
        name: "PSG College of Technology",
        city: "Coimbatore",
        nirf_rank: 49,
        website: "https://www.psgtech.edu/",
        description: "PSG Tech is one of the oldest engineering institutions in Tamil Nadu known for its quality education and industry connections.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹90,000 - ₹1,40,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MCA", "MBA", "PhD"],
        facilities: ["Tech center", "Central library", "Sports complex", "Hostels", "Entrepreneurship cell"],
        placement: "Average package: ₹6-7 LPA with consistent placement records",
        ranking: "Ranked #49 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/2/23/PSGCollegeOfTechnology.svg"
      },
      {
        id: 9,
        name: "Sathyabama Institute of Science and Technology",
        city: "Chennai",
        nirf_rank: 51,
        website: "https://www.sathyabama.ac.in/",
        description: "Sathyabama is a deemed university known for its technical education and research contributions.",
        eligibility: "Entrance exam or 12th marks (60% in PCM)",
        fees: "₹1,50,000 - ₹2,00,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "PhD"],
        facilities: ["Research centers", "Sports complex", "Central library", "Hostels", "Auditorium"],
        placement: "Average package: ₹5-6 LPA with good placement record",
        ranking: "Ranked #51 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/1/18/Sathyabama_University_Logo.png"
      },
      {
        id: 10,
        name: "Kalasalingam Academy of Research and Higher Education",
        city: "Srivilliputtur",
        nirf_rank: 60,
        website: "https://kalasalingam.ac.in/",
        description: "KARE is known for its quality education in rural Tamil Nadu and strong academic programs.",
        eligibility: "KCET entrance exam or 12th marks (60% in PCM)",
        fees: "₹1,25,000 - ₹1,75,000 per annum",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD"],
        facilities: ["Digital library", "Labs", "Sports facilities", "Hostels", "Incubation center"],
        placement: "Average package: ₹4-5 LPA",
        ranking: "Ranked #60 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Kalasalingam_University_logo.png"
      },
      {
        id: 11,
        name: "Thiagarajar College of Engineering",
        city: "Madurai",
        nirf_rank: 64,
        website: "https://www.tce.edu/",
        description: "TCE is a prestigious institution in South Tamil Nadu known for its academic excellence and industry connections.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹75,000 - ₹1,00,000 per annum",
        courses: ["B.E", "M.E", "MBA", "PhD"],
        facilities: ["Research labs", "Library", "Sports facilities", "Hostels", "Alumni center"],
        placement: "Average package: ₹5-6 LPA with good placement rate",
        ranking: "Ranked #64 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/1/12/Thiagarajar_College_of_Engineering_logo.png"
      },
      {
        id: 12,
        name: "Kumaraguru College of Technology",
        city: "Coimbatore",
        nirf_rank: 82,
        website: "https://www.kct.ac.in/",
        description: "KCT is known for its holistic approach to education and strong industry connections in the textile hub of Coimbatore.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹85,000 - ₹1,20,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "MBA", "PhD"],
        facilities: ["Forge (innovation hub)", "Central library", "Sports complex", "Hostels", "Maker space"],
        placement: "Average package: ₹4.5-6 LPA with good placement",
        ranking: "Ranked #82 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/0/08/Kumaraguru_College_of_Technology_logo.png"
      },
      {
        id: 13,
        name: "Sri Krishna College of Engineering and Technology",
        city: "Coimbatore",
        nirf_rank: 83,
        website: "https://www.skcet.ac.in/",
        description: "SKCET is known for its disciplined academic environment and quality technical education.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹85,000 - ₹1,20,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "PhD"],
        facilities: ["Modern labs", "Library", "Sports facilities", "Hostels", "ICT-enabled classrooms"],
        placement: "Average package: ₹4-5 LPA",
        ranking: "Ranked #83 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/6/65/Sri_Krishna_College_of_Engineering_and_Technology_logo.png"
      },
      {
        id: 14,
        name: "Coimbatore Institute of Technology",
        city: "Coimbatore",
        nirf_rank: 90,
        website: "https://www.cit.edu.in/",
        description: "CIT is one of the oldest engineering institutions in Tamil Nadu known for its quality technical education.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹70,000 - ₹90,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "MCA", "MBA", "PhD"],
        facilities: ["Technical labs", "Library", "Sports grounds", "Hostels", "Computer centers"],
        placement: "Average package: ₹5-6 LPA with reputed companies",
        ranking: "Ranked #90 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/5/53/CIT_Coimbatore_logo.png"
      },
      {
        id: 15,
        name: "Government College of Technology",
        city: "Coimbatore",
        state: "Tamil Nadu",
        nirf_rank: 104,
        website: "https://gct.ac.in/",
        description: "GCT is a prestigious government institution offering quality technical education at affordable cost.",
        eligibility: "Tamil Nadu Engineering Admissions (TNEA) rank",
        fees: "₹30,000 - ₹50,000 per annum",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MCA", "PhD"],
        facilities: ["Technical labs", "Library", "Sports facilities", "Hostels", "Placement cell"],
        placement: "Average package: ₹4.5-5.5 LPA with good placement record",
        ranking: "Ranked #104 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/9/99/Government_College_of_Technology%2C_Coimbatore_Logo.png"
      },
      
      // All India Colleges (excluding Tamil Nadu ones already listed above)
      {
        id: 16,
        name: "Indian Institute of Technology Delhi",
        city: "New Delhi",
        state: "Delhi",
        nirf_rank: 2,
        website: "https://www.iitd.ac.in/",
        description: "IIT Delhi is a public technical university located in Delhi. It is recognized for its excellence in education and research.",
        eligibility: "JEE Advanced qualification with high rank",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "M.Sc", "PhD"],
        facilities: ["State-of-the-art laboratories", "Central library", "Sports complex", "Hostels"],
        placement: "Average package: ₹18-20 LPA with top recruiters",
        ranking: "Ranked #2 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg"
      },
      {
        id: 17,
        name: "Indian Institute of Technology Bombay",
        city: "Mumbai",
        state: "Maharashtra",
        nirf_rank: 3,
        website: "https://www.iitb.ac.in/",
        description: "IIT Bombay is a public engineering institution recognized globally for its outstanding education.",
        eligibility: "JEE Advanced qualification with high rank",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "M.Des", "PhD"],
        facilities: ["Research labs", "Central library", "Sports facilities", "Hostels"],
        placement: "Average package: ₹17-19 LPA with leading companies",
        ranking: "Ranked #3 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a3/IIT_Bombay_Logo.svg"
      },
      {
        id: 18,
        name: "Indian Institute of Technology Kanpur",
        city: "Kanpur",
        state: "Uttar Pradesh",
        nirf_rank: 4,
        website: "https://www.iitk.ac.in/",
        description: "IIT Kanpur is known for its rigorous academic programs and research facilities.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
        facilities: ["Advanced labs", "Library", "Sports complex", "Hostels"],
        placement: "Average package: ₹15-17 LPA",
        ranking: "Ranked #4 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/IIT_Kanpur_Logo.svg"
      },
      {
        id: 19,
        name: "Indian Institute of Technology Kharagpur",
        city: "Kharagpur",
        state: "West Bengal",
        nirf_rank: 5,
        website: "https://www.iitkgp.ac.in/",
        description: "IIT Kharagpur is the first IIT established in India and offers a wide range of courses.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "Law", "MBA", "PhD"],
        facilities: ["Research centers", "Central library", "Sports facilities", "Hostels"],
        placement: "Average package: ₹14-16 LPA",
        ranking: "Ranked #5 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg"
      },
      {
        id: 20,
        name: "Indian Institute of Technology Roorkee",
        city: "Roorkee",
        state: "Uttarakhand",
        nirf_rank: 6,
        website: "https://www.iitr.ac.in/",
        description: "IIT Roorkee is known for its excellence in engineering education and research.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "Architecture", "PhD"],
        facilities: ["Research labs", "Mahatma Gandhi Central Library", "Sports facilities", "Hostels"],
        placement: "Average package: ₹13-15 LPA",
        ranking: "Ranked #6 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Indian_Institute_of_Technology_Roorkee_logo.png"
      },
      {
        id: 21,
        name: "Indian Institute of Technology Guwahati",
        city: "Guwahati",
        state: "Assam",
        nirf_rank: 7,
        website: "https://www.iitg.ac.in/",
        description: "IIT Guwahati is known for its beautiful campus and quality education.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "B.Des", "M.Tech", "PhD"],
        facilities: ["Research centers", "Central library", "Sports facilities", "Hostels"],
        placement: "Average package: ₹12-14 LPA",
        ranking: "Ranked #7 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Guwahati_Logo.svg"
      },
      {
        id: 22,
        name: "Indian Institute of Technology Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        nirf_rank: 8,
        website: "https://www.iith.ac.in/",
        description: "IIT Hyderabad is known for its innovative teaching and research methods.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "M.Des", "PhD"],
        facilities: ["Research labs", "Library", "Sports facilities", "Hostels"],
        placement: "Average package: ₹11-13 LPA",
        ranking: "Ranked #8 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/1/19/IIT_Hyderabad_logo.png"
      },
      {
        id: 23,
        name: "Indian Institute of Technology Indore",
        city: "Indore",
        state: "Madhya Pradesh",
        nirf_rank: 10,
        website: "https://www.iiti.ac.in/",
        description: "IIT Indore has rapidly established itself as a leading institution for engineering education.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "M.Sc", "PhD"],
        facilities: ["Research facilities", "Library", "Sports complex", "Hostels"],
        placement: "Average package: ₹10-12 LPA",
        ranking: "Ranked #10 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Indian_Institute_of_Technology%2C_Indore_Logo.svg"
      },
      {
        id: 24,
        name: "Indian Institute of Technology (BHU) Varanasi",
        city: "Varanasi",
        state: "Uttar Pradesh",
        nirf_rank: 11,
        website: "https://www.iitbhu.ac.in/",
        description: "IIT (BHU) Varanasi offers quality education in engineering and technology.",
        eligibility: "JEE Advanced qualification",
        fees: "₹2,20,000 per annum for B.Tech programs",
        courses: ["B.Tech", "IDD", "M.Tech", "PhD"],
        facilities: ["Research labs", "Library", "Sports facilities", "Hostels"],
        placement: "Average package: ₹10-12 LPA",
        ranking: "Ranked #11 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/8/84/Indian_Institute_of_Technology_%28BHU%29_Varanasi_Logo.svg"
      },
      {
        id: 25,
        name: "National Institute of Technology Karnataka",
        city: "Surathkal",
        state: "Karnataka",
        nirf_rank: 13,
        website: "https://www.nitk.ac.in/",
        description: "NITK Surathkal is one of the top NITs in India known for its academic excellence.",
        eligibility: "JEE Main qualification",
        fees: "₹1,25,000 per annum for B.Tech programs",
        courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
        facilities: ["Research facilities", "Central library", "Sports complex", "Hostels"],
        placement: "Average package: ₹8-10 LPA",
        ranking: "Ranked #13 in Engineering by NIRF",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d0/National_Institute_of_Technology%2C_Karnataka_Logo.png"
      },
      // Add more colleges to reach 100+ total (continuing the pattern)
      // This is a subset for demonstration, but in production you would add all 100+
    ];
  
    // DOM elements
    const collegesList = document.getElementById('collegesList');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const modal = document.getElementById('collegeModal');
    const modalContent = document.getElementById('modalContent');
    const closeButton = document.querySelector('.close-button');
    const filterContainer = document.getElementById('filterContainer');
    const allIndiaFilter = document.getElementById('allIndiaFilter');
    const tamilNaduFilter = document.getElementById('tamilNaduFilter');
    const allCollegesFilter = document.getElementById('allCollegesFilter');
  
    let currentFilter = 'all'; // Default filter: show all colleges
  
    // Set up filter event listeners
    if (allIndiaFilter) {
      allIndiaFilter.addEventListener('click', function() {
        currentFilter = 'all-india';
        updateActiveFilter();
        performSearch();
      });
    }
  
    if (tamilNaduFilter) {
      tamilNaduFilter.addEventListener('click', function() {
        currentFilter = 'tamil-nadu';
        updateActiveFilter();
        performSearch();
      });
    }
  
    if (allCollegesFilter) {
      allCollegesFilter.addEventListener('click', function() {
        currentFilter = 'all';
        updateActiveFilter();
        performSearch();
      });
    }
  
    function updateActiveFilter() {
      // Remove active class from all filters
      if (filterContainer) {
        const filters = filterContainer.querySelectorAll('.filter-button');
        filters.forEach(filter => filter.classList.remove('active-filter'));
        
        // Add active class to current filter
        if (currentFilter === 'all-india') {
          allIndiaFilter.classList.add('active-filter');
        } else if (currentFilter === 'tamil-nadu') {
          tamilNaduFilter.classList.add('active-filter');
        } else {
          allCollegesFilter.classList.add('active-filter');
        }
      }
    }
  
    // Display all colleges initially
    displayColleges(collegesData);
  
    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      let filteredColleges = collegesData;
      
      // Apply state filter if not 'all'
      if (currentFilter === 'tamil-nadu') {
        filteredColleges = collegesData.filter(college => 
          college.state === 'Tamil Nadu'
        );
      } else if (currentFilter === 'all-india') {
        filteredColleges = collegesData.filter(college => 
          college.state !== 'Tamil Nadu'
        );
      }
      
      // Then apply search term filter
      filteredColleges = filteredColleges.filter(college => 
        college.name.toLowerCase().includes(searchTerm) || 
        college.city.toLowerCase().includes(searchTerm)
      );
      
      displayColleges(filteredColleges);
    }
  
    // Display colleges function
    function displayColleges(colleges) {
      collegesList.innerHTML = '';
      
      if (colleges.length === 0) {
        collegesList.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; padding: 20px;">
              No colleges found matching your search criteria
            </td>
          </tr>
        `;
        return;
      }
      
      colleges.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${college.nirf_rank}</td>
          <td>${college.name}</td>
          <td>${college.city}</td>
          <td>${college.state}</td>
          <td class="text-center">
            <a href="${college.website}" target="_blank" rel="noopener noreferrer" class="website-link">
              Visit Website
            </a>
          </td>
          <td style="text-align: center;">
            <button class="info-button" data-id="${college.id}">Info</button>
          </td>
        `;
        collegesList.appendChild(row);
      });
  
      // Add event listeners to info buttons
      document.querySelectorAll('.info-button').forEach(button => {
        button.addEventListener('click', function() {
          const collegeId = parseInt(this.getAttribute('data-id'));
          const college = collegesData.find(c => c.id === collegeId);
          if (college) {
            showCollegeDetails(college);
          }
        });
      });
    }
  
    // Show college details in modal
    function showCollegeDetails(college) {
      modalContent.innerHTML = `
        <div class="college-details">
          <div class="left-section">
            <img src="${college.image}" alt="${college.name}" class="college-image" onerror="this.src='https://via.placeholder.com/200x200?text=College+Logo'">
            <div class="info-section">
              <h3>Overview</h3>
              <p>${college.description}</p>
            </div>
            <div class="info-section">
              <h3>Available Courses</h3>
              <div class="badge-container">
                ${college.courses.map(course => `<span class="badge">${course}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="right-section">
            <h2>${college.name}</h2>
            <div class="info-section">
              <h3>Eligibility</h3>
              <p>${college.eligibility}</p>
            </div>
            <div class="info-section">
              <h3>Fees Structure</h3>
              <p>${college.fees}</p>
            </div>
            <div class="info-section">
              <h3>Facilities</h3>
              <ul>
                ${college.facilities.map(facility => `<li>${facility}</li>`).join('')}
              </ul>
            </div>
            <div class="info-section">
              <h3>Placements</h3>
              <p>${college.placement}</p>
            </div>
            <div class="info-section">
              <h3>Ranking</h3>
              <p>${college.ranking}</p>
            </div>
            <div class="info-section">
              <a href="${college.website}" target="_blank" rel="noopener noreferrer" class="website-link" style="display: inline-flex; justify-content: flex-start;">
                Visit Official Website
              </a>
            </div>
          </div>
        </div>
      `;
      modal.style.display = 'block';
    }
  
    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  