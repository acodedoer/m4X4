var rX = function (angle) { return [
    1, 0, 0, 0,
    0, Math.cos(angle), Math.sin(angle), 0,
    0, -Math.sin(angle), Math.cos(angle), 0,
    0, 0, 0, 1
]; };
var rY = function (angle) { return [
    Math.cos(angle), 0, -Math.sin(angle), 0,
    0, 1, 0, 0,
    Math.sin(angle), 0, Math.cos(angle), 0,
    0, 0, 0, 1
]; };
var rZ = function (angle) { return [
    Math.cos(angle), 0, -Math.sin(angle), 0,
    Math.sin(angle), 0, Math.cos(angle), 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]; };
var rotations = { "x": rX, "y": rY, "z": rZ };
var rotate = function (m, axis, angle) { return multiply(m, rotations[axis](angle)); };
var scale = function (m, scale) { return [
    scale[0] * m[0], m[1] * scale[0], m[2] * scale[0], m[3] * scale[0],
    m[4] * scale[1], m[5] * scale[1], m[6] * scale[1], m[7] * scale[1],
    m[8] * scale[2], m[9] * scale[2], m[10] * scale[2], m[11] * scale[2],
    m[12], m[13], m[14], m[15]
]; };
var identity = function () { return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]; };
var add = function (m1, m2) { return m1.map(function (el, i) { return el + m2[i]; }); };
var subtract = function (m1, m2) { return m1.map(function (el, i) { return el - m2[i]; }); };
var transpose = function (m) {
    var transpose = [];
    for (var i = 0; i < 4; i++) {
        for (var j = i; j <= 15; j = j + 4) {
            transpose.push(m[j]);
        }
    }
    return transpose;
};
var multiply = function (m1, m2) {
    var ans = [];
    for (var i = 0; i < 16; i++) {
        var el = 0;
        var row = Math.floor((i) / 4);
        var col = i % 4;
        for (var j = 0; j < 4; j++) {
            el += m1[row * 4 + j] * m2[col + 4 * j];
        }
        ans[i] = el;
    }
    return ans;
};
var translate = function (m, v) {
    return [
        m[0], m[1], m[2], m[3],
        m[4], m[5], m[6], m[7],
        m[8], m[9], m[10], m[11],
        m[12] + v[0], m[13] + v[1], m[14] + v[2], m[15]
    ];
};
var inverse = function () { return null; };
module.exports = { identity: identity, transpose: transpose, add: add, subtract: subtract, multiply: multiply, inverse: inverse, rotate: rotate, scale: scale };
