interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // by default public and also abstract method;
  abstract void eat(); // by default public and abstract method;
  void walk(); // by default public and abstract method;
}

class Cat implements Animal {
  public void animalSound() {
    System.out.println("Meow");
  }
  public void sleep() {
    System.out.println("Cat is sleeping");
  }
  public void walk(){
    System.out.println("Cat is walking");
  }
  public void eat()
  {
    System.out.println("Cat is eating");
  }
}

class Main {
  public static void main(String[] args) {
    Cat myCat = new Cat();
    myCat.animalSound();
    myCat.sleep();
    myCat.walk();
    myCat.eat();
  }
}
