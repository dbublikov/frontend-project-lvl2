import path from 'path';
import readFile from './utils.js';
import parse from './parsers.js';
import calculateDiff from './calculateDiff.js';
import visualize from './formatters/index.js';

const getParesedData = (file) => {
  const data = readFile(file);
  const dataType = path.extname(file).substring(1);
  return parse(data, dataType);
};

export default (file1, file2, format = 'stylish') => {
  const diff = calculateDiff(getParesedData(file1), getParesedData(file2));
  return visualize(diff, format);
};
