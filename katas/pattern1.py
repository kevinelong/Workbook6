# /*
# You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

#     Note:Returning the pattern is not the same as Printing the pattern.

# Rules/Note:

#     If n < 1 then it should return "" i.e. empty string.
#     There are no whitespaces in the pattern.

# Pattern:

# 1
# 22
# 333
# ....
# .....
# nnnnnn
# */
# function pattern(n) {
#     if (n < 1){
#         return "";
#     }

#     let output = [];

#     for (i = 1; i <= n; i++) {

#         let row = "";

#         for(r=0;r < i; r++){
#             row += i;
#         }

#         output.push(row);
#     }
    
#     return output.join("\n");
# }
def pattern(n):
    if n < 1:
        return ""
    output = []
    for i in range(1, n+1):
        output.append(str(i) * i) #convert to string repeat with multiply operator *
    return "\n".join(output) #backwards from js

print(pattern(5))
# console.log(pattern(5));
# console.log("1\n22\n333\n4444\n55555" == pattern(5));
# /*
# Test.assertEquals(pattern(1),"1");
# Test.assertEquals(pattern(2),"1\n22");
# Test.assertEquals(pattern(5),"1\n22\n333\n4444\n55555");
# */