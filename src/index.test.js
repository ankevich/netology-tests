import indication from "./index"

test("больше 50 - healthy", () => {
    const input = {
      name: "Маг",
      health: 90,
    };
    const expected = "healthy";
    const received = indication(input);
    expect(received).toBe(expected);
  });

  test("меньше 15 - critical", () => {
    const input = {
      name: "Маг",
      health: 10,
    };
    const expected = "critical";
    const received = indication(input);
    expect(received).toBe(expected);
  });

  test("от 15 до 50 - wounded", () => {
    const input = {
      name: "Маг",
      health: 38,
    };
    const expected = "wounded";
    const received = indication(input);
    expect(received).toBe(expected);
  });
