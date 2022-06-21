import React from "react";

function Error({ error }: { error: string | boolean }) {
  if (error !== "")
    return <i className="px-4 pt-1 text-xs font-semibold text-red_text">{error}</i>;

  return null;
}
export default Error;
