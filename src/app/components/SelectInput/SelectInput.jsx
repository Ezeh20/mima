"use client";
import { useState } from "react";
import styles from "./SelectInput.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const SelectInput = ({
  icon,
  type,
  placeholder,
  options,
  value,
  readOnly,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState("");
  const [active, setActive] = useState(false);
  return (
    <div className={`${styles.select} ${className}`} onClick={() => setActive(!active)}>
      {icon}
      <input
        value={type === "date" ? value : selected}
        type={type}
        readOnly={readOnly}
        placeholder={placeholder}
        {...props}
        className={styles.input}
      />
      {type !== "date" ? (
        <MdOutlineKeyboardArrowDown
          className={styles.dropDown}
        />
      ) : undefined}
      {active && (
        <>
          {type !== "date" ? (
            <div className={styles.options}>
              {options.map((itm) => {
                return (
                  <div
                    key={itm}
                    className={styles.option}
                    onClick={() => {
                      setSelected(itm);
                      setActive(!active);
                    }}>
                    <p>{itm}</p>
                  </div>
                );
              })}
            </div>
          ) : undefined}
        </>
      )}
    </div>
  );
};
