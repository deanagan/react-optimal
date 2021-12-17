new Vue({
    el: '.toc',
    data: {
        what_it_is : [
            {
                statement : "Inline functions are functions defined when react is \"rendering\"",
                codes : [
                    dedentStrUsing1stLineIndent(`
                    int someNumber = 20;
                    auto someFn = [someNumber](int anotherNumber) {
                        return anotherNumber + someNumber;
                    };
                    someNumber = 12;
                    auto result = someFn(1); // result == 21 and not 13.`),
                ]
            },
        ],
    }
});