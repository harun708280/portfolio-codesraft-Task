import BlurText from "../motion/BlurText";
import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <div className="px-4 py-8 lg:py-16 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-[#ffffff] mb-4">
            <BlurText
              text="Have Any Questions?"
              delay={150}
              animateBy="words"
              direction="top"
              className="flex justify-center mb-3 text-xl font-bold text-center md:mb-8 md:text-3xl"
            />
          </h2>
          <p className="text-base text-[#A4A4A4] max-w-2xl mx-auto">
            Are you interested in working together? I’d love to hear about your
            project. Please use the form below to send me a message.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <ContactInfo />
          <div className="md:col-span-2">
            <ContactFrom />
          </div>
        </div>
      </div>
    </div>
  );
}
