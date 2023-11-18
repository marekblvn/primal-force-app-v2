const DamageIcon = ({ size, color = "#000" }) => {
  const sizes = {
    small: "16px",
    medium: "20px",
    large: "24px",
  };
  return (
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4.39999L15.6 3L12 6.5L9.39999 4L8 5.39999L10.2 7.7L3 14V17H6L12.3 9.8L14.5 12L16 10.5L13.5 8L17 4.39999Z"
        fill={color}
        stroke="#000"
      />
    </svg>
  );
};

export default DamageIcon;
