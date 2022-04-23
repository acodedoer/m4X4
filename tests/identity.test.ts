import { testEnvironment } from "../jest.config";
import { expect, test } from '@jest/globals';

const {identity} = require("../index");
test('returns an identity matrix',()=>{
    expect(identity()).toStrictEqual([
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1
    ])
})