import java.util.Arrays;

public class array
{
	public static void main(String[] args)
	{
		// 1D Array
		
		// if array elements are known
		int[] marks2 = {77, 95, 81};
		
		// if array elements are unknown
		int[] marks = new int[3]; // datatype[] variableName = new datatype[arraySize]
		marks[0] = 97;
		marks[1] = 87;
		marks[2] = 80;
		
		System.out.println(marks[1]);
		
		// length
		System.out.println(marks.length);
		
		// sort
		System.out.println(marks[0]);
		Arrays.sort(marks);
		System.out.println(marks[0]); // Now the array is sorted. So, the positions has changed by ascending order.
	}
}