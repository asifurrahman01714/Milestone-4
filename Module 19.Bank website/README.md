# Cautions: 
1. Multiply -1 with any number to negative it.
2. For pass Id as a function parameter, write it with double quotation . like-

    function test (id){
        const testNumber = document.getElementById(id);
        return id;
    }
    const result = test("testId");
    console.log(result);

3. Try to convert multiple work in a single function.