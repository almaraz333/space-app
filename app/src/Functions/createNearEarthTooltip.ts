import { NearEarthObjectsProps } from "../Views/NearEarthObjects";

export const createNearEarthTooltip = (
  object: NearEarthObjectsProps
): string => {
  const tooltip = `This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is <br />
  ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is <br />
  ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is <br />
  ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is <br />
  ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is <br />
  ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is ${object.fullname}This is <br />
`;
  return tooltip;
};
