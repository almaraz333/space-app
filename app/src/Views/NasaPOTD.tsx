import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export type POTDResponseProps = {
  date: string;
  explanation: string;
  title: string;
  hdurl: string;
};

export const NasaPOTD: React.FC = () => {
  const [data, setData] = useState<POTDResponseProps>();
  const apiUrl =
    "https://api.nasa.gov/planetary/apod?api_key=IrN5Iyve4fiJfxQFchJkCow2zPtW9yGjPzcrgFlM";

  useEffect(() => {
    const fetchData = async () => {
      const result = await (await fetch(apiUrl)).json();

      setData(result);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <>
      {data && (
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-grey py-10 text-3xl">{data.title}</h2>

          <img
            className="mx-10 border border-white"
            alt={data.title}
            src={data.hdurl}
          />

          <h3 className="py-3 px-20">{data.explanation}</h3>
        </div>
      )}
    </>
  );
};
