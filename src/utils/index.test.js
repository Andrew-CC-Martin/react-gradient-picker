import { generateCSSString } from "./index"

describe("generateCSSString", () => {
  test("It generates correct CSS string for two colors", () => {
    const input = {
      colors: ["#0504ff", "#000000"],
      degreesRotation: "155"
    }
    const output = "155deg, #0504ff, #000000"

    expect(generateCSSString(input)).toBe(output)
  })
})
