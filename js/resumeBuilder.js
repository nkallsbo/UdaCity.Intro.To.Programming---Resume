//Resume info

var bio = {
	"name" : "Natalie Kallsbo ",
	"role" : "Student",
	"welcomeMessage" : "Welcome to my resumé!",
	"image" : "images/me.jpg",
	"contacts" : [{
		"mobile" : "555-444-333",
		"skype" : "n.kallsbo",
		"location" : "Walnut Creek",
		"email" : "natalie@kallsbo.se"
	}],
	"skills" : ["Cars, Costumer Service, Audi, Car paint"]
}

var work = {
	"jobs" : [
	{
		"employer" : "Bilab in Kungalv",
		"title" : "Service Manager",
		"dates" : "2009 - 2012",
		"location" : "Kungalv",
		"description" : "Booked in cosumers cars for repairs, service and other things."
	},
	{
		"employer" : "Audi Sweden",
		"title" : "Warranty Manager, Paint and Corrosion",
		"dates" : "2012 - 2015",
		"location" : "Gothenburg",
		"description" : "Checked cars for corrosion and other warranty work."
	}]
}

var projects = {
	"project" : [{
		"title" : "Converter",
		"dates" : "2016",
		"description" : "Build my own converter in C#. Converts american messurment to the metric system.",
		"images" : ["images/converter.jpg", "images/converter2.jpg"]
	},
	{
		"title" : "Photzman",
		"dates" : "2014",
		"description" : "Helping testing this program for bugs and some design things",
		"images" : ["images/photzman.jpg"]
	}]
}

var education = {
	"schools" : [
	{
		"name" : "Business and Administration",
		"location" : "Sweden, Kungälv",
		"degree" : "bachelor",
		"majors" : "Economics and costumer service",
		"dates" : "2006 - 2009",
		"url" : "http://kungalv.se"
	},
	{
		"name" : "Service Manager",
		"location" : "Sweden, Stockholm",
		"degree" : "master",
		"majors" : "Cosumer Service",
		"dates" : "2013",
		"url" : "http://audi.se"
	}],
	"online courses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com/course/nd001"
	}]
}

/**
* @description Displays my Bio
* @constructor
* @param {string} formattedName - Replaces to given name
* @param {string} formattedRole - Replaces to given role
* @param {string} formattedImage - Replaces to given image
* @param {string} formattedMessage - Replaces to given message
* @param {string} formattedMajor - Replaces to given major
* @param {string} formattedSkills - Replaces to given skills
*/
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

/**
* @description Displays my educations
* @constructor
* @param {string} formattedName - Replaces to given name
* @param {string} formattedDegree - Replaces to given degree
* @param {string} formattedDates - Replaces to given dates
* @param {string} formattedLocation - Replaces to given location
* @param {string} formattedMajor - Replaces to given major
*/
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

/**
* @description Displays my jobs
* @constructor
* @param {string} formattedEmployer - Replaces to given employer
* @param {string} formattedDates - Replaces to given dates
* @param {string} formattedDescription - Replaces to given descriptions
*/
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

/**
* @description Displays my projects
* @constructor
* @param {string} formattedTitle - Replaces to given title
* @param {string} formattedDates - Replaces to given dates
* @param {string} formattedDescription - Replaces to given descriptions
*/
projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

/**
* @description Sawes my name
* @constructor
* @param {string} name - "Old name"
* @param {string} newName - Saves my name here
*/
function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};

// Calls functions to display my info
work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
