/**
 * Created by params on 27/03/16.
 */
public class Main {
    public static void main(String[] args) throws InterruptedException {
        int tick = 0;

        while(true) {
            System.out.println(String.format("tick : %d", tick));
            tick++;
            Thread.sleep(1000);
        }
    }
}
