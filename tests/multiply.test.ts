import {expect,test} from '@jest/globals';
const {multiply} = require("../index.js");

const m1 =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const m2 = [5,5,5,5,5,5,5,5,5, 5, 5, 5, 5, 5, 5, 5];
const m3 = [2,3,4,5,1,2,3,4,6,7,8,9,4,5,6,7]
const zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const identity = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
const ans = [50,50,50,50,130,130,130,130,210,210,210,210,290,290,290,290]
const ans2 = [38,48,58,68,90,116,142,168,142,184,226,268,194,252,310,368]
test("multiply m1 and m2",()=>{
    expect(multiply(m2,zeros)).toStrictEqual(zeros)
})

test("multiply m1 and m2",()=>{
    expect(multiply(zeros,m1)).toStrictEqual(zeros)
})

test("multiply m1 and m2",()=>{
    expect(multiply(m1,m2)).toStrictEqual(ans)
})

test("multiply m1 and m2",()=>{
    expect(multiply(m1,m3)).toStrictEqual(ans2)
})

test("multiply m1 and m2",()=>{
    expect(multiply(zeros,zeros)).toStrictEqual(zeros)
})

test("multiply m1 and m2",()=>{
    expect(multiply(m1,identity)).toStrictEqual(m1);
})