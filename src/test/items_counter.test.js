import itemsCounter from "../modules/itemCounter.js";
import renderData from "../modules/renderData.js";

const simulateList = () => {
  const ul = document.createElement("ul");
  ul.className = "items-list";
  document.querySelector("body").appendChild(ul);
};

const simulateSpan = () => {
  const span = document.createElement("span");
  span.className = "count";
  document.querySelector("body").appendChild(span);
};

beforeAll(() => {
  simulateList();
  simulateSpan();
});

describe("Items Count", () => {
  it("No items count", () => {
    let arr = [];

    renderData(arr);

    expect(itemsCounter(".items-list li")).toBe(0);
  });

  it("Full Items Count", async () => {
    let arr = [
      {
        show: { id: 0, image: { medium: "src" }, name: "name" },
        likes: 0,
      },
      {
        show: { id: 0, image: { medium: "src" }, name: "name" },
        likes: 0,
      },
    ];

    await renderData(arr);

    expect(itemsCounter("ul li")).toBe(2);
  });
});
