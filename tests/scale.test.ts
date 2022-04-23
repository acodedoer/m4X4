import { testEnvironment } from "../jest.config";
import { expect, test } from '@jest/globals';

const fives = [5,5,5,5,5,5,5,5,5, 5, 5, 5, 5, 5, 5, 5];
const zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const identity = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
const {scale} = require("../index");
test('returns a scaled matrix',()=>{
    expect(scale(fives,[2,2,2])).toStrictEqual([
        10,10,10,10,
        10,10,10,10,
        10,10,10,10,
        5,5,5,5
    ])
})

test('returns a scaled matrix',()=>{
    expect(scale(identity,[5,5,5])).toStrictEqual([
        5,0,0,0,
        0,5,0,0,
        0,0,5,0,
        0,0,0,1
    ])
})

test('returns a scaled matrix',()=>{
    expect(scale(zeros,[2,2,2])).toStrictEqual([
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ])
})