var Stack = /** @class */ (function () {
    function Stack(name, values) {
        this.name = name;
        this.values = values || [];
    }
    Stack.prototype.push = function (value) {
        this.values.push(value);
    };
    Stack.prototype.introduction = function () {
        return "My name is ".concat(this.name, " and I have ").concat(this.values.length, " entries");
    };
    return Stack;
}());
var stack = new Stack('Sample Stack', [1, 2, 3, 4, 5]);
console.log(stack.introduction());
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
console.log(stack.values);
