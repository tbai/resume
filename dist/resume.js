"use strict";

/**
 * This is my personal resume, check the link below if you prefer to read it in the 
 * website or if you need to print a copy.
 * 
 * @link http://resume.tiagobai.com
 */

/**********************************************************************************/
var name = "TIAGO XAVIER BAI";
/**********************************************************************************/
var job = "Full-Stack Software Engineer";

var contact = ["Sydney Australia", "0404 347 025", "tiagoxbai@gmail.com"];
var pages = ["https://www.linkedin.com/in/tiagobai", "http://resume.tiagobai.com", "https://github.com/tbai/resume/blob/gh-pages/js/resume.js"];

var summary = "\n  I'm an experienced Full-Stack Engineer working with software development since \n  2004.\n\n  I started my career working with C and C++ development for embedded devices, \n  moved to Java building digital publishing solutions for HP R&D and, back in 2007, \n  I created my first JavaScript single page web application. Since that time \n  Front-End development and UX is a passion. I consider myself as a Full-Stack \n  engineer though since I can and have worked on every end of constructing a web \n  application, from AWS configuration to UX design and CSS polishing.\n\n  I'm also an experienced team leader and have worked as a technical leader on \n  several projects at HP and even had to work as a Project Manager in my latest \n  experience, although I'm proud to say that I never stopped writing code.\n\n  At work, I'm focused, competent, creative and have a real desire to see the \n  result of my work being used and considered useful. I'm also constantly looking \n  to the latest technologies and practices related to web and software development \n  in general.\n\n  I'm looking for Senior Front-End or Full-Stack Software Engineer positions in \n  Sydney. I have a permanent resident visa and I don't mind about the size of the \n  company as long as it has a good and friendly environment, focus on user \n  experience and innovation. \n";

var specialities = "\n    Javascript (Angular 2, Reactjs, Redux, karma, node.js, mongodb, express, grunt, \n    backbone, marionette...), Java, C, C++, C#, Web Development (Grails, Django, \n    .Net...),  Linux...\n";

/**********************************************************************************/
// WORK HISTORY
/**********************************************************************************/
var workHistory = [];

// HP Inc.
workHistory.push({
    position: "Lead Front-End Engineer", date: { from: "Nov 2013", to: "Sep 2016" },
    company: {
        name: "HP Inc.",
        link: "http://www.hp.com/",
        team: "HP SureSupply AutoDelivery team"
    },

    details: "\n    Web application that works in partnership with cartridge suppliers to manage the \n    ordering and delivery of ink and toner cartridges.\n\n    I acted as a Project Manager and Front-End developer of the Brazilian local team \n    with 10 engineers working at the HP SureSupply Auto-Delivery platform. The project \n    was sponsored by HP US and my team was responsible for the Front-End development, \n    load/performance tests and automated tests using selenium.\n  ",

    technologies: ["Javascript", "Backbone", "Angular 2", "React.js", "Grunt/Gulp", "Karma", "Node.js", "Express", "C#", "TFS", "Git"]
});

workHistory.push({
    position: ".Net Software Engineer", date: { from: "Nov 2012", to: "Oct 2013" },
    company: {
        name: "HP Inc.",
        link: "http://www.hp.com/",
        team: "HP FutureSmart / UI Team"
    },

    details: "\n    LaserJet enterprise printer\u2019s upgradable firmware user interface.\n\n    I worked as a C# developer in this team for around one year. It was a very large and\n    distributed program with more than 200 people involved from US, Brazil, and India.\n  ",

    technologies: ["C#", ".NET", "Windows Forms", "UML", "SNMP", "CruiseControl", "Git", "Visual Studio", "ALM", "MSBuild"]
});

// T&T Engenheiros Associados | HP contractor
workHistory.push({
    position: "Senior Software Engineer", date: { from: "Jun 2009", to: "Oct 2012" },
    company: {
        name: "T&T Engenheiros Associados (HP contractor)",
        link: "http://www.tet.com.br/en/"
    },

    details: "\n    Technical leader and Full-Stack developer of a web application designed to make \n    it easy to access and print large-format documents using a tablet, smartphone, \n    laptop, or printer touchscreen.\n\n    I worked on this project as a Full-Stack developer but I was the main responsible \n    for building the UI architecture and most of its features. The project was \n    sponsored by HP Barcelona where I had the opportunity to visit to transfer the \n    technology to a new business unit. My team had around 4 developers and we built \n    the entire system from scratch since the investigation phase until it went to \n    production using agile and continuous deployment techniques.\n  ",

    technologies: ["Grails(Java, Groovy)", "Javascript", "Jenkins", "AWS", "Linux", "Git", "SVN"]
});

// Perto S.A.
workHistory.push({
    position: "Senior Software Engineer", date: { from: "Feb 2009", to: "May 2009" },
    company: {
        name: "Perto S.A.",
        link: "http://www.perto.com.br/en/"
    },

    details: "\n    Linux system development on embedded device (POS) at an Electrical/Electronic\n    Manufacturing industry.\n  ",

    technologies: ["Linux", "C++", "C", "Git"]
});

