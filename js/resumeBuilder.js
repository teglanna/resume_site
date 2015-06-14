
var bio = {
	"name": "Anna Teglassy",
	"role": "painter - junior front-end developer",
	"contacts": {
		"email": "teglanna@gmail.com",
    	"github": "teglanna",
    	"twitter": "@teglanna",
    	"website" : "annateglassy.tumblr.com",
    	"location": "Budapest"
    },
    "welcomeMessage": "Hello-bello Everybody!",
    "skills": ["persistence","courage", "irony"],
    "pic": "images/anna.png"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedImage = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedImage);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedTwitter);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGitHub);

var formattedWebsite = HTMLblog.replace("%data%", bio.contacts.website);
$("#header").append(formattedWebsite);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);


var education = {
	"schools": [
	{
		"name": "University of Pecs",
		"city": "Pecs",
		"degree": "Masters",
		"major": ["Painting department"],
		"dates": "2007-2011",
		"url": "http://www.art.pte.hu/"
	},
	{
		"name": "Ruander Learning Center",
		"city": "Budapest",
		"major": "web editor, HTML, CSS",
		"dates": 2013,
		"url": "http://www.ruander.hu/"
	}
  ],
  	//"languages": [Hungarian - native, English - intermediate, Turkish - basic],
  	"onlineCourses": [
  	{
  		"title": "Intro to the computer science, Programming Languages Javascript Basics",
  		"school": "Udacity",
  		"dates": 0.1,
  		"url": "https://www.udacity.com"
  	},
  	{
  		"title": "Python basics, Javascript basics",
  		"school": "Codecademy",
  		"dates": 0.2,
  		"url": "https://www.codecademy.com"
  	},
  	{
  		"title": "Zed A. Shaw: Learn python the hard way",
  		"school": "book",
  		"dates": 0.1,
  		"url": "https://learnpythonthehardway.org/book/"
  	},
  	{
  		"title": "Marijn Haverbeke: Eloquent JavaScript",
  		"school": "book",
  		"dates": 0.1,
  		"url": "http://eloquentjavascript.net/"
  	}
  ]
}

//$("#main").append(work.position);
//$("#main").append(education["name"]);

var work = {
	"jobs" : [
		
		{
			"employer": "Veres Péter Secondary School, Budapest",
			"title": "Drawing teacher",
			"location": "Budapest",
			"dates": "2011-2013",
			"description": "Holding drawing lessons in secondary school, organizing workshops."
		},

		{
			"employer": "BAŞAK KÜLTÜR VE SANAT VAKFI, Istanbul",
			"title": "Art teacher",
			"location": "Istanbul",
			"dates": 2014,
			"description": "Organizing art and English workshops for children, managing the website of the foundation."
		},
		{
			"employer": "Varga Imre Gallery, Budapest",
			"title": "Art workshop organizer",
			"location": "Budapest",
			"dates": "2012-2014",
			"description": "Organizing regularly fine art workshops in the gallery."
	}
		
	]
}

var projects = {
	"projects" : [
	{
		"title": "Django Girls, Budapest",
		"dates": 2015,
		"description": "I take part in organizing the one-day coding workshop for women at Budapest.",
		"url": "http://djangogirls.org/budapest_en/",
		"images" : ["images/djangogirls2.png"]

	},
	{
		"title": "Art camp, Budapest",
		"dates": "2012-2013-2014-2015",
		"description": "Every summer I help to organize a camp in a gallery at Budapest.",
		"url": "https://www.facebook.com/Alkotonapok?ref=ts&fref=ts",
		"images": ["images/varga2.jpg"]
	},
	{
		"title": "Tale illustrator",
		"url": "http://www.tundemamamesei.blogspot.hu",
		"dates": "2014-2015",
		"description": "I'm illustrating tales and poems, and managing the blog about these tales.",
		"images": ["images/duliful.jpg"]
		}
   ]
}


/*if (bio.skills) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}*/

function displaywork() {
   for (job in work.jobs) {
	//create new div for work experience:
	$("#workExperience").append(HTMLworkStart);
	//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	};
  }

displaywork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0] = array[0].slice(0,1).toUpperCase() + name[0].slice[1].toLowerCase();
	name[1] = array[1].toUpperCase();
	
	return name[0] + " " + name[1];
}

//$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		//create a div for it:
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedURL = HTMLprojectURL.replace("%data%", projects.projects[project].url);
		$(".project-entry:last").append(formattedURL);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		//var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		//$(".education-entry:last").append(formattedDegree);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedLocation);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);

	}
}

displayEducation();

$("#mapDiv").append(googleMap);