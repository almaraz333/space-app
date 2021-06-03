import { useEffect, useState } from "react";

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
          <img className="px-10" alt={data.title} src={data.hdurl} />
          <p className="py-3 px-5">{data.explanation}</p>
        </div>
      )}
    </>
  );
};
