/**
 * This is my personal resume, check the link below if you prefer to read it in the 
 * website or if you need to print a copy.
 * 
 * @link http://resume.tiagobai.com
 */

/**********************************************************************************/
let name = "TIAGO XAVIER BAI"; 
/**********************************************************************************/
let grad = "Computer Engineer";

let contact = [ "Porto Alegre Brazil", "+55 51 92184663", "tiagoxbai@gmail.com" ];

let summary = `
  Software Engineer specialized in Front End development.
  I work for HP since 2006 on R&D Projects, writing and designing advanced web
  applications and cloud based systems. I am a fast and competent Front End
  developer with extensive experience on Web technologies and attention to user
  experience and design.
`;


/**********************************************************************************/
// WORK HISTORY
/**********************************************************************************/
let workHistory = [];

// HP Inc.
workHistory.push({
  position: "Software Designer V",        date: { from: "Nov 2012", to: "Present" },
  company: {
    name:   "HP Inc.",
    link:   "http://www.hp.com/"
  },  

  details: `
    Project Manager and Front End Developer of the Brazil sub-team (10 members)
    working at the HP SureSupply Auto-Delivery platform.

    I joined the project to assume the leadership of the Front End development.
    My first assignment was to travel to Seattle to receive training at an UX
    company that built the first prototype and mock-ups, after that the Front End
    development was transferred to my team at HP Brazil.

    Today I am the Project Manager of the Brazilian team and I also work as a lead
    Front End developer. We are now creating a set of new web applications using
    Angular 2 in order to provide solutions for external partners.
  `,

  technologies: [
    "Javascript", "Backbone", "Angular 2", "React.js", "Grunt/Gulp", "Karma",
    "Node.js", "Express", "C#", "TFS", "Git"
  ]
});

// T&T Engenheiros Associados | HP contractor
workHistory.push({
  position: "Senior Software Engineer",  date: { from: "Jun 2009", to: "Oct 2012" },
  company: {
    name:   "T&T Engenheiros Associados (HP contractor)",
    link:   "http://www.tet.com.br/en/"
  }, 

  details: `
    Team leader and developer of a Web application designed to make it easy to
    access and print large-format documents using a tablet, smartphone, laptop, or
    printer touchscreen.

    I was the main Front End developer and the technical leader of the development
    team. The project was owned by HP Barcelona where I had the opportunity to
    visit to transfer the technology to a new business unit. My team had around 4
    developers and we built the entire system from scratch since the investigation
    phase until it went to production using agile and continuous deployment
    techniques.
  `,

  technologies: [
    "Grails(Java, Groovy)", "Javascript", "Jenkins", "AWS", "Linux", "Git", "SVN"
  ]
});

// Perto S.A.
workHistory.push({
  position: "Senior Software Engineer",  date: { from: "Feb 2009", to: "May 2009" },
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
  position: "Software Engineer",         date: { from: "May 2006", to: "Feb 2009" },
  company: {
    name:   "T&T Engenheiros Associados (HP contractor)",
    link:   "http://www.tet.com.br/en/"
  }, 

  details: `
    During this period I worked at two different R&D projects for HP Brazil.
    Both projects were sponsored by HP Bristol.

    * Development of single page web application for online document creation using
      Javascript and Java

    * Plugin development for InDesign
  `,
  technologies: [
    "Java", "JSP", "Javascript", "YUI", "MooTools", "XML", "XSLT",
    "InDesign SDK", "C++", "CVS", "SVN"
  ]
});

// PUCRS
workHistory.push({
  position: "Intern Software Engineer",  date: { from: "Mar 2004", to: "May 2006" },
  company: {
    name:   "PUCRS university (HP research project)",
    link:   "http://www.pucrs.br/"
  },

  details: `
    Digital Documents Research in a partnership between HP Brazil and PUCRS university.
  `,
  technologies: [
    "Java", "Javascript"
  ]
});


/**********************************************************************************/
// EDUCATION
/**********************************************************************************/
let educationHistory = [];

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
let certifications = [];
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

    function appendRow(html){
        let mainEl = document.querySelector("main");
        let el = document.createElement("div");
        el.classList.add("row");
        if (html){
            el.innerHTML = html;
        }
        mainEl.appendChild(el);
    }

    function appendSubtitle(text, classStr){
        appendRow(`<br><h3 class='no-margin ${classStr?classStr:''}'>${text}</h3><hr class='no-margin'><br>`);
    }

    // name and contact
    appendRow(`
        <h2 class="no-margin">${name}</h2>
        <h5>${grad}</h5>
        <p>${contact.join(" | ")}</p>
        <p>${summary}</p>
    `);

    // work history
    appendSubtitle("Work History");
    workHistory.forEach((job, index) => {
        appendRow(`
            <div class="eight columns">
                <h5 class="no-margin">${job.position}</h5>
                <p><a target="_blank" href="${job.company.link}">${job.company.name}</a></p>
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
    appendSubtitle("Education", 'page-break');
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