import {expect, test} from "@jest/globals"
const {transpose} = require("../index")

const m1 =    [7,12,1,14,2,13,8,11,16,3,10,5,9,6,15,4]
const m1Ans = [7,2,16,9,12,13,3,6,1,8,10,15,14,11,5,4]
test("return the transpose of matrix m",()=>{
    expect(transpose(m1)).toStrictEqual(m1Ans);
})

test("return the transpose of matrix m",()=>{
    expect(transpose(m1Ans)).toStrictEqual(m1);
})