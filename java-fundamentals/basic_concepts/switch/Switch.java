import java.lang.*;
public class Switch
{
	public static void main(String[] args)
	{
		// Switch 
		int day = 1;
		
		switch(day)
		{
			case 1:
				System.out.println("Sunday");
				break; // break will stop the program if case matched
			case 2: 
				System.out.println("Monday");
				break;
			case 3:
				System.out.println("Tuesday");
			case 4: 
				System.out.println("Wednesday");
			default:
				System.out.println("Thursday to Saturday");
		}
	}
}