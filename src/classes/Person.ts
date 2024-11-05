export class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	compareAge(other: Person): void {
        // If other is younger
		if(!this.otherIsOlder(other)) {
			console.log(other.name + " is younger than me.");
		}
        // if other is older
		else if(!this.otherIsYounger(other)) {
			console.log(other.name + " is older than me.");
		}
		else {
			console.log(other.name + " is the same age as me.");
		}
	}

    otherIsOlder(other: Person): boolean {
        return other.age < this.age;
    }

    otherIsYounger(other: Person): boolean {
        return other.age > this.age;
    }
}

export function main() {
    console.log("Hello World");
}