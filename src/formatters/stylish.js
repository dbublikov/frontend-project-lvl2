const getString = (value) => value;

const formatStylish = (diff) => {
  const lines = diff.map((node) => {
    const diffType = {
      removed: () => ` - ${node.name}: ${getString(node.value)}`,
      unchanged: () => `   ${node.name}: ${getString(node.value)}`,
      changed: () => ` - ${node.name}: ${getString(node.firstValue)}\n + ${node.name}: ${getString(node.secondValue)}`,
      added: () => ` + ${node.name}: ${getString(node.value)}`,
    };
    return diffType[node.type]();
  });
  console.log(lines);
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n}`;
};

export default formatStylish;
