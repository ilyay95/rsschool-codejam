let arr = [];
    let x=0;
    function recurs(tree){
        if (tree && tree.value) {
            if(typeof arr[x]!='object'){
                arr[x] = [];}
            arr[x].push(tree.value);
            x++;
            recurs(tree.left);
            recurs(tree.right);
            x--;

    }}
    module.exports =function recursion(tree) {
        recurs(tree);
        return arr;
    }