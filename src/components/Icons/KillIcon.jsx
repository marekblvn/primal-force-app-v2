const KillIcon = ({ size, color = "#000000" }) => {
  const sizes = {
    small: "16px",
    medium: "20px",
    large: "24px",
  };
  return (
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8001 11.2001L12.0001 14.4001H14.4001V12.0001L11.2001 8.8001L8.8001 11.2001ZM5.0401 3.7601L3.2001 1.6001L1.6001 3.2001L3.7601 5.0401L2.4001 6.4001L4.0001 8.0001L8.0001 4.0001L6.4001 2.4001L5.0401 3.7601ZM12.0001 8.0001L13.6001 6.4001L12.2401 5.0401L14.4001 3.2001L12.8001 1.6001L10.9601 3.7601L9.6001 2.4001L8.0001 4.0001L9.2001 5.2001L1.6001 12.0001V14.4001H4.0001L10.8001 6.8001L12.0001 8.0001Z"
        fill={color}
        stroke="#000000"
      />
    </svg>
  );
};

export default KillIcon;
