// import java.lang.*;
import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        Student students[] = new Student[3];

		Scanner obj = new Scanner(System.in);
		
        for(int i = 0; i < students.length; i++)
			
        {
			students[i] = new Student();
			int a = i + 1;
            System.out.println("Enter Student " + a + " name: ");
            String name = obj.nextLine();
            students[i].setName(name);

            System.out.println("Enter student " + a + " roll: ");
            int roll = obj.nextInt();
			obj.nextLine();
            students[i].setRoll(roll);

            System.out.println("Enter student " + a + " section: ");
            String section = obj.nextLine();
            students[i].setSection(section);
        }

        for(int i = 0; i < students.length; i++)
        {
			int a = i + 1;
            System.out.println("Student " + a);
			students[i].details();
        }

    }
}