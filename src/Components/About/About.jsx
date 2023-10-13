import about from '../../assets/about.jpg'
const About = () => {
  return (
    <div>
      <div className="ml-5 mt-8">
        <h1 className="text-xl text-gray-600 font-bold">ABOUT</h1>
        <hr className="border border-green-400 " />
        <div className='flex flex-col-reverse md:flex-row gap-6 mt-4'>
        <div>
          <p className="py-2">
            I am a recent computer science graduate with a strong passion for
            technology and a deep-rooted curiosity about the digital world.
            During my academic journey at American International University
            Bangladesh, I&apos;ve had the opportunity to explore a wide range of
            computer science concepts and develop a solid foundation in software
            development and problem-solving.
          </p>

          <p >
            From a young age, I&apos;ve been drawn to the ever-evolving field of
            computer science. I find immense joy in solving complex problems,
            and I&apos;m continuously fascinated by the way technology impacts our
            lives. My enthusiasm for this field has driven me to constantly seek
            new challenges and learning opportunities.
          </p>

          <p className="py-2">
            One of the aspects of computer science that I find most captivating
            is its potential to create real-world solutions. Whether it&apos;s
            crafting an elegant codebase for a web application or employing
            machine learning algorithms to extract meaningful insights from
            data, I&apos;m driven by the belief that technology can make a positive
            impact on society.
          </p>

          <p >
            I have experience working on a variety of projects, from building
            full-stack web applications to experimenting with machine learning
            models. These experiences have not only honed my technical skills
            but have also taught me the importance of collaboration, effective
            communication, and adaptability.
          </p>

          <p className="py-2">
            As a lifelong learner, I&apos;m committed to staying up-to-date with the
            latest industry trends and emerging technologies. I&apos;m eager to
            embark on a career in computer science where I can continue to grow
            as a developer, contribute to meaningful projects, and work
            alongside like-minded individuals who share my enthusiasm for
            innovation.
          </p>

          <p >
            Beyond my technical skills, I&apos;m an effective problem solver, a team
            player, and a keen communicator. I believe in the power of
            collaboration and the importance of fostering a positive and
            supportive work environment.
          </p>

          <p className="py-2">
            I&apos;m excited about the journey ahead and look forward to the
            opportunities and challenges that lie ahead in the world of computer
            science. Feel free to explore my portfolio to learn more about the
            projects I&apos;ve worked on and the skills I&apos;ve developed. If you&apos;d like
            to connect or discuss potential collaborations, please don&apos;t
            hesitate to reach out. I&apos;m always eager to engage in conversations
            about technology, innovation, and the endless possibilities in the
            digital realm.
          </p>

          <h5 className="text-xl font-medium py-5">Thank you for visiting my portfolio!</h5>
        </div>
        <img src={about} className='max-w-sm md:max-w-[30rem] md:h-96 shadow-lg rounded-lg mr-5 '/>
        </div>
      </div>
    </div>
  );
};

export default About;
