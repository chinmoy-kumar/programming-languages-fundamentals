public class tryCatch
{
    public static void main(String[] args)
    {
        // TRY - CATCH in Exception Handling
        int[] marks = {97, 98, 100};
        try {
            System.out.println(marks[7]);
        } catch (Exception exception) {
            // do something after catching
            System.out.println("Enter a valid index");
        }
        System.out.println("Hello world");

    }
}