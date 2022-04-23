import {expect,test} from '@jest/globals';

const {add} = require("../index.js");
const m1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const m2 = [5,5,5,5,5,5,5,5,5, 5, 5, 5, 5, 5, 5, 5];
const zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const ans = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
test("returns the sum of m1 and m2",()=>{
    expect(add(m1,m2)).toStrictEqual(ans)
})

test("returns the sum of m1 and m2",()=>{
    expect(add(m2,m1)).toStrictEqual(ans)
})

test("returns the sum of m1 and m2",()=>{
    expect(add(m2,zeros)).toStrictEqual(m2)
})

test("returns the sum of m1 and m2",()=>{
    expect(add(zeros,m1)).toStrictEqual(m1)
})

test("returns the sum of m1 and m2",()=>{
    expect(add(zeros,zeros)).toStrictEqual(zeros)
})