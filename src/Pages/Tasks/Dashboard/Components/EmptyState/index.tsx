import React, { ReactNode } from "react";

function EmptyState({
  length,
  children
}: {
  length: number;
  children: ReactNode;
}) {
  if (length === 0)
    return (
      <div className="flex items-center flex-col justify-center flex-1 px-3 py-4 text-3xl font-semibold text-center  rounded-lg  text-placeholder">
        <p>No active tasks...</p>
        <p className="text-lg"> (or that include this filter)</p>
      </div>
    );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default EmptyState;
