import stylish from './stylish.js';

const formats = {
  stylish,
};

export default (diff, format) => formats[format](diff);
