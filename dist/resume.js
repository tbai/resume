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
var grad = "Software Designer V at HP Inc.";

var contact = ["Porto Alegre Brazil", "+55 51 92184663", "tiagoxbai@gmail.com"];
var pages = ["https://br.linkedin.com/in/tiagobai"];

var summary = "\n  Software Engineer specialized in Front End development.\n  I work for HP since 2006 on R&D Projects, writing and designing advanced web\n  applications and cloud-based systems. I am a fast and competent Full Stack\n  developer with extensive experience on Web technologies and attention to user\n  experience and design.\n";

/**********************************************************************************/
// WORK HISTORY
/**********************************************************************************/
var workHistory = [];

// HP Inc.
workHistory.push({
    position: "Software Designer V", date: { from: "Nov 2012", to: "Present" },
    company: {
        name: "HP Inc.",
        link: "http://www.hp.com/"
    },

    details: "\n    Project Manager and Front End Developer of the Brazil sub-team (10 members)\n    working at the HP SureSupply Auto-Delivery platform.\n\n    I joined the project to assume the leadership of the Front End development.\n    My first assignment was to travel to Seattle to receive training at a UX\n    company that built the first prototype and mock-ups, after that the Front End\n    development was transferred to my team at HP Brazil.\n\n    Today I am the Project Manager of the Brazilian team and I also work as a lead\n    Front End developer. We are now creating a set of new web applications using\n    Angular 2 in order to provide solutions for external partners.\n  ",

    technologies: ["Javascript", "Backbone", "Angular 2", "React.js", "Grunt/Gulp", "Karma", "Node.js", "Express", "C#", "TFS", "Git"]
});

// T&T Engenheiros Associados | HP contractor
workHistory.push({
    position: "Senior Software Engineer", date: { from: "Jun 2009", to: "Oct 2012" },
    company: {
        name: "T&T Engenheiros Associados (HP contractor)",
        link: "http://www.tet.com.br/en/"
    },

    details: "\n    Team leader and developer of a Web application designed to make it easy to\n    access and print large-format documents using a tablet, smartphone, laptop, or\n    printer touchscreen.\n\n    I was the main Front End developer and the technical leader of the development\n    team. The project was owned by HP Barcelona where I had the opportunity to\n    visit to transfer the technology to a new business unit. My team had around 4\n    developers and we built the entire system from scratch since the investigation\n    phase until it went to production using agile and continuous deployment\n    techniques.\n  ",

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

    details: "\n    During this period I worked at two different R&D projects for HP Brazil.\n    Both projects were sponsored by HP Bristol.\n\n    * Development of single page web application for online document creation using\n      Javascript and Java\n\n    * Plugin development for InDesign\n  ",
    technologies: ["Java", "JSP", "Javascript", "YUI", "MooTools", "XML", "XSLT", "InDesign SDK", "C++", "CVS", "SVN"]
});

// PUCRS
workHistory.push({
    position: "Intern Software Engineer", date: { from: "Mar 2004", to: "May 2006" },
    company: {
        name: "PUCRS university (HP research project)",
        link: "http://www.pucrs.br/"
    },

    details: "\n    Digital Documents Research in a partnership between HP Brazil and PUCRS university.\n  ",
    technologies: ["Java", "Javascript"]
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

    function buildLinks(text) {
        var regex = /http(s)?\:[^\s]+/g;
        return text.replace(regex, function (match) {
            return "<a href=\"" + match + "\" target=\"_blank\">" + match + "</a>";
        });
    }

    function appendRow(html) {
        var mainEl = document.querySelector("main");
        var el = document.createElement("div");
        el.classList.add("row");
        if (html) {
            el.innerHTML = html;
        }
        mainEl.appendChild(el);
    }

    function appendSubtitle(text, classStr) {
        appendRow("<br><h3 class='no-margin " + (classStr ? classStr : '') + "'>" + text + "</h3><hr class='no-margin'><br>");
    }

    // name and contact
    appendRow("\n        <h2 class=\"no-margin\">" + name + "</h2>\n        <h5>" + grad + "</h5>\n        <p>\n            " + contact.map(buildLinks).join(" | ") + "<br>\n            " + pages.map(buildLinks).join('<br>') + "\n        </p>\n        <p>" + summary + "</p>\n    ");

    // work history
    appendSubtitle("Work History");
    workHistory.forEach(function (job, index) {
        appendRow("\n            <div class=\"eight columns\">\n                <h5 class=\"no-margin\">" + job.position + "</h5>\n                <p><a target=\"_blank\" href=\"" + job.company.link + "\">" + job.company.name + "</a></p>\n            </div>\n            <div class=\"four columns text-right\">\n                <h5>" + job.date.from + " - " + job.date.to + "</h5>\n            </div>\n        ");
        job.details.split("\n\n").forEach(function (p) {
            return appendRow("<p>" + p + "</p>");
        });
        appendRow("\n            <p>Technologies: <em>" + job.technologies.join(', ') + "</em></p>\n            " + (index < workHistory.length - 1 ? '<br>' : '') + "\n        ");
    });

    // education
    appendSubtitle("Education", 'page-break');
    educationHistory.forEach(function (education) {
        appendRow("\n            <div class=\"eight columns\">\n                <h5 class=\"no-margin\">" + education.title + "</h5>\n                <p><a target=\"_blank\" href=\"" + education.university.link + "\">" + education.university.name + "</a></p>\n            </div>\n            <div class=\"four columns text-right\">\n                <h5>" + education.date.from + " - " + education.date.to + "</h5>\n            </div>\n        ");
    });

    // certifications
    appendSubtitle("Certifications");
    certifications.forEach(function (cert) {
        appendRow("\n            <div class=\"eight columns\">\n                <h5 class=\"no-margin\">" + cert.name + "</h5>\n                <p>" + cert.authority + "</p>\n            </div>\n            <div class=\"four columns text-right\">\n                <h5>" + cert.date + "</h5>\n            </div>\n        ");
    });
})();