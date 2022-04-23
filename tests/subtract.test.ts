import {expect,test} from '@jest/globals';
const {subtract} = require("../index.js");

const m1 =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const m2 = [5,5,5,5,5,5,5,5,5, 5, 5, 5, 5, 5, 5, 5];
const zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const ans = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11]
test("subtract m2 from m1",()=>{
    expect(subtract(m2,zeros)).toStrictEqual(m2)
})

test("subtract m2 from m1",()=>{
    expect(subtract(m1,zeros)).toStrictEqual(m1)
})

test("subtract m2 from m1",()=>{
    expect(subtract(zeros,m1)).toStrictEqual(m1.map((el)=>-el))
})

test("subtract m2 from m1",()=>{
    expect(subtract(zeros,zeros)).toStrictEqual(zeros)
})

test("subtract m2 from m1",()=>{
    expect(subtract(m1,m2)).toStrictEqual(ans);
})