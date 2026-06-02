public class string
{
	public static void main(String[] args)
	{
		// concatenate
		String name1 = "chinmoy";
		String name2 = "kumar";
		String name3 = name1 + " and " + name2;
		System.out.println(name3);
		
		String name = "Chinmoy";
		// charAt
		System.out.println(name.charAt(0));
		
		// length
		System.out.println(name.length());
		
		// replace
		String name4 = name.replace('C', 'T'); // replace(old, new);
		System.out.println(name2); 
		System.out.println(name); // replace doesn't change the original variable
		
		// substring
		String name5 = "I love my country";
		String name6 = name5.substring(2, 4);
		System.out.println(name6); // substring(n, m-1);
	}
}