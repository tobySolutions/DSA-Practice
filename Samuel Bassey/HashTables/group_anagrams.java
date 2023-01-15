import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
class Solution {
    public List<List<String>> groupAnagrams(String[] strs){
        List<List<String>>s=new ArrayList<>();
        Map<String,List<String>>map=new LinkedHashMap<>();
        
        for(String e:strs){
            char ch[]=e.toCharArray();
            Arrays.sort(ch);
            String str=new String(ch);
            
            if(!map.containsKey(str)){
                map.put(str,new ArrayList<>());
            }
            map.get(str).add(e);
        }
        s.addAll(map.values());
        return s;
    }
}