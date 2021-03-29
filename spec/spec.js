const square56 = require('../square56.js')
const scoresClump = require('../scoresClump.js')
const hasOne = require('../hasOne.js')
const count7 = require('../count7.js')

describe("square56", function() {
    it("return a list of numbers squared, adding 10, and omit numbers ending in 5 or 6", function() {
      let test1 = [3, 1, 4]
      let result1 = square56.square56(test1)
      let expected1 = [19, 11]
      let test2 = [1]
      let result2 = square56.square56(test2)
      let expected2 = [11]
      let test3 = [2]
      let result3 = square56.square56(test3)
      let expected3 = [14]
      expect(result1).toEqual(expected1)
      expect(result2).toEqual(expected2)
      expect(result3).toEqual(expected3)
    });
  });

describe("scoresClump", function() {
    it("should return true if the array contains 3 scores that don't differ by more than 2", function() {
        let test1 = [3,4,5]
        let test2 = [3,4,6]
        let test3 = [1,3,5,5]
        let result1 = scoresClump.scoresClump(test1)
        let result2 = scoresClump.scoresClump(test2)
        let result3 = scoresClump.scoresClump(test3)
        expect(result1).toBe(true)
        expect(result2).toBe(false)
        expect(result3).toBe(true)
    })
})

describe("hasOne", function() {
    it("return true if n contains a 1 digit", function() {
        let test1 = 10
        let test2 = 22
        let test3 = 220
        let result1 = hasOne.hasOne(test1)
        let result2 = hasOne.hasOne(test2)
        let result3 = hasOne.hasOne(test3)
        expect(result1).toBe(true)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })
})

describe("count7", function() {
    it("return the number of times 7 appears in n", function() {
        let result1 = count7.count7(717)
        let result2 = count7.count7(7)
        let result3 = count7.count7(123)
        expect(result1).toBe(2)
        expect(result2).toBe(1)
        expect(result3).toBe(0)
    })
})