import React,{ReactNode} from "react";

function LoadingErrorState({
  loading,
  error,
  children
}: {
  loading: boolean;
  error: string | false;
  children: ReactNode;
}) {
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error:{error}</div>;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
export default LoadingErrorState