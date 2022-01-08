const parsersTree = {
  json: JSON.parse,
};

export default (data, dataType) => parsersTree[dataType](data);
