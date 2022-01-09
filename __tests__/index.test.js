import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const firstAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/plain.txt');
const firstAnswer = fs.readFileSync(firstAnswerPath, 'utf8');

test('genDiff JSON plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(firstAnswer);
});

test('genDiff YML plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(firstAnswer);
});