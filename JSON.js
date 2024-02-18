//Own Resume in JSON format

const resume = {
    "Name": "Rajganesh.S",
    "Graduation":"B.E.,CSE",
    "Title": "FSD Learner",
    "Email": "ganezsouth@live.com",
    "Phone": "8838539223",
    "City":"Coimbatore",
    "State":"Tamilnadu",
    "Blood Group": "O+ Positive",
    "Summary": "I am passionate about learning Web Application",
    "Skills": [
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
    //JSON format
    let JSONresume = JSON.stringify(resume);
    //JSON Object format
    let JSONobj = JSON.parse(JSONresume);    
    //Using for in loop
    for (let i in JSONobj) {
        console.log(`${i} : ${JSONobj[i]}`);
    }
    //Using for... loop
   let iterator = Object.keys(JSONobj); 
    for (let i = 0; i < iterator.length; i++) {
        console.log(`${iterator[i]} : ${JSONobj[iterator[i]]}`);
    }
    //Using for of loop
    for(let i of iterator) {
    console.log(`${i} : ${JSONobj[i]}`);
    }
    //Using forEach loop
    let iterator1 = Object.entries(JSONobj);
    function iterator4each(iterator1){
     console.log(`${iterator1}`.split(",").join(":"));
    }
    iterator1.forEach(iterator4each);





    
    


