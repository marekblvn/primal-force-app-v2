import { useLsi } from "../contexts";

const Lsi = ({ lsi }) => {
  const { language } = useLsi();
  return lsi[language];
};

export default Lsi;
