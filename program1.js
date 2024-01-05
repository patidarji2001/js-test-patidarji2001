/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const parenthesis={
    ')':'(',
        '}':'{',
        ']':'['
    };
    for(let i=0;i<s.length;i++){
     const char=s[i];
        if(char ==='(' || char === '{' ||char ==='['){
            stack.push(char);
        }
        else{
            const corres=parenthesis[char];
            if(stack.pop() !== corres){
                return false;
            }
        }
    }
};

module.exports = { isValid };


