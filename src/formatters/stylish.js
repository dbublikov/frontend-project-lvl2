import _ from 'lodash';

const getIdent = (spaces) => ('  '.repeat(spaces));

const getString = (value, spaces = 0) => {
  if (!_.isObject(value)) {
    return value;
  }
  const lines = _.keys(value).map((node) => `${getIdent(spaces + 2)}  ${node}: ${getString(value[node], spaces + 2)}`);
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n${getIdent(spaces + 1)}}`;
};

const formatStylish = (diff) => {
  const iter = (newDiff, spaces = 1) => {
    const lines = newDiff.map(({
      name, value, firstValue, secondValue, children, type,
    }) => {
      const diffType = {
        removed: () => `${getIdent(spaces)}- ${name}: ${getString(value, spaces)}`,
        unchanged: () => `${getIdent(spaces)}  ${name}: ${getString(value, spaces)}`,
        changed: () => `${getIdent(spaces)}- ${name}: ${getString(firstValue, spaces)}\n${getIdent(spaces)}+ ${name}: ${getString(secondValue, spaces)}`,
        added: () => `${getIdent(spaces)}+ ${name}: ${getString(value, spaces)}`,
        nested: () => `${getIdent(spaces)}  ${name}: ${iter(children, spaces + 2)}`,
      };
      return diffType[type]();
    });
    const innerValue = lines.join('\n');
    return `{\n${innerValue}\n${getIdent(spaces - 1)}}`;
  };
  return iter(diff);
};

export default formatStylish;
