import { NearEarthObjectsProps } from "../Views/NearEarthObjects";

export const createNearEarthTooltip = (
  object: NearEarthObjectsProps
): string => {
  const tooltip = `
  Designated ${object.designation}, with a lunar distance of ${object.average_lunar_distance}, diameter of ${object.estimated_diameter}, and absolute magnitude of ${object.absolute_magnitude}.
   <br/> ${object.fullname} has a ${object.impact_probability} probability of impact with Earth.
  `;
  return tooltip;
};
