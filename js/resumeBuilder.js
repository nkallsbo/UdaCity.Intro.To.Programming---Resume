//Resume info

var bio = {
	"name" : "Natalie Kallsbo ",
	"role" : "Student",
	"welcomeMessage" : "Welcome to my resumé!",
	"biopic" : "images/me.jpg",
	"contacts" : {
		"mobile" : "555-444-333",
		"skype" : "n.kallsbo",
		"github" : "n.kallsbo",
		"location" : "Walnut Creek",
		"email" : "natalie@kallsbo.se"
	},
	"skills" : ["Cars, Costumer Service, Audi, Car paint"]
};

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
};

var projects = {
	"project" : [
	{
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
};

var education = {
	"schools" : [
	{
		"name" : "Business and Administration",
		"location" : "Sweden, Kungälv",
		"degree" : "Bachelor",
		"majors" : "Economics",
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
	"onlineCourses" : [
		{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Programming 1",
		"school" : "Hermods",
		"dates" : "2015",
		"url" : "http://hermods.se"
	}]
};

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
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkills);
	}


	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts.skype);
	var formattedHitHub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedSkype, formattedHitHub);

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
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}

	for (var i = 0; i < education.onlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedTitle + formattedSchool,formattedDates,formattedURL);
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
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation,formattedDescription);
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
	for (var i = 0; i < projects.project.length; i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (var j = 0; j < projects.project[i].images.length; j++) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[i].images[j]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

/**
* @description Sawes my name
* @constructor
* @param {string} name - "Old name"
* @param {string} newName - Saves my name here
*/
function inName(name){
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
}

// Calls functions to display my info
work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