// T&T Engenheiros Associados | HP contractor
workHistory.push({
    position: "Software Engineer", date: { from: "May 2006", to: "Feb 2009" },
    company: {
        name: "T&T Engenheiros Associados (HP contractor)",
        link: "http://www.tet.com.br/en/"
    },

    details: "\n    During this period I worked at two different R&D projects for HP Brazil. Both \n    projects were sponsored by HP Bristol and we had regular meetings with them to \n    plan, provide feedback and discuss future developments.\n\n\n    * Development of single page web application from scratch for online document \n      creation using Javascript and Java in the back end.\n\n    * Plugin development for InDesign to add and edit custom content for digital \n      publishing purposes.\n  ",
    technologies: ["Java", "JSP", "Javascript", "YUI", "MooTools", "XML", "XSLT", "InDesign SDK", "C++", "CVS", "SVN"]
});

// PUCRS
workHistory.push({
    position: "Intern Software Engineer", date: { from: "Mar 2004", to: "May 2006" },
    company: {
        name: "PUCRS university (HP research project)",
        link: "http://www.pucrs.br/"
    },

    details: "\n    Digital Documents Research in a partnership between HP Brazil and PUCRS university.\n\n    This was my first contact with the development of web applications, during this \n    time I got to build, together with other two developers, a web application from \n    scratch with Java using JSP, Servlets, and Javascript on the client side. It was a \n    mapping solution to provide the directions to the university campus buildings. \n    Google maps did not exist by this time.\n  ",
    technologies: ["Java", "Javascript", "HTML", "CSS", "Tomcat", "CVS"]
});

/**********************************************************************************/
// EDUCATION
/**********************************************************************************/
var educationHistory = [];

educationHistory.push({
    title: "Computer Engineer", date: { from: "Jan 2003", to: "Jan 2008" },
    university: {
        name: "Pontifícia Universidade Católica do Rio Grande do Sul",
        link: "http://www.pucrs.br/"
    }
});

/**********************************************************************************/
// CERTIFICATIONS
/**********************************************************************************/
var certifications = [];
certifications.push({
    name: "Scrum Product Owner", date: "2015",
    authority: "SCRUM ALLIANCE"
});

/**********************************************************************************/
// You can stop here if you are only reading my resume from the code browser...
/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/

(function buildHtml() {
    var mainEl = document.querySelector("main");
    var currentSectionEl = null;

    function buildLinks(text) {
        var regex = /http(s)?\:[^\s]+/g;
        return text.replace(regex, function (match) {
            return "<a href=\"" + match + "\" target=\"_blank\">" + match + "</a>";
        });
    }

    function appendSection() {
        currentSectionEl = document.createElement("section");
        mainEl.appendChild(currentSectionEl);
    }

    function appendRow(html) {
        var el = document.createElement("div");
        el.classList.add("row");
        if (html) {
            el.innerHTML = html;
        }
        currentSectionEl.appendChild(el);
    }

    function createParagraphs(text) {
        var str = "";
        text.split('\n\n').forEach(function (line) {
            return str += "<p>" + line + "</p>";
        });
        return str;
    }

    function appendSubtitle(text, classStr) {
        appendRow("<br><h3 class='no-margin " + (classStr ? classStr : '') + "'>" + text + "</h3><hr class='no-margin'><br>");
    }

    // name and contact
    appendSection();
    appendRow("\n        <h2 class=\"no-margin personal-name\">" + name + "</h2>\n        <h5 class=\"personal-title\">" + job + "</h5>\n        <p>\n            " + contact.map(buildLinks).join(" | ") + "<br>\n            " + pages.map(buildLinks).join('<br>') + "\n        </p>\n        " + createParagraphs(summary) + "\n        <p><em>Specialities: " + specialities + "</em></p>\n    ");

    // work history
    appendSubtitle("Work History");
    workHistory.forEach(function (job, index) {
        appendSection();
        appendRow("\n            <div class=\"eight columns\">\n                <h5 class=\"no-margin\">" + job.position + "</h5>\n                <p>\n                    <a target=\"_blank\" href=\"" + job.company.link + "\">" + job.company.name + "</a>\n                    " + (job.company.team ? ' - <em>' + job.company.team + '</em>' : '') + " \n                </p>\n            </div>\n            <div class=\"four columns text-right\">\n                <h5>" + job.date.from + " - " + job.date.to + "</h5>\n            </div>\n        ");
        job.details.split("\n\n").forEach(function (p) {
            return appendRow("<p>" + p + "</p>");
        });
        appendRow("\n            <p>Technologies: <em>" + job.technologies.join(', ') + "</em></p>\n            " + (index < workHistory.length - 1 ? '<br>' : '') + "\n        ");
    });

    // education
    appendSection();
    appendSubtitle("Education");
    educationHistory.forEach(function (education) {
        appendRow("\n            <div class=\"eight columns\">\n                <h5 class=\"no-margin\">" + education.title + "</h5>\n                <p><a target=\"_blank\" href=\"" + education.university.link + "\">" + education.university.name + "</a></p>\n            </div>\n            <div class=\"four columns text-right\">\n                <h5>" + education.date.from + " - " + education.date.to + "</h5>\n            </div>\n        ");
    });

    // certifications
    appendSection();
    appendSubtitle("Certifications");
    certifications.forEach(function (cert) {
        appendRow("\n            <div class=\"eight columns\">\n                <h5 class=\"no-margin\">" + cert.name + "</h5>\n                <p>" + cert.authority + "</p>\n            </div>\n            <div class=\"four columns text-right\">\n                <h5>" + cert.date + "</h5>\n            </div>\n        ");
    });
})();