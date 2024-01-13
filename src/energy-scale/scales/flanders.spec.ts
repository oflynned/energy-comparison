import { FlandersScale } from "./flanders";

describe("FlandersScale", () => {
  describe("should be an A+ rating", () => {
    it("should be an A+ rating", () => {
      const rating = new FlandersScale().getRating(-1000);

      expect(rating.label).toBe("A+");
    });

    it("should be an A+ rating", () => {
      const rating = new FlandersScale().getRating(-1);

      expect(rating.label).toBe("A+");
    });

    it("should be an A+ rating if carbon neutral", () => {
      const rating = new FlandersScale().getRating(0);

      expect(rating.label).toBe("A+");
    });
  });

  describe("should be an A rating", () => {
    it("should work with lower range", () => {
      const rating = new FlandersScale().getRating(1);

      expect(rating.label).toBe("A");
    });

    it("should work with upper range", () => {
      const rating = new FlandersScale().getRating(99);

      expect(rating.label).toBe("A");
    });
  });

  describe("should be an B rating", () => {
    it("should work with lower range", () => {
      const rating = new FlandersScale().getRating(101);

      expect(rating.label).toBe("A");
    });

    it("should work with upper range", () => {
      const rating = new FlandersScale().getRating(199);

      expect(rating.label).toBe("A");
    });
  });

  it("should be an C rating", () => {
    const rating = new FlandersScale().getRating(201);

    expect(rating.label).toBe("C");
  });

  it("should be an D rating", () => {
    const rating = new FlandersScale().getRating(301);

    expect(rating.label).toBe("D");
  });

  it("should be an E rating", () => {
    const rating = new FlandersScale().getRating(422);

    expect(rating.label).toBe("E");
  });

  describe("should be an F rating", () => {
    it("should be an F rating when above the min value", () => {
      const rating = new FlandersScale().getRating(501);

      expect(rating.label).toBe("F");
    });
  });
});
