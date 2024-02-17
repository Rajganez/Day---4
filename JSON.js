//Own Resume in JSON format

const resume = {
    "name": "Rajganesh",
    "title": "FSD Learner",
    "email": "ganezsouth@live.com",
    "phone": "8838539223",
    "City":"Coimbatore",
    "State":"Tamilnadu",
    "Blood Group": "O+ Positive",
    "Summary": "I am passionate about learning Web Application",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
    ]
    }
    let JSONresume = JSON.stringify(resume)
    console.log(JSONresume);