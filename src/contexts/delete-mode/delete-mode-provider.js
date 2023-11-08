import { useState } from "react";
import DeleteModeContext from "./delete-mode-context";

const DeleteModeProvider = ({ children }) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const toggleDeleteMode = () => setDeleteMode(!deleteMode);
  return (
    <DeleteModeContext.Provider value={{ deleteMode, toggleDeleteMode }}>
      {children}
    </DeleteModeContext.Provider>
  );
};

export default DeleteModeProvider;
