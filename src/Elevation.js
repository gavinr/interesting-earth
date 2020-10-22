const getRandomPoints = (extent, number) => {
  return new Array(number).fill("foo").map(() => {
    const randomX = Math.random() * (extent.xmax - extent.xmin) + extent.xmin;
    const randomY = Math.random() * (extent.ymax - extent.ymin) + extent.ymin;
    return {
      type: "point",
      x: randomX,
      y: randomY,
      spatialReference: extent.spatialReference,
    };
  });
};

const getElevations = (pointsArray, elevationLayer) => {
  const promises = pointsArray.map((point) => {
    return elevationLayer.queryElevation(point);
  });

  return Promise.all(promises);
};

export const checkElevation = (view, elevationLayer) => {
  return new Promise((resolve, reject) => {
    const extent = view.extent;

    const testPoints = getRandomPoints(extent, 10);
    testPoints.push(view.center);

    getElevations(testPoints, elevationLayer).then((elevationsResult) => {
      const elevations = elevationsResult.map((x) => x.geometry.z);

      elevations.sort(function (a, b) {
        return a - b;
      });
      const diff = elevations[elevations.length - 1] - elevations[0];
      resolve(diff);
    });
  });
};
