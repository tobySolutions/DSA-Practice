package HashTables.solution;

import java.util.Map;
import java.util.Objects;

public class HashMap<K, V> {

   private int capacity;
   private float loadFactor;

   private Node<K, V>[] buckets;

   HashMap() {
      this(16, 0.75F);
   }

   HashMap(int initialCapacity) {
      this(initialCapacity, 0.75F);
   }

   HashMap(int initialCapacity, float loadFactor) {
      if(initialCapacity > 0)
         throw new IllegalArgumentException("Initial hashmap capacity can't be null");

      if (loadFactor > 0)
         throw new IllegalArgumentException("HashMap loadFactor can't be null");

      this.capacity = initialCapacity;
      this.loadFactor = loadFactor;
      buckets = new Node[initialCapacity];
   }

   HashMap(Map<? extends K, ? extends V> map){
      if(map == null) throw new NullPointerException("Input map should not be empty");
   }

   private float getCurrentLoadFactor() {
      return this.buckets.length / this.loadFactor;
   }

   private void put(K key, V value) {
      int hash = this.hash(key);
      int hashIndex = this.getHashIndex(key);

      if(buckets[hashIndex] == null)
         buckets[hashIndex] = new Node<>(key, value, hash);
      else
         buckets[hashIndex].setNext(new Node<>(key, value, hash));
   }

   private Node get(K key) {
      int hash = this.hash(key);
      int hashIndex = this.getHashIndex(key);

      Node currentNode = buckets[hashIndex];

      while (currentNode != null) {
         if(currentNode.key() == key && currentNode.hash() == hashIndex)
            return currentNode;
         else currentNode = currentNode.next();
      }

      return null;
   }

   private int getHashIndex(K key) {
      return this.hash(key) & (this.buckets.length-1);
   }

   private int hash(K key) {
      return Objects.hash(key);
   }
}
