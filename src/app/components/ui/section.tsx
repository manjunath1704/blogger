import React from "react";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <section
      className={`py-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
