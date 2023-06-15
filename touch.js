// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.
// js
// sudocode
// input=st


// output=create a  application that record oral stories and translate them



// process=create two class
// constructor(name language)
// i will create a method
class StoryTeller {
    constructor(name, language) {
      this.name = name;
      this.language = language;
    }
  
    tellStory(story) {
      console.log(`${this.name} is telling a story in ${this.language}:`);
      story.tellStory();
    }
  }
  
  class Translator {
    constructor(name, language, targetLanguage) {
     
      this.targetLanguage = targetLanguage;
    }
  
    translate(story) {
        console.log(`${this.name} is translating the story into ${this.targetLanguage}:`);
      
        const translatedStory = new Story(
            story.title,
            translateContent(story.content, this.targetLanguage),
            translateMoralLesson(story.moralLesson, this.targetLanguage),
            story.ageGroup
          );
      
          return translatedStory;
        }
      }

//       **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.
// sudocode(input=(name,country))
    //   (output=the app need to be abble to display the recipe)
// process(create a class(recipe),constructor:(attributes(ingredient,preparationtime)),create a method(display recipe))
class Recipe {
    constructor(name, country, ingredients, preparationTime, cookingMethod, ) {
      this.name = name;
      this.country = country;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
     
    }
  
    displayRecipe() {
      console.log(`Recipe Name: ${this.name}`);
      console.log(`Country: ${this.country}`);
     
    }
  }
// //   **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

// pseudocode(input=dname)
// output(being abble to track diferent species in national park)
// process(create two class(species,predator),constructor(attributes),create a method(display information))

class Species {
    constructor(name, diet, lifespan) {
      this.name = name;
      this.diet = diet;
      this.lifespan = lifespan;
    }
  
    displayInfo() {
      console.log(`Species: ${this.name}`);
      
    }
  }
  
  class Prey extends Species {
    constructor(name, diet, lifespan, migrationPattern) {
      super(name, diet, lifespan);
      this.migrationPattern = migrationPattern;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Migration Pattern: ${this.migrationPattern}`);
    }
  }
//   **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.
// input(country,name)
// output(being able to organise for many different artist from different countries each with their own musical style)
// process(create two classes,create a constructor tha is attribute(name,county,and second one will contain(artists,starttime,endtime)))
class Artist {
    constructor(name, country) {
      this.name = name;
      this.country = country;
    }
  }
  class Stages {
    constructor(name) {
      this.name = name;
      this.performances = [];
    }
  
    addPerformance(performance) {
      this.performances.push(performance);
    }
  }
//   Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
  
// pseudocode
// # input(name price)
// # output(we want to be able to implement methods to beable to calculate values)
// # process(create a class create attributes(constructor),method(calculatetotalvalue))

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price= price;
      this.quantity = quantity;
    }
  
    calculateTotalValue() {
      return this.price * this.quantity;
    }
  }
  
  const product1 = new product('product 1', 12, 3);
  
  const totalValue = product1.calculateTotalValue();
  
  
  
  
  
  
  