package ArrayAndStrings.solution;

import java.util.HashMap;

public class LC833_FindAndReplaceString {
    public static void main(String[] args) {

    }

    public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {
        HashMap<Integer,Integer> hashMap = new HashMap<>();

        for (int i = 0; i < indices.length; i++){
            if(s.substring(indices[i]).startsWith(sources[i]))
                hashMap.put(indices[i], i);
        }

        StringBuffer sb = new StringBuffer();
        int i = 0;

        while (i < s.length()){
            if (hashMap.containsKey(i)){
                sb.append(targets[hashMap.get(i)]);
                i += sources[hashMap.get(i)].length();
            }else {
                sb.append(s.charAt(i));
                i++;
            }
        }

        return  sb.toString();
    }
}
