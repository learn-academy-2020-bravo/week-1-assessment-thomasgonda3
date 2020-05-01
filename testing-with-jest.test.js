// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
  test("returns the sum of two numbers", () => {
    expect(addThemUp(-10,30)).toEqual(20)
    expect(addThemUp(-3,1)).toEqual(-2)
    expect(addThemUp(90,100)).toEqual(190)
    //test int overflow
    expect(addThemUp(2147483647,2)).toEqual(2147483649)
    expect(addThemUp(-2147483648,-2)).toEqual(-2147483650)
    //test decimal values
    expect(addThemUp(2.5,3.5)).toEqual(6)
  })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2)  =>  {
  return num1 + num2;
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triangle and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
  test("returns area of a triangle from its base and height", () => {
    expect(triangleArea(4,5)).toEqual(10)
    expect(triangleArea(2,20)).toEqual(20)
    //test if base or height is impossible
    expect(triangleArea(0,5)).toEqual("error")
    expect(triangleArea(4,-1)).toEqual("error")
    //test decimal values
    expect(triangleArea(4.5,6)).toEqual(13.5)
  })
})


// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (num1, num2) =>  {
  if (Math.min(num1, num2) <= 0)  return "error"
  return num1 * num2 / 2
}
