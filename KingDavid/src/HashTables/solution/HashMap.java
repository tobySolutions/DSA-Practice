package com.company;

import java.util.Arrays;

public class HashMap {

    private class Node {

        int key;
        String value;
        int hash;
        Node next = null;

        public Node(int key , String value , int hash){
            this.key = key;
            this.value = value;
            this.hash = hash;
        }
    }

    Node[] nodes;

    public HashMap(){
        this.nodes = new Node[16];
    }

    public void put(Integer key , String value){

        int hash = this.hash(key);

        int hashIndex = this.hash(key) & (this.nodes.length -1);

        if (nodes[hashIndex] != null)
            nodes[hashIndex].next = new Node(key , value , hash);
        else
            nodes[hashIndex] = new Node(key , value , hash);

    }

    public Object get(Integer key){

        int hash = this.hash(key);
        int hashIndex = this.hash(key) & (this.nodes.length - 1);

        Node currentNode = nodes[hashIndex];

        // Using the chaining procedure
        // (check out chaining  procedure for HashMap)
        while (currentNode != null) {

            // compare the hash and key, if they're equal return
            if (currentNode.hash == hash && currentNode.key == key)
                return currentNode.value;
            else
                // if they're not equal , check if it's
                // next pointer has a value and repeat
                // the process
                currentNode = currentNode.next;
        }

        return null;
    }

    public void remove(Integer key){

        int hashIndex = hash(key) & (this.nodes.length - 1);

        nodes[hashIndex] = null;
    }

    private int hash(Integer key){
        int hash = key;

        return hash % this.nodes.length;
    }

    @Override
    public String toString(){
        return Arrays.toString(nodes);
    }

}