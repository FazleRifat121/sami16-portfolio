const Contact = () => {
  return (
    <div>
      <div className="ml-5 mt-8">
        <h1 className="text-xl text-gray-600 font-bold uppercase">
          Contact Information
        </h1>
        <hr className="border border-green-400 " />
        <div className="mt-5 space-y-5 ">
          <h1 className="text-lg">Email: tubesam16@gmail.com</h1>
          <h1 className="text-lg">Phone:+8801400294469</h1>
          <div>
            <a href="https://www.linkedin.com/in/samiul-haque-181993295/">
              <h1 className="text-lg my-3 hover:text-green-400">LinkedIn</h1>
            </a>
            <a href="https://www.facebook.com/SamiulHaque.Sam16/">
              <h1 className="text-lg my-3 hover:text-green-400">Facebook</h1>
            </a>
          </div>
          <h1 className="text-lg">Location: Nikunja 2, Khilkhet, Dhaka-1229, Bangladesh</h1>
          <p>I am open to new career opportunities and collaborations. Please feel free to contact me via email or connect with me on LinkedIn. Follow me on Facebook to stay updated on my tech-related interests and thoughts.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
