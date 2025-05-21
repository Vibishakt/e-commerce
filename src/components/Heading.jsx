const Heading = ({ label, className = "" }) => {
  return <h1 className={` text-teal-950 ${className}`}>{label}</h1>;
};

export default Heading;
