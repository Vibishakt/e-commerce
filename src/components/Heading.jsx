const Heading = ({ label, className = "" }) => {
  return <h1 className={`text-xl text-teal-950 ${className}`}>{label}</h1>;
};

export default Heading;
