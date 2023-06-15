#  **Ancestral Stories:** In many African cultures, the art of storytelling is passed
#  down from generation to generation. Imagine you're creating an application that
#  records these oral stories and translates them into different languages. The
#  stories vary by length, moral lessons, and the age group they are intended for.
#  Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.
# input=

# output=


# process=create two classes(,translator,storyteller)
# have attributes
# create methods
    

class storyTeller:
    def __init__(self, name, language):
        self.name = name
        self.language = language
        self.stories =[]
    
    def add_story(self, story):
        self.story.append(story)
    
    def display_stories(self):
        print("Stories was added", self.name)
        for story in self.stories:
            story.append()


class Translator:
    def __init__(self, name, source_language, target_language):
        self.name = name
        self.source_language = source_language
        self.target_language = target_language
    

# //       **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# // The app needs to handle recipes from different African countries, each with its
# // unique ingredients, preparation time, cooking method, and nutritional
# // information. Consider creating a `Recipe` class, and think about how you might
# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# // methods.
# input(name,)
# output(the apple should enable the cuisine to be able to display the products)
# process(create a class,we create the attributes and then the metods)

class Recipe:
    def __init__(self, name, ingredients, preparation_time, cooking_method,):
        self.name = name
        self.ingredients= ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method

    def display_recipe(self):
        print("Recipe:", self.name)


class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method,):
        super().__init__(name, ingredients, preparation_time, cooking_method,)

    def display_recipe(self):
        super().display_recipe()
        print("ingredients:", self.ingredients)

# //   **African Music Festival:** You're in charge of organizing a Pan-African music
# // festival. Many artists from different countries, each with their own musical style
# // and instruments, are scheduled to perform. You need to write a program to
# // manage the festival lineup, schedule, and stage arrangements. Think about how
# // you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# // how you might use inheritance if there are different types of performances or
# // stages. 
# 
# 


class Performance:
    def __init__(self, artist, start_time, end_time):
        self.artist = artist
        self.start_time = start_time
        self.end_time = end_time

    def get_duration(self):
        return self.end_time - self.start_time

class stage:
    def __init__(self, name):
        self.name = name
        self.schedule = []

    def add_performance(self, performance):
        self.schedule.append(performance)
#         //   Create a class called Product with attributes for name, price, and quantity.
# // Implement a method to calculate the total value of the product (price * quantity).
# // Create multiple objects of the Product class and calculate their total values.
#   pseudocode
# input(name price)
# output(we want to be able to implement methods to beable to calculate values)
# process(create a class create attributes,method(calculate_total_value))
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity

Product1 = Product('Product1', 11, 6)

# calculate value
total_value=Product1.calculate_total_value()
print(f"Total value of {Product1.name}: {total_value}")

# Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.

class student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_avarage_grades(self):
        if len(self.grades) == 1:
            return 1
        else:
            return sum(self.grades) / len(self.grades)

   

   
        
