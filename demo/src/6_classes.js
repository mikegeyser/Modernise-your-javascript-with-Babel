"use strict";

describe("6) classes", () => {
  it("function references as classes", () => {
    var Animal = function(name) {
      this.name = name;

      this.getName = function() {
        return this.name;
      };

      this.getSound = function() {
        return this.sound;
      };
    };

    var Dog = function(name) {
      Animal.call(this, name);
      this.sound = "Bark";
    };

    Dog.prototype = new Animal();

    var animal = new Animal();
    var dog = new Dog("Spot");

    expect(animal.getSound()).toBeUndefined();
    expect(animal.getName()).toBeUndefined();
    expect(dog.getSound()).toBe("Bark");
    expect(dog.getName()).toBe("Spot");
  });

  it("semantic classes", () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }

      getName() {
        return this.name;
      }

      getSound() {
        return this.sound;
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
        this.sound = "Bark";
      }
    }

    var animal = new Animal();
    var dog = new Dog("Spot");

    expect(animal.getSound()).toBeUndefined();
    expect(animal.getName()).toBeUndefined();
    expect(dog.getSound()).toBe("Bark");
    expect(dog.getName()).toBe("Spot");
  });
});
