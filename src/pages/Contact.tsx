const Contact = () => {
  return (
    <div className="min-h-screen mt-20">
      <h1 className="text-bold text-3xl lg:text-4xl my-3">Contact</h1>
      <p className="text-base lg:text-2xl">
        If you'd like to get in touch, you can reach me using the following
        methods.
      </p>

      <div className="flex  items-center justify-center mt-10 gap-10 lg:gap-20">
        <div className="flex  divider divider-horizontal divider-start">
          <h2 className="text-bold text-2xl">Email</h2>
          <a
            href="mailto:aliqarayev835@gmail.com"
            className="text-accent text-[12px] lg:text-xl"
          >
            aliqarayev835@gmail.com
          </a>
        </div>

        <div className="divider divider-horizontal"></div>
        <div className="flex  divider divider-horizontal divider-start">
          <h2 className="text-bold text-2xl">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/eli-qarayev"
            className="text-accent text-[12px] lg:text-xl"
          >
            in/eli-qarayev
          </a>
        </div>
      </div>

      <div className="flex w-full  items-center justify-center mt-10 gap-10 lg:gap-20">
        <div className="flex  divider divider-horizontal divider-start">
          <h2 className="text-bold text-2xl">Github</h2>
          <a
            href="https://github.com/e-qa"
            className="text-accent text-[12px] lg:text-xl"
          >
            github/e-qa
          </a>
        </div>

        <div className="divider divider-horizontal"></div>
        <div className="flex  divider divider-horizontal divider-start">
          <h2 className="text-bold text-2xl">Instagram</h2>
          <a
            href="https://www.instagram.com/eliqarayev_/"
            className="text-accent text-[12px] lg:text-xl"
          >
            @eliqarayev_
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
