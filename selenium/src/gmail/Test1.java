package gmail;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Test1 {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Alej\\Desktop\\Desktop\\Autom\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		try {
			driver.get("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
			WebElement mail = driver.findElement(By.id("identifierId"));
			mail.sendKeys("rockstars.enroute@gmail.com");
			driver.findElement(By.xpath("//content[@class='CwaK9']/span[contains(text(),'Siguiente')]")).click();
			
			(new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
	            public Boolean apply(WebDriver d) {
	                return d.findElement(By.name("password")).isDisplayed();//.getTitle().toLowerCase().startsWith("cheese!");
	            }
	        });
			
			WebElement pass = driver.findElement(By.name("password"));
			pass.sendKeys("Rockstars2019");
			driver.findElement(By.xpath("//content/span[contains(text(),'Siguiente')]")).click();
			System.out.println("Succesful!");
		}
		catch(Exception e) {
			System.out.println(e);
			System.out.println("Err");
		}
		finally {
			Thread.sleep(3000);
			driver.quit();
			System.out.println("Program Finished");
		}
		
	}

}
