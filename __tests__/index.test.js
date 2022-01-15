import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const firstAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/noNested.txt');
const firstAnswer = fs.readFileSync(firstAnswerPath, 'utf8');
const secondAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/nested.txt');
const secondAnswer = fs.readFileSync(secondAnswerPath, 'utf8');
const thirdAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/plain.txt');
const thirdAnswer = fs.readFileSync(thirdAnswerPath, 'utf8');

test('genDiff JSON noNested', () => {
  expect(genDiff('file3.json', 'file4.json', 'stylish')).toEqual(firstAnswer);
});

test('genDiff JSON nested', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(secondAnswer);
});

test('genDiff YML nested', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(secondAnswer);
});

test('genDiff YML plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(thirdAnswer);
});

test('genDiff JSON plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(thirdAnswer);
});
