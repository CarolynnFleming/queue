class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        if(node.value === this.value){
            return;
        }
      // if node is less than this . value it goes on the left. if its greter it goes on the right. is executed only if left of right is also null otherwise recursivley check left or right.
      if(node.value < this.value) {
          if(!this.left) this.left = node;
     else this.left.add(node);
      } else {
        if(!this.right) this.right = node; else this.right.add(node);
    }
    }
  }

  const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
console.log(B);