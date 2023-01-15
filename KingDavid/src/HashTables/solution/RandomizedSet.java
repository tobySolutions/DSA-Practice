package HashTables.solution;

import java.util.HashSet;
import java.util.Random;

public class RandomizedSet {

        java.util.HashSet<Integer> randomSet;

        public RandomizedSet() {
            randomSet = new HashSet<>();
        }

        public boolean insert(int val) {
            if (randomSet.contains(val)) {
                return false;
            }
            randomSet.add(val);
            return true;
        }

        public boolean remove(int val) {
            if (randomSet.contains(val)) {
                randomSet.remove(val);
                return true;
            }
            return false;
        }

        public int getRandom() {
            Integer[] numbers = randomSet.toArray(new Integer[randomSet.size()]);
            Random random = new Random();
            int randomNumber = random.nextInt(randomSet.size());
            return numbers[randomNumber];
        }

}
