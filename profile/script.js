const profileData = {
    name: '',
    email: '',
    address: [],
    job: [],
    languages: [],
    frameworks: [],
    tools: [],
    databases: [],
    softSkills: [],
    experience: [],
    projects: [],
    education: [],
    certifications: [],
    tagline: '' // 나를 표현하는 한 줄 글귀 추가
};

var realReportLic =
"upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0WXyjOMqbrgvr3+iyFPC2UvWntFnlQAvG/WiN+dO0JtjVohH/45jQUC/9tdzLD/UUBWJVz4BABQVdAeQQV4lYgQ=";

let viewer;

function selectOption(category, option, button) {
    if (!profileData[category]) return;

    if (!profileData[category].includes(option)) {
        profileData[category].push(option);
        button.classList.add('selected');
    } else {
        profileData[category] = profileData[category].filter(item => item !== option);
        button.classList.remove('selected');
    }
}

function addProjectInputs() {
    const projectName = document.getElementById('project-name').value;
    
    if (projectName) {
        profileData.projects.push(projectName); // 프로젝트 이름만 추가
        displayProjects();
        document.getElementById('project-name').value = ''; // Clear input
    }
}

function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    profileData.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<p><strong>${project}</strong></p>`; // 프로젝트 이름만 출력
        projectList.appendChild(projectDiv);
    });
}

function generateReport() {
    const reportDiv = document.getElementById('profile-report');
    reportDiv.innerHTML = '';

    profileData.name = document.getElementById('name').value || 'yesjean';
    const emailLocal = document.getElementById('email-local').value;
    const emailDomain = document.getElementById('email-domain').value;
    const email = `${emailLocal}@${emailDomain}`;
    profileData.email = email || 'yesjean@wooritech.com';
    // profileData.address = document.getElementById('address').value || 'seoul';
    // profileData.job = document.getElementById('job').value || '개발자';
    profileData.tagline = document.getElementById('tagline').value || '열정적인 개발자입니다!'; // 한 줄 글귀 추가

    const profileIntro = document.createElement('div');
    profileIntro.innerHTML = `
        <h2>이름</h2> <p>${profileData.name}</p> 
        <h2>연락처</h2> <p>이메일: ${profileData.email}</p> 
        <p>주소: ${profileData.address}</p> <p>직업: ${profileData.job}</p>
        <h2>한 줄 글귀</h2> <p>${profileData.tagline}</p> <!-- 한 줄 글귀 출력 -->
    `;
    reportDiv.appendChild(profileIntro);

    const jsonReport = document.createElement('pre');
    jsonReport.innerText = JSON.stringify(profileData, null, 2);
    reportDiv.appendChild(jsonReport);

    const data = {
        profile: {
            type: 'simple',
            values: profileData
        }
    };
    viewer = new RealReport.ReportViewer("reportContainer", form, data);
    viewer.preview();
}

// Sample data initialization (for testing purposes)
function initializeSampleData() {
    profileData.languages = ["JavaScript", "Java"];
    profileData.frameworks = ["React", "Spring"];
    profileData.tools = ["Git", "Docker"];
    profileData.databases = ["SQLite"];
    profileData.softSkills = ["Communication", "Teamwork", "Problem Solving", "Time Management"];
    profileData.experience = ["Web Development", "Mobile Development"];
    profileData.projects = ['realreport']; // 초기 샘플 프로젝트
    profileData.education = ["Bachelor of Computer Science"];
    profileData.certifications = ["AWS Certified Solutions Architect"];
}

// Call the function to initialize sample data
// initializeSampleData();
