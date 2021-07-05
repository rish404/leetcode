var invertTree = function(root) {
    if (root !== null) {
        const tmp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(tmp);
    }
    return root;
    
};