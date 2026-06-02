public class casting
{
	public static void main(String[] args)
	{
		// implicit casting
		double price = 100.00;
		double finalPrice = price + 18;
		System.out.println(finalPrice);
		
		// explicit casting
		int p = 100;
		int fp = p + (int)18.97;
		System.out.println(fp);
	}
}