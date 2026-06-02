import java.util.Scanner; // class for scanner
public class Main
{
	public static void main(String[] args)
	{
		
		// Take input in Java
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your age: ");
		int age = sc.nextInt();
		System.out.println("Enter your weight: ");
		float weight = sc.nextFloat();
		
		System.out.println("Your age is: ");
		System.out.println(age);
		System.out.println("Your weight is: ");
		System.out.println(weight);

		// Add this line to consume the leftover newline character
        sc.nextLine();  // This will consume the newline character
		
		// string input word
		/*
		System.out.println("Enter your name: ");
		String name = sc.next();
		System.out.println(name);
		*/
		
		// String input sentence
		System.out.println("Enter your full name: ");
		String fullName = sc.nextLine();
		System.out.println(fullName);
	}
}