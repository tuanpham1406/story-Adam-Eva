let Apple = function () {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight;
};
    this.decrease = function () {
            this.weight --;
    };
    this.isEmpty = function () {
        if (this.weight > 0 ) {
            console.log(this.weight);
        } else {
            alert('Táo đã bị ăn hết !!');
        }
    }
};

let Human = function () {
    this.setName = function (name) {
        this.name = name;
        console.log(name);
    };
    this.getName = function () {
        return this.name;
    };

    this.setGender = function (gender) {
        this.gender = gender;
        console.log(gender);
    };

    this.setWeightHuman = function (weightHuman) {
        this.weightHuman = weightHuman;
        console.log(weightHuman);
    };
    this.getWeightHuman = function () {
        return this.weightHuman;
    };

    this.say = function () {
        let a = prompt('say: ');
        console.log(a);
    };
    this.setApple = function () {
      this.apple = apple;
    };
    this.checkApple = function () {
        return this.apple.getWeight;
        console.log(this.apple.getWeight);
    };

    this.eat = function () {
        this.weightHuman ++;
        this.apple.decrease();
    }
};

let apple = new Apple();

let adam = new Human();
adam.setApple(apple);
adam.setName('Adam');
adam.setGender('male');
adam.setWeightHuman(70);
adam.say();
adam.eat();
apple.isEmpty();
adam.checkApple();
console.log(adam.weightHuman);

let eva = new Human();
eva.setApple(apple);
eva.setName('Eva');
eva.setGender('feMale');
eva.setWeightHuman(50);
eva.say();
eva.eat();
apple.isEmpty();
eva.checkApple();
console.log(eva.weightHuman);