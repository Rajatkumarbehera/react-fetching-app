import { useLocation } from "react-router-dom";
import { Card } from "../components/Card";

export const Details = () => {
  const { state } = useLocation();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[400px] p-3 sm:max-w-[400px] md:max-w-md">
        <Card title={state.title} body={state.body} star={true} />
      </div>
    </div>
  );
};
