const skills = [
    {
      category: 'Product Management',
      items: [
        { name: 'Product Strategy', level: 90 },
        { name: 'Roadmapping', level: 95 },
        { name: 'User Research', level: 85 },
        { name: 'Agile Methodologies', level: 90 },
        { name: 'Data Analysis', level: 80 }
      ]
    },
    {
      category: 'Technical Skills',
      items: [
        { name: 'Python', level: 75 },
        { name: 'JavaScript/TypeScript', level: 70 },
        { name: 'SQL', level: 80 },
        { name: 'AWS', level: 65 },
        { name: 'Machine Learning', level: 70 }
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'Jira', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Tableau', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'Postman', level: 90 }
      ]
    }
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills &amp; Expertise</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillCategory) => (
              <div
                key={skillCategory.category}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">
                  {skillCategory.category}
                </h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
