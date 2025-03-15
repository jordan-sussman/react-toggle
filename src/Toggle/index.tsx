import { FC, useState } from "react";
import "./styles.css";

interface ToggleProps {
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  id?: string;
  label?: string;
  on?: boolean;
  onChange?: (isOn: boolean) => void;
}

export const Toggle: FC<ToggleProps> = ({
  ariaDescribedby,
  ariaLabelledby,
  id,
  label = "toggle",
  on = false,
  onChange,
}) => {
  const [isOn, setIsOn] = useState(on);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <input
      aria-checked={isOn}
      aria-describedby={ariaDescribedby}
      aria-label={ariaLabelledby ?? label}
      aria-labelledby={ariaLabelledby}
      checked={isOn}
      className={["toggle", isOn ? "on" : "off"].join(" ")}
      id={id}
      onChange={handleToggle}
      role="switch"
      tabIndex={0}
      type="checkbox"
    />
  );
};
