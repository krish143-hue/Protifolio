<script>
  function showMainContent() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
  }

  function showSection(section) {
    let content = '';
    switch (section) {
      case 'personal':
        content = `
          <div class="section-content">
            <h3>Personal Details</h3>
            <div class="personal-details">
              <p><strong>Name:</strong> Meesala Geetha Krishna</p>
              <p><strong>Email:</strong> geethakrishna8854@gmail.com</p>
              <p><strong>Phone:</strong> +91 7702524790</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/geetha-krishna-515a03251" target="_blank">LinkedIn Profile</a></p>
            </div>
          </div>`;
        break;
      case 'about':
        content = `
          <div class="section-content justified-text">
            <h3>About Me</h3>
            <p>I'm a Computer Science undergraduate with a passion for blending technology and innovation to solve real-world problems.<br>
            With a strong grasp of programming, data-driven decision making, and process improvement, I enjoy turning complex challenges into streamlined solutions.<br><br>
            Driven by curiosity and a continuous learning mindset, I thrive in collaborative environments where I can contribute to impactful projects, enhance operational efficiency, and create meaningful user experiences. I'm especially interested in using technology to bridge gaps in business operations and deliver smarter, faster outcomes.</p>
          </div>`;
        break;
      case 'skills':
        content = `
          <div class="section-content">
            <h3>Skills</h3>
            <ul>
                <h2>Technical Skills</h2>
                <li>Programming Languages:C, Java (OOPS), Python, R Proggraming(basic)</li>
                <li>Web Development (HTML, CSS, basic JS)</li>
                <li>Database:SQL, Oracle</li>
                <li>IDEs:Jupyter Notebook</li><br><br>
                <h2>Soft Skills</h2>
                <P> Strong interpersonal and leadership skills, driving productivity and innovation.</P>
              </ul>
          </div>`;
        break;
      case 'work':
        content = `
          <div class="section-content">
            <h3>Work Experience</h3>
            <p>Completed a 4-month virtual internship focused on Artificial Intelligence during 2024–2025.</p>
          </div>`;
        break;
      case 'projects':
        content = `
          <div class="section-content">
            <h3>Projects</h3>
            <ul>
              <li>Sentiment Analysis using CNN</li>
              <li>YOLO-Based Object Detection</li>
              <li>ACO-Driven Smart Chatbot for Heart Disease
                  Prediction Using Machine Learning</li>
            </ul>
          </div>`;
        break;
      case 'certifications':
        content = `
          <div class="section-content">
            <h3>Certifications</h3>
            <ul>
              <li>Paper on Tumor Detection using DNN - ICRTAMC-2023</li>
              <li>Face Detection using PNN - ICNASC-24</li>
              <li>Init Math 2024 - VOCC Tamilnadu</li>
              <li>End-to-End Data Science Workshop - VFSTR</li>
              <li>YUVA BHERI – Cultural Festival</li>
              <li>NPTEL Python Course (89%)</li>
              <li>AI Internship - GenZ & MSME</li>
              
            </ul>
          </div>`;
        break;
      case 'extra':
        content = `
          <div class="section-content">
            <h3>Extracurricular Activities</h3>
            <ul>
              <li>Member of Thadav Crew Dance Club – lead and choreographed stage performances.</li>
              <li>Section Coordinator at UEAC NSS, Vignan’s University – organized awareness campaigns.</li>
              <li>NSS Chief Organizer – coordinated department-level volunteer programs.</li>
            </ul>
          </div>`;
        break;
      case 'declaration':
        content = `
          <div class="section-content">
            <h3>Declaration</h3>
            <p>I hereby declare that the information provided is true and accurate to the best of my knowledge.</p>
          </div>`;
        break;
      default:
        content = '';
    }
    document.getElementById('sectionDisplay').innerHTML = content;
  }

  function goToLanding() {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('sectionDisplay').innerHTML = '';
    document.getElementById('landing').style.display = 'flex';
  }
</script>
