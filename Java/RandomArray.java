public class RandomArray {
    public static void main(String[] args) {
        int[] arr = {1, 9, 5, 2, 4, 6, 8,7};
        int ArrayLength = arr.length;
        Random rand = new Random();

        for (int i = 0; i < arr.length; i++) {
            int randomIndex = rand.nextInt(ArrayLength);

            int temp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
        System.out.println(Arrays.toString(arr));
    }
}