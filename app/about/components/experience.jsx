import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long"></Hr>
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,

            type: "spring",
          }}
        >
          Professional Experience
        </motion.h1>
      </div>
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
      <motion.div
        className="flex justify-center items-start flex-col mb-5 "
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,

          type: "spring",
        }}
      >
        <section className="grid gap-8 md:gap-12">
          <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
            {children}
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Title />
      <Wrapper>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2023 - Present</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
              Niftonic Pvt Ltd{" "}
            </h3>
            <h4 className=" font-light text-md mb-4">
              Software Engineer | Full-time
            </h4>
            <p className="text-justify">
              Responsible for building and maintaining scalable web applications
              using the latest technologies. Collaborated with cross-functional
              teams to deliver high-quality solutions that meet business
              requirements.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Next.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Node.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Firebase
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2023 - 2024</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
              Niftonic Pvt Ltd
            </h3>
            <h4 className=" font-light text-md mb-4">Jr Software Engineer</h4>
            <p className="text-justify">
              Development of responsive web applications using React.js and
              TypeScript, ensuring high performance and scalability. Integration
              of backend services with Node.js and Express.js, focusing on
              RESTful APIs and real-time data processing. Utilization of
              Firebase for authentication, database management, and cloud
              functions, ensuring seamless user experiences and data security.
              Collaborating with cross-functional teams to deliver features on
              time while following Agile methodologies.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Mantine
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Firebase
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2022 - 2023</div>
          <div>
            <h3 className="font-semibold text-xl text-black">Self-Employed</h3>
            <h4 className=" font-light text-md mb-4">
              Web Developer | Freelance
            </h4>
            <p className="text-justify">
              Specialized in crafting innovative solutions using React.js and
              Next.js, enhancing client satisfaction and project efficiency.
              Contributed expertise in both frontend and backend development
              during collaborative team projects, leading to successful project
              completions
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Next.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Mongodb
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                MySql
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
