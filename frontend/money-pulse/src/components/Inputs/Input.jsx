import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mb-3">
      {label && (
        <label className="block text-[13px] text-slate-800 mb-1">
          {label}
        </label>
      )}

      <div className="input-box flex items-center gap-2 border p-2 rounded bg-[#F8FAFC]">
        <input
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={onChange}    // *** VERY IMPORTANT
        />

        {type === "password" && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
