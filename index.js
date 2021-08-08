var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/education', (_, res) => {
  res.json([
    {
      "degree": "Master, Computing and Information Systems",
      "school": "Youngstown State University",
      "start": "August 2009",
      "end": "May 2013",
      "gpa": "4.0/4.0"
    },
    {
      "degree": "Bachelor of Science, Computing Science",
      "school": "Youngstown State University",
      "start": "August 2004",
      "end": "May 2008",
      "gpa": "3.59/4.0"
    }
  ]);
});

app.get('/experience', (_, res) => {
  res.json([
    {
      "organization": "Arcadia Healthcare Solutions",
      "roles": [
        {
          "title": "Engineering Manager",
          "start": "June 2021"
        },
        {
          "title": "Software Engineer",
          "start": "September 2020",
          "end": "June 2021"
        }
      ]
    },
    {
      "organization": "Matco Tools",
      "roles": [
        {
          "title": "Web Development Manager",
          "start": "April 2016",
          "end": "September 2020"
        },
        {
          "title": "Senior Java Web Developer",
          "start": "November 2014",
          "end": "April 2016"
        },
        {
          "title": "Java Web Developer II",
          "start": "August 2012",
          "end": "November 2014"
        }
      ]
    },
    {
      "organization": "Notify Technology",
      "roles": [
        {
          "title": "Software Development Manager",
          "start": "August 2011",
          "end": "August 2012"
        },
        {
          "title": "Software Engineer",
          "start": "January 2008",
          "end": "August 2011"
        }
      ]
    },
    {
      "organization": "Youngstown State University",
      "roles": [
        {
          "title": "Research Assistant",
          "start": "August 2010",
          "end": "August 2011"
        },
        {
          "title": "Student Software Specialist",
          "start": "January 2005",
          "end": "April 2008"
        }
      ]
    }
  ]);

  app.get('/statements', (req, res) => {
    res.json([
      "Driven, self-motivated software development professional with over 15 years of IT industry experience in academia, e-commerce, enterprise and healthcare spaces. Geographically located near Akron, OH, but open to remote work for any location.",
      "Specialized in full stack development for web and mobile applications. Skills include but not limited to: Android SDK, Angular, AWS, HTML5/CSS3, iOS SDK, Java EE, JavaScript, Node.js, PhoneGap, React Native, RESTful APIs, SQL."
    ]);
  });
});