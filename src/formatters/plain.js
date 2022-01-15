import _ from 'lodash';

const getNodeName = (name, ancestor) => ((ancestor === '') ? `${name}` : `${ancestor}.${name}`);

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatPlain = (diff) => {
  const iter = (newDiff, ancestor = '') => {
    const lines = newDiff
      .map(({
        name, value, firstValue, secondValue, children, type,
      }) => {
        const diffType = {
          unchanged: () => '',
          removed: () => `Property '${getNodeName(name, ancestor)}' was removed`,
          changed: () => `Property '${getNodeName(name, ancestor)}' was updated. From ${getValue(firstValue)} to ${getValue(secondValue)}`,
          added: () => `Property '${getNodeName(name, ancestor)}' was added with value: ${getValue(value)}`,
          nested: () => iter(children, getNodeName(name, ancestor)),
        };
        return diffType[type]();
      })
      .filter((node) => node !== '');
    const innerValue = lines.join('\n');
    return innerValue;
  };
  return iter(diff);
};

export default formatPlain;
