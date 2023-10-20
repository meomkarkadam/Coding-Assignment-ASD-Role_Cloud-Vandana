import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();

        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The entered sentence is a pangram.");
        } else {
            System.out.println("The entered sentence is not a pangram.");
        }
    }

    public static boolean checkPangram(String s) {
        Set<Character> set = new HashSet<>();

        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                set.add(c);
            }
        }

        return set.size() == 26;
    }
}

