import { BarLoader } from "react-spinners";

export const Loader = () => {
  const override = {
    display: "block",
    margin: "20px auto",
  };

  return (
    <div>
      <BarLoader
        color="#2B7FFF"
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
