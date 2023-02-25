/**
 * Calculate geometrical (2 dimensions) distance of two points
 *
 * @param x1 x coordinate of first point
 * @param y1 y coordinate of first point
 * @param x2 x coordinate of second point
 * @param y2 y coordinate of second point
 *
 * @return geometrical distance of two given points
 */
const pointsDistance = (
  x1: number | string,
  y1: number | string,
  x2: number | string,
  y2: number | string
): number => {
  x1 = typeof x1 == 'string' ? Number(x1) : x1;
  y1 = typeof y1 == 'string' ? Number(y1) : y1;
  x2 = typeof x2 == 'string' ? Number(x2) : x2;
  y2 = typeof y2 == 'string' ? Number(y2) : y2;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

export { pointsDistance };
