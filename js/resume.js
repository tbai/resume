/**
 * This is my personal resume, check the link below if you prefer to read it in the 
 * website or if you need to print a copy.
 * 
 * @link http://resume.tiagobai.com
 */

/**********************************************************************************/
const name = "TIAGO XAVIER BAI"; 
/**********************************************************************************/
const job = "Full-Stack Software Engineer";

const contact = [ 
  "Sydney Australia", "tiagoxbai@gmail.com"
];
const pages = [
  "https://www.linkedin.com/in/tiagobai",
  "http://resume.tiagobai.com",
  "https://github.com/tbai/resume/blob/gh-pages/js/resume.js"
];

const summary = `
  I'm an experienced Full-Stack Engineer working with software development since 
  2004.

  I started my career working with C and C++ development for embedded devices, 
  moved to Java building digital publishing solutions for HP R&D and, back in 2007, 
  I created my first JavaScript single page web application. Since that time 
  Front-End development and UX is a passion. I consider myself as a Full-Stack 
  engineer though since I can and have worked on every end of constructing a web 
  application, from AWS configuration to UX design and CSS polishing.

  I'm also an experienced team leader and have worked as a technical leader on 
  several projects at HP and even had to work as a Project Manager in my latest 
  experience, although I'm proud to say that I never stopped writing code.

  At work, I'm focused, competent, creative and have a real desire to see the 
  result of my work being used and considered useful. I'm also constantly looking 
  to the latest technologies and practices related to web and software development 
  in general.
`;

const specialities = `
  Javascript (Angular 2+, Reactjs, Redux, node.js, mongodb, express, backbone...), 
  Kotlin, Java, C, C++, C#, Web Development (Grails, Django, .Net...), Linux...
`;


/**********************************************************************************/
// WORK HISTORY
/**********************************************************************************/
const workHistory = [];

// Skyfii
workHistory.push({
  position: "Senior Front-End Engineer",   date: { from: "Jan 2017", to: "Current" },
  company: {
    name:   "Skyfii.io",
    link:   "http://skyfii.io/"
  },  

  details: `
    Australian company provider of venue data analytics and marketing tools.

    Worked mostly on the development of new features for the web platform and 
    creating personalized WiFi Portal websites. The web platform was build using
    an Angular 1.x stack in the front-end and Spring with Scala in the back-end.
  `,

  technologies: [
    "Javascript", "Angular 1", "Webpack", "Scala", "Spring", "Git"
  ]
});

// HP Inc.
workHistory.push({
  position: "Lead Front-End Engineer",    date: { from: "Nov 2013", to: "Sep 2016" },
  company: {
    name:   "HP Inc.",
    link:   "http://www.hp.com/",
    team:   "HP SureSupply AutoDelivery team"
  },  

  details: `
    Web application that works in partnership with cartridge suppliers to manage the 
    ordering and delivery of ink and toner cartridges.

    I acted as a Project Manager and Front-End developer of the Brazilian local team 
    with 10 engineers working at the HP SureSupply Auto-Delivery platform. The project 
    was sponsored by HP US and my team was responsible for the Front-End development, 
    load/performance tests and automated tests using selenium.
  `,

  technologies: [
    "Javascript", "Typescript", "Backbone", "Angular 2", "React.js", "Grunt/Gulp",
    "Karma", "Node.js", "Express", "C#", "TFS", "Git"
  ]
});

workHistory.push({
  position: ".Net Software Engineer",     date: { from: "Nov 2012", to: "Oct 2013" },
  company: {
    name:   "HP Inc.",
    link:   "http://www.hp.com/",
    team:   "HP FutureSmart / UI Team"
  },  

  details: `
    LaserJet enterprise printer’s upgradable firmware user interface.

    I worked as a C# developer in this team for around one year. It was a very large 
    and distributed program with more than 200 people involved from US, Brazil, and 
    India.
  `,

  technologies: [
    "C#", ".NET", "Windows Forms", "UML", "SNMP", "CruiseControl", "Git", 
    "Visual Studio", "ALM", "MSBuild"
  ]
});

// T&T Engenheiros Associados | HP contractor
workHistory.push({
  position: "Senior Software Engineer",   date: { from: "Jun 2009", to: "Oct 2012" },
  company: {
    name:   "T&T Engenheiros Associados (HP contractor)",
    link:   "http://www.tet.com.br/en/"
  }, 

  details: `
    Technical leader and Full-Stack developer of a web application designed to make 
    it easy to access and print large-format documents using a tablet, smartphone, 
    laptop, or printer touchscreen.

    I worked on this project as a Full-Stack developer but I was the main responsible 
    for building the UI architecture and most of its features. The project was 
    sponsored by HP Barcelona where I had the opportunity to visit to transfer the 
    technology to a new business unit. My team had around 4 developers and we built 
    the entire system from scratch since the investigation phase until it went to 
    production using agile and continuous deployment techniques.
  `,

  technologies: [
    "Grails(Java, Groovy)", "Javascript", "Jenkins", "AWS", "Linux", "Git", "SVN"
  ]
});

// Perto S.A.
workHistory.push({
  position: "Senior Software Engineer",   date: { from: "Feb 2009", to: "May 2009" },
  company: {
    name:   "Perto S.A.",
    link:   "http://www.perto.com.br/en/"
  },  

  details: `
    Linux system development on embedded device (POS) at an Electrical/Electronic
    Manufacturing industry.
  `,

  technologies: [
    "Linux", "C++", "C", "Git"
  ]
});

