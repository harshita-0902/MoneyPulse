import React from "react";

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={`$${width || "w-12"}$${height || "h-12"}$
        flex items-center justify-center rounded-full $\square$text-gray-900`}
      style={style}
    >
      {getInitials(fullName|| "")}
    </div>
  );
};

export default CharAvatar;