var BSTNode = function(val){
  var val = val;
  var right = null;
  var left = null;
}

var Tree = function(){
	var root = null;
	var add = function(val) {
		var newNode = new Node(val);
		var current = root;
		
		if(root == null) {
			root = newNode;
			return true;
		}
		
		while(current){
			if(newNode.val < current.val){
				if(current.left){
					current = current.left;
				}
				else {
					current.left = newNode;
					return true;
				}
			}
			else {
		
				if(current.right){
					current = current.right;
				}else {
					current.right = newNode;
					return true;
				}
			}
		}
	}
}