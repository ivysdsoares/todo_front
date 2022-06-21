import React from "react";

function ChangeStatusButton({
  onClick,
  color,
  title
}: {
  onClick: () => void;
  color: string;
  title: string;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`p-2 flex-1 font-semibold duration-200 rounded-sm outline-none hover:shadow focus-visible:bg-${color} focus-visible:text-${color}_text active:shadow-shadow-sm active:brightness-90 bg-neutral text-subtitle hover:bg-${color} hover:text-${color}_text`}
    >
      {title}
    </button>
  );
}

export default ChangeStatusButton;
