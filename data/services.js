import {
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Enterprise Support Solutions",
    description:
      "Empower your brand with comprehensive support, including brand identity creation, professional documentation, custom invoice design, and business setup from the ground up. Boost your online presence with expert digital marketing and SEO strategies.",
    icon: <FaBullhorn className="text-[var(--maincolor)] mb-3" />,
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Transform your ideas into scalable, high-performance web platforms. Our end-to-end services include UI/UX design, business analysis, and development of POCs, MVPs, and enterprise-grade applications tailored to your needs.",
    icon: <FaLaptopCode className="text-[var(--maincolor)] mb-3" />,
  },
  {
    id: 3,
    name: "Mobile App Development",
    description:
      "Build cutting-edge mobile apps for any platform with our full-cycle development services. From concept and UI/UX design to coding, testing, and ongoing support, we deliver solutions on time and within budget.",
    icon: <FaMobileAlt className="text-[var(--maincolor)] mb-3" />,
  },
  {
    id: 4,
    name: "Cybersecurity and Networking Solutions",
    description:
      "Secure your business with robust network setups, CCTV installations, system hardening, and continuous network monitoring to protect against threats and ensure operational reliability.",
    icon: <FaShieldAlt className="text-[var(--maincolor)] mb-3" />,
  },
  {
    id: 5,
    name: "Cloud Solutions",
    description:
      "Leverage the power of the cloud with our IaaS, PaaS, and SaaS solutions. We provide scalable, secure, and efficient cloud infrastructure to drive your business forward.",
    icon: <FaCloud className="text-[var(--maincolor)] mb-3" />,
  },
  {
    id: 6,
    name: "Machine Learning & Artificial Intelligence",
    description:
      "Harness AI and ML to optimize your business with advanced data analysis, custom model development, and seamless implementation. Our dedicated ML hub also offers training to upskill your team in AI technologies.",
    icon: <FaBrain className="text-[var(--maincolor)] mb-3" />,
  },
];

export { services };
