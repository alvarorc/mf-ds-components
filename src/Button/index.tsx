import React from "react";

interface Props {
  loading?: boolean;
}

const Button: React.FC<Props> = ({ children, loading }) => {
  return <button>{loading ? "loading..." : children}</button>;
};

export default Button;
