
type Vector3=[number, number, number];

const rX = (angle:number) => [
    1, 0, 0, 0,
    0, Math.cos(angle), Math.sin(angle), 0,
    0, -Math.sin(angle), Math.cos(angle), 0,
    0, 0, 0, 1
]

const rY = (angle:number) => [
    Math.cos(angle), 0, -Math.sin(angle), 0,
    0, 1, 0, 0,
    Math.sin(angle), 0, Math.cos(angle), 0,
    0, 0, 0, 1
]

const rZ = (angle:number) => [
    Math.cos(angle), 0, -Math.sin(angle), 0,
    Math.sin(angle), 0, Math.cos(angle), 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]

const rotations = {"x":rX, "y":rY, "z": rZ};

const rotate = (m:Array<number>,axis:string,angle:number) => multiply(m,rotations[axis](angle));
const scale= (m:Array<number>, scale:Vector3) => [
    scale[0] * m[0],  m[1]*scale[0], m[2]*scale[0], m[3]*scale[0],
    m[4]*scale[1], m[5] *scale[1],  m[6]*scale[1],  m[7]*scale[1],
    m[8]*scale[2],  m[9]*scale[2], m[10] *scale[2],  m[11]*scale[2],
    m[12],  m[13],  m[14],  m[15]
]

const identity = ():Array<number> => [
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    0,0,0,1
]

const add = (m1:Array<number>, m2:Array<number>):Array<number> => m1.map((el,i)=>el+m2[i])

const subtract = (m1:Array<number>, m2:Array<number>):Array<number> => m1.map((el,i)=>el-m2[i])

const transpose = (m:Array<number>):Array<number> => {
    const transpose =[];
    for(let i =0; i<4; i++){
        for(let j =i; j<=15; j=j+4){
            transpose.push(m[j])
        }
    }
    return transpose;
}

const multiply = (m1:Array<number>, m2:Array<number>):Array<number> => {
    const ans = []
    for(let i =0; i<16; i++){
        let el=0;
        const row = Math.floor((i)/4);
        const col = i%4;
        for(let j = 0; j<4; j++){
            el += m1[row*4+j] * m2[col+4*j]
        }
        ans[i] = el;
    }
    return ans
}

const translate = (m:Array<number>, v:Vector3)=>
[
    m[0], m[1], m[2], m[3], 
    m[4], m[5], m[6], m[7], 
    m[8], m[9], m[10], m[11], 
    m[12] +v[0], m[13]+v[1], m[14]+v[2], m[15]
]
const inverse = () => null

module.exports={identity, transpose, add, subtract, multiply, inverse, rotate, scale}