// T&T Engenheiros Associados | HP contractor
workHistory.push({
  position: "Software Engineer",          date: { from: "May 2006", to: "Feb 2009" },
  company: {
    name:   "T&T Engenheiros Associados (HP contractor)",
    link:   "http://www.tet.com.br/en/"
  }, 

  details: `
    During this period I worked at two different R&D projects for HP Brazil. Both 
    projects were sponsored by HP Bristol and we had regular meetings with them to 
    plan, provide feedback and discuss future developments.


    * Development of single page web application from scratch for online document 
      creation using Javascript and Java in the back end.

    * Plugin development for InDesign to add and edit custom content for digital 
      publishing purposes.
  `,
  technologies: [
    "Java", "JSP", "Javascript", "YUI", "MooTools", "XML", "XSLT",
    "InDesign SDK", "C++", "CVS", "SVN"
  ]
});

// PUCRS
workHistory.push({
  position: "Intern Software Engineer",   date: { from: "Mar 2004", to: "May 2006" },
  company: {
    name:   "PUCRS university (HP research project)",
    link:   "http://www.pucrs.br/"
  },

  details: `
    Digital Documents Research in a partnership between HP Brazil and PUCRS university.

    This was my first contact with the development of web applications, during this 
    time I got to build, together with other two developers, a web application from 
    scratch with Java using JSP, Servlets, and Javascript on the client side. It was
    a mapping solution to provide the directions to the university campus buildings. 
    Google maps did not exist by that time.
  `,
  technologies: [
    "Java", "Javascript", "HTML", "CSS", "Tomcat", "CVS"
  ]
});


/**********************************************************************************/
// EDUCATION
/**********************************************************************************/
const educationHistory = [];

educationHistory.push({
  title:      "Computer Engineer",       date: { from: "Jan 2003", to: "Jan 2008" },
  university: {
    name:     "Pontifícia Universidade Católica do Rio Grande do Sul",
    link:     "http://www.pucrs.br/"  
  }
});


/**********************************************************************************/
// CERTIFICATIONS
/**********************************************************************************/
const certifications = [];
certifications.push({
  name:      "Scrum Product Owner",                                    date: "2015",
  authority: "SCRUM ALLIANCE"
});







/**********************************************************************************/
// You can stop here if you are only reading my resume from the code browser...
/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/

(function buildHtml(){
    const mainEl = document.querySelector("main");
    let currentSectionEl;

    function buildLinks(text){
        const regex = /http(s)?\:[^\s]+/g;
        return text.replace(regex, match => {
            return `<a href="${match}" target="_blank">${match}</a>`;
        });
    }

    function appendSection(){
        currentSectionEl = document.createElement("section");
        mainEl.appendChild(currentSectionEl);
    }

    function appendRow(html){
        const el = document.createElement("div");
        el.classList.add("row");
        if (html){
            el.innerHTML = html;
        }
        currentSectionEl.appendChild(el);
    }

    function createParagraphs(text){
        let str = "";
        text.split('\n\n').forEach(line => str += `<p>${line}</p>`);
        return str;
    }

    function appendSubtitle(text, classStr){
        appendRow(`<br><h3 class='no-margin ${classStr?classStr:''}'>${text}</h3><hr class='no-margin'><br>`);
    }
    
    // name and contact
    appendSection();
    appendRow(`
        <h2 class="no-margin personal-name">${name}</h2>
        <h5 class="personal-title">${job}</h5>
        <p>
            ${contact.map(buildLinks).join(" | ")}<br>
            ${pages.map(buildLinks).join('<br>')}
        </p>
        ${createParagraphs(summary)}
        <p><em>Specialities: ${specialities}</em></p>
    `);

    // work history
    appendSubtitle("Work History");
    workHistory.forEach((job, index) => {
        appendSection();
        appendRow(`
            <div class="eight columns">
                <h5 class="no-margin">${job.position}</h5>
                <p>
                    <a target="_blank" href="${job.company.link}">${job.company.name}</a>
                    ${job.company.team ? (' - <em>' + job.company.team + '</em>') : ''} 
                </p>
            </div>
            <div class="four columns text-right">
                <h5>${job.date.from} - ${job.date.to}</h5>
            </div>
        `);
        job.details.split("\n\n").forEach(p => appendRow(`<p>${p}</p>`));
        appendRow(`
            <p>Technologies: <em>${job.technologies.join(', ')}</em></p>
            ${index < workHistory.length-1 ? '<br>':''}
        `);
    });

    // education
    appendSection();
    appendSubtitle("Education");
    educationHistory.forEach(education => {
        appendRow(`
            <div class="eight columns">
                <h5 class="no-margin">${education.title}</h5>
                <p><a target="_blank" href="${education.university.link}">${education.university.name}</a></p>
            </div>
            <div class="four columns text-right">
                <h5>${education.date.from} - ${education.date.to}</h5>
            </div>
        `);
    });

    // certifications
    appendSection();
    appendSubtitle("Certifications");
    certifications.forEach(cert => {
        appendRow(`
            <div class="eight columns">
                <h5 class="no-margin">${cert.name}</h5>
                <p>${cert.authority}</p>
            </div>
            <div class="four columns text-right">
                <h5>${cert.date}</h5>
            </div>
        `);
    });

  })();
