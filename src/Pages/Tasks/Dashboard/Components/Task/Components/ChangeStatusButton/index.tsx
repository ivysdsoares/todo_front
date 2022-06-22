import React from "react";

function ChangeStatusButton({
  onClick,
  color,
  title,
  loading
}: {
  onClick: () => void;
  color: string;
  title: string;
  loading?: boolean;
}) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      type="button"
      className={`p-2 flex-1 font-semibold
       duration-200 rounded-sm 
       outline-none hover:shadow 
       active:shadow-shadow-sm active:brightness-90 
       bg-neutral text-subtitle 
       disabled:bg-neutral disabled:text-placeholder disabled:brightness-100 disabled:opacity-75
       focus-visible:bg-${color} focus-visible:text-${color}_text 
       hover:bg-${color} hover:text-${color}_text`}
    >
      {title}
    </button>
  );
}
ChangeStatusButton.defaultProps = {
  loading: false,
};
export default ChangeStatusButton;
