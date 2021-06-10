import { useEffect, useState } from "react";
import Asteroid from "../Assets/asteroid.png";
import Earth from "../Assets/earth.png";
import Moon from "../Assets/moon.png";

import "../Sass/nearEarthObjects.scss";

import ReactTooltip from "react-tooltip";
import { createNearEarthTooltip } from "../Functions/createNearEarthTooltip";

export type NearEarthObjectsProps = {
  spkId: string;
  designation: string;
  sentryId: string;
  Palermo_scale_max: string;
  absolute_magnitude: string;
  average_lunar_distance: number;
  estimated_diameter: string;
  fullname: string;
  impact_probability: string;
  is_active_sentry_object: true;
  last_obs: string;
  last_obs_jd: string;
  palermo_scale_ave: string;
  potential_impacts: string;
  torino_scale: string;
  url_nasa_details: string;
  url_orbital_elements: string;
  v_infinity: string;
  year_range_max: string;
  year_range_min: string;
};

export const NearEarthObjects: React.FC = () => {
  const compare = (a: NearEarthObjectsProps, b: NearEarthObjectsProps) => {
    if (a.average_lunar_distance < b.average_lunar_distance) {
      return -1;
    }
    if (a.average_lunar_distance > b.average_lunar_distance) {
      return 1;
    }
    return 0;
  };

  const [data, setData] = useState<NearEarthObjectsProps[]>();
  const apiUrl =
    "https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=30&api_key=IrN5Iyve4fiJfxQFchJkCow2zPtW9yGjPzcrgFlM";
  useEffect(() => {
    const fetchData = async () => {
      const result = await (await fetch(apiUrl)).json();
      const sortedObjects = result.sentry_objects.sort(compare).slice(0, 10);

      setData(sortedObjects);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="grid grid-cols-3 near-earth-object-container mt-24 h-full">
      <img
        src={Moon}
        alt="moon"
        height={70}
        width={70}
        className="ml-72 mb-10"
        style={{ filter: "invert(1)" }}
      />
      <img
        alt="earth"
        src={Earth}
        height="75%"
        width="75%"
        className="col-start-1"
      />
      <div className="grid grid-flow-col-dense gap-x-4 px-72 items-center justify-start pr-0 pl-0 col-start-2 col-end-4">
        {data &&
          data.map((item, key) => (
            <a href={item.url_nasa_details}>
              <ReactTooltip multiline={true} />
              <img
                key={key}
                data-tip={createNearEarthTooltip(item)}
                alt="asteroid"
                src={Asteroid}
                height={2000 * Number(item.estimated_diameter)}
                width={2000 * Number(item.estimated_diameter)}
                style={{
                  marginRight: 25 * Number(item.average_lunar_distance),
                }}
              />
            </a>
          ))}
      </div>
    </div>
  );
};
