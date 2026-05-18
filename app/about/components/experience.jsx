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
          <div className="font-medium text-lg">Jan 2026 - Present</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
              Stash Technologies
            </h3>
            <h4 className=" font-light text-md mb-4">
              Software Engineer | Full-time
            </h4>

            <p className="text-justify">
              Building scalable enterprise-grade web platforms and backend systems using
              modern MERN stack technologies. Working on high-performance dashboards,
              complex business workflows, custom REST APIs, authentication systems,
              role-based access control, and production infrastructure for large-scale
              applications.
            </p>

            <div className="mt-4 space-y-4">
              <h5 className="font-semibold text-sm text-neutral-800 uppercase tracking-wider mb-2">
                Key Projects & Impact:
              </h5>
              <div className="space-y-4 pl-4 border-l-2 border-neutral-300">
                <div>
                  <h6 className="font-semibold text-md text-black">
                    PTF Sports Booking Ecosystem (Government of Punjab)
                  </h6>
                  <ul className="list-disc pl-5 mt-1 space-y-1.5 text-sm text-gray-700 text-justify">
                    <li>
                      <strong>Enterprise Court Reservations:</strong> Architected and engineered a dual-portal facility management and booking ecosystem for the Pakistan Tennis Federation (Government of Punjab), replacing manual logs with a centralized digital-first system.
                    </li>
                    <li>
                      <strong>Collision-Free Dynamic Timing Engine:</strong> Engineered a high-performance timing and scheduling engine in Express.js and MongoDB that dynamically computes, validates, and renders collision-free court slots for variable reservation durations (60/90/120 mins), reducing booking conflicts to zero.
                    </li>
                    <li>
                      <strong>High-Performance Public Client:</strong> Developed a modern public client using React 19 and Tailwind CSS v4, optimizing asset loading and implementing TanStack Query for background state synchronization, resulting in real-time availability checking.
                    </li>
                    <li>
                      <strong>Type-Safe Management Console:</strong> Designed an administrative dashboard using React 18, TypeScript, and Mantine UI, integrating interactive Recharts graphs to process and visualize real-time booking trends, revenue growth, and court utilization.
                    </li>
                    <li>
                      <strong>Advanced Security & Token Rotation:</strong> Hardened the platform authentication architecture with secure HTTP-only cookies, automatic refresh token rotation via Axios interceptors, Helmet headers, and API rate-limiting.
                    </li>
                    <li>
                      <strong>Role-Based Access Control (RBAC):</strong> Implemented multi-role RBAC (User, Admin, Super User), empowering teams to execute manual overrides, manage active user records, adjust pricing, and generate dynamic PDF financial audit logs.
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-semibold text-md text-black">
                    TDCP Service Portal (Government of Punjab)
                  </h6>
                  <ul className="list-disc pl-5 mt-1 space-y-1.5 text-sm text-gray-700 text-justify">
                    <li>
                      <strong>Multi-Service Platform Development:</strong> Engineered a comprehensive suite of landing pages for the Government of Punjab (TDCP), covering diverse sectors including Sightseeing, Softwheel, Boating, Fleet, Chairlift, and Cable Car.
                    </li>
                    <li>
                      <strong>Custom UI/UX Orchestration:</strong> Designed and implemented service-specific interface components for six different tourism modules, ensuring a unified brand identity while catering to unique functional requirements (e.g., ticketing for Boating vs. scheduling for Fleet).
                    </li>
                    <li>
                      <strong>Centralized CMS Architecture:</strong> Architected a scalable Content Management System that allows for the dynamic updating of tour packages, pricing, and availability across all six service categories from a single administrative interface.
                    </li>
                    <li>
                      <strong>High-Traffic Performance:</strong> Optimized the frontend for high-concurrency during peak tourism seasons, leveraging TanStack Query for efficient caching and Vite for optimized delivery of media-heavy service pages.
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-semibold text-md text-black">
                    iZiarah Admin Panel
                  </h6>
                  <ul className="list-disc pl-5 mt-1 space-y-1.5 text-sm text-gray-700 text-justify">
                    <li>
                      <strong>Scalable Admin Infrastructure:</strong> Architected and implemented a modular administrative dashboard using React 18 and TypeScript, enabling the centralized management of Ziarah locations, tour agencies, and multi-tier booking categories for a pilgrimage-focused platform.
                    </li>
                    <li>
                      <strong>Geospatial Data Management:</strong> Integrated Google Maps API to develop interactive location selectors, allowing administrators to precisely tag and manage geolocation data (latitude/longitude) for hundreds of sacred sites with high accuracy.
                    </li>
                    <li>
                      <strong>Workflow Optimization:</strong> Engineered a real-time booking management system with advanced filtering and status tracking, reducing manual administrative overhead and improving the efficiency of reservation processing.
                    </li>
                    <li>
                      <strong>Performance & State Management:</strong> Leveraged React Query for optimized server-state synchronization and Axios interceptors for secure JWT-based authentication, resulting in faster data retrieval and a more secure administrative environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                TypeScript
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Node.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Express.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                MongoDB
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                PostgreSQL
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">May 2023 - Jan 2026</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
              Niftonic Pvt Ltd
            </h3>

            <h4 className=" font-light text-md mb-4">
              Software Engineer | Full-time
            </h4>

            <p className="text-justify">
              Developed and scaled production-ready applications featuring real-time
              systems, live chat, subscription billing, video streaming, and complex
              multi-role architectures. Worked extensively with React.js, Firebase,
              Cloud Functions, and scalable frontend systems while collaborating across
              cross-functional product teams.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Firebase
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                TypeScript
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Cloud Functions
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Stripe
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                LiveKit
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">Dec 2022 - May 2023</div>

          <div>
            <h3 className="font-semibold text-xl text-black">LEBS</h3>

            <h4 className=" font-light text-md mb-4">
              Associate Software Engineer
            </h4>

            <p className="text-justify">
              Developed full-stack applications, admin dashboards, and backend services
              using React.js, Node.js, and MongoDB. Collaborated on API architecture,
              authentication systems, responsive interfaces, and scalable frontend
              development workflows.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Node.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                MongoDB
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Express.js
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
