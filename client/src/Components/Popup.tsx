// Popup.tsx
import React from "react";
import "./Popup.css";

interface PopupProps {
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {children}
      </div>
    </div>
  ) : null;
};

export default Popup;
