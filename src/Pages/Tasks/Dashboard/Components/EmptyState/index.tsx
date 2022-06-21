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
      <div className="flex items-center justify-center flex-1 px-3 py-4 text-lg font-semibold text-center whitespace-pre-wrap rounded-lg bg-background text-placeholder">
        No active tasks
      </div>
    );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default EmptyState;
