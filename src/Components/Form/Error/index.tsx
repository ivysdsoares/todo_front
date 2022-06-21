import React from "react";

function Error({ error }: { error: string | boolean }) {
  if (error !== "")
    return <p className="px-4 pt-1 text-xs text-red_text">{error}</p>;

  return null;
}
export default Error;
