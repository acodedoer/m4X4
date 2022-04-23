import {expect, test} from "@jest/globals";
const {rotate} = require("../index");

const m =   [1,2,4,32,
            4,5,6,5,
            3,4,5,6,
            7,8,4,3]
test("rotate m1 about X",()=>{
    expect(rotate(m,"x",0)).toStrictEqual(m);
})