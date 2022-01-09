import yaml from 'js-yaml';

const parsersTree = {
  json: JSON.parse,
  yml: yaml.safeLoad,
};

export default (data, dataType) => parsersTree[dataType](data);
