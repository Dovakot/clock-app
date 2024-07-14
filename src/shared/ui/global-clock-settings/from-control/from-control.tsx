import React from "react";

export const FormControl = ({
  label,
  type,
  name,
  value,
  isChecked,
}: any) => (
  <li>
    <label className={`form-control form-control--${type}`}>
      <input
        className="visually-hidden form-control__field"
        type={type}
        name={name}
        defaultValue={value}
        defaultChecked={isChecked}
      />
      <span className="form-control__label">{label}</span>
    </label>
  </li>
);
