const Profile = () => {
  const name = "Ramanand Yadav";
  const description =
    "Frontend Web Developer with expertise in React, JavaScript, HTML, Tailwind, and CSS. Ready to contribute my skills and creativity to deliver engaging and high-quality user experiences. Looking forward to joining a progressive organization with opportunities to work on significant projects.";
  const skills = [
    {
      title: "Tools and Languages",
      items: ["React", "JavaScript", "HTML", "Tailwind", "CSS"],
    },
    { title: "Learning", items: ["Node.js", "Next.js"] },
  ];
  const experiences = [
    {
      title: "Front-End React.js Trainee",
      date: "July 2023 - April 2024",
      company: "SSI Digital Academy, Indore",
      description:
        "I have been learning HTML, CSS, JavaScript, and React.js technologies during this internship.",
    },
    {
      title: "Software Developer Intern",
      date: "May 2024 - Present",
      company: "CyberInstant Pvt. Ltd | An ISO Certified Company",
      description:
        "Collaborating with experienced developers to contribute to web applications using modern technologies such as React.js, HTML5, CSS3, Tailwind, and Bootstrap. Also learning new technologies such as Node.js and Next.js.",
    },
  ];
  const education = [
    {
      institution: "ST. JOSEPH SENIOR SECONDARY SCHOOL, NARSINGHGARH",
      degree: "10th, 7.2 CGPA",
    },
    {
      institution: "ST. MARY’S RESIDENTIAL HSSCHOOL, SEHORE",
      degree: "12th, 79.6%",
    },
    {
      institution: "B.Sc in Mathematics, Barkatullah University, Bhopal",
    },
    {
      institution: "Bachelor of Education, Barkatullah University, Bhopal",
    },
  ];
  const linkedInUrl = "https://www.linkedin.com/in/ramanand-yadav-245714286/";
  const githubUrl = "https://github.com/ram7415";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2 animate__animated animate__fadeInDown">
            {name}
          </h2>
          <p className="text-gray-600 animate__animated animate__fadeInUp">
            Frontend Web Developer
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 animate__animated animate__fadeInUp"
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 animate__animated animate__fadeInUp"
            >
              GitHub
            </a>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed animate__animated animate__fadeInUp">
            {description}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeInDown">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                <h4 className="font-semibold text-gray-700 mb-2">
                  {skill.title}
                </h4>
                <ul className="text-gray-800">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeInDown">
            Experience
          </h3>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <h4 className="font-semibold text-gray-700 mb-2">
                {experience.title}
              </h4>
              <p className="mb-2">{experience.date}</p>
              <p className="mb-2">{experience.company}</p>
              <p className="text-gray-800">{experience.description}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeInDown">
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <h4 className="font-semibold text-gray-700 mb-2">
                {edu.institution}
              </h4>
              <p className="text-gray-800">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
