/**
 * You are given an expression with numbers, brackets and operators.
 * For this task only the brackets matter. Brackets come in three flavors: "{}" "()" or "[]".
 * Brackets are used to determine scope or to restrict some expression.
 * If a bracket is open, then it must be closed with a closing bracket of the same type.
 * The scope of a bracket must not intersected by another bracket.
 * In this task you should make a decision, whether to correct an expression or not based on the brackets.
 * Do not worry about operators and operands.
 *
 * Input: An expression with different of types brackets as a string (unicode).
 * Output: A verdict on the correctness of the expression in boolean (True or False).
 * Precondition: There are only brackets ("{}" "()" or "[]"), digits or operators ("+" "-" "*" "/").
 */
const OPENBRACKETS = '([{';
const CLOSEBRACKETS = ')]}';

function brackets(expr: string): boolean {
    const stack = [];
    const str = expr.match(/[\(\[\{\)\}\]]/g);
    if (!str) return true;

    for (let i = 0; i < str.length; i++) {
        if (OPENBRACKETS.includes(str[i])) stack.push(str[i]);

        if (CLOSEBRACKETS.includes(str[i])) {
            if (OPENBRACKETS.indexOf(stack.pop()) !== CLOSEBRACKETS.indexOf(str[i])) return false;
        }
     };

     return !stack.length;
}

/*  These "asserts" are used for self-checking
    assert.equal(brackets("((5+3)*2+1)"), true);
    assert.equal(brackets("{[(3+1)+2]+}"), true);
    assert.equal(brackets("(3+{1-1)}"), false);
    assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true);
    assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false);
    assert.equal(brackets("[(3)+(-1)]*{3}"), true);
    assert.equal(brackets("(((([[[{{{3}}}]]]]))))"), false);
    assert.equal(brackets("[1+202]*3*({4+3)}"), false);
    assert.equal(brackets("({[3]})-[4/(3*{1001-1000}*3)/4]"), true);
    assert.equal(brackets("[[[1+[1+1]]])"), false);
    assert.equal(brackets("(((1+(1+1))))]"), false);
    assert.equal(brackets("2+3"), true);
*/