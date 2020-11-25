import java.util.*;

public class RepeatingCharacters {

	public static void main(String[] args) {
		
		String s = "Bangalore Is in India";

//		A - Write a program to print the words which have repeated characters. Ex o/p: Bangalore, India 
//		B- Print the name and count of repeating characters in the words found in above steps:
//			 Ex O/p : Bangalore – a (2) India – I(2)

		
		String[] splits = s.split(" ");
				
		for(String ss : splits) {
			char[] ch = ss.toLowerCase().toCharArray();
			HashMap<Character, Integer> hm = new HashMap<Character, Integer>();
			for(int i=0; i<ch.length; i++) {
				if(hm.containsKey(ch[i])) {
					Integer j = hm.get(ch[i]);
					hm.put(ch[i], j+1);
					
					Set<Map.Entry<Character, Integer>> se = hm.entrySet();
					for(Map.Entry<Character, Integer> me : se) {
						if(me.getValue()>1) {
							System.out.println(ss+" "+me.getKey()+"("+me.getValue()+")");
						}
					}
				}else {
					hm.put(ch[i], 1);
				}
			}
		}		
	}

}
