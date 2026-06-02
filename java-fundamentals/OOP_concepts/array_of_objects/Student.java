public class Student
{
    private String name;
    private int roll;
    private String section;

    public Student()
    {

    }
    public Student(String name, int roll, String section)
    {
        this.name = name;
        this.roll = roll;
        this.section = section;
    }

    public void setName(String name)
    {
        this.name = name;
    }
    public String getName()
    {
        return name;
    }
    public void setRoll(int roll)
    {
        this.roll = roll;
    }
    public int getRoll()
    {
        return roll;
    }
    public void setSection(String section)
    {
        this.section = section;
    }
    public String getSection()
    {
        return section;
    }
	
	public void details()
	{
		System.out.println(name + "\n" + roll + "\n" + section + "\n");
	}
}