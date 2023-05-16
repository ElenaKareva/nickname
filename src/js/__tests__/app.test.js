import Validator from "../app";

test.each(["1Elena", "Elena-", "Elen1111a", "_Elen1a", "Elena1"])(
    ("test error name"), (name) => {
      expect(() => new Validator(name)).toThrow("Неверный формат имени");
    },
  );
  
  test.each(["Elen1a", "El_en1a", "E-le_n_1a"])(
    ("test name"), (name) => {
      const validator = new Validator(name);
      expect(() => validator.validateUsername().toEqual(name));
    },
  );