class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	compareAge(other: Person): void {
		if(other.age > this.age) {
			console.log(other.name + " is younger than me.");
		}
		else if(other.age < this.age) {
			console.log(other.name + " is older than me.");
		}
		else {
			console.log(other.name + " is the same age as me.");
		}
	}
}
