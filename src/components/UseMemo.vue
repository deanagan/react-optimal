<template>
  <section class="usememo">
    <h2 style="text-transform: none">useCallback</h2>
    <ul style="font-size: 0.8em">
      <li class="fragment" v-for="(e, i) in what" :key="i">{{ e }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      what: [
        "useCallback returns a memoized callback",
        "Returns a memoized version of the callback that only changes if the dependencies changed",
        "Useful when passing callbacks to optimized child components that rely on reference equality \
                    to prevent unnecessary renders (e.g. shouldComponentUpdate).",
        "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
      ],
      mutablenotes: [
        {
          statement:
            "Lambdas are equivalent to functors with const operator() by default.",
          codes: [
            dedentStrUsing1stLineIndent(`
                    // This lambda
                    auto productFn = [multiplier](int multiplicand) {
                        return multiplicand * multiplier;
                    };`),
            dedentStrUsing1stLineIndent(`
                    // is equivalent to this functor:
                    struct Product {
                        public:
                            Product(int multiplier) : multiplier_(multiplier) {}
                            int operator()(int multiplicand) const
                            {
                                return multiplicand * multiplier_;
                            }
                        private:
                            int multiplier_;
                    };`),
          ],
        },
        {
          statement:
            "Lambdas follows the same syntax rules for const-qualified methods.",
          codes: [
            dedentStrUsing1stLineIndent(`
                    auto someFn = [number](int anotherNumber) {
                        ++number; // Error! expression must be modifiable lvalue
                        return anotherNumber + number;
                    };`),
            dedentStrUsing1stLineIndent(`
                    auto someFn = [number](int anotherNumber) mutable {
                        ++number; // Now good due to mutable.
                        return anotherNumber + number;
                    };`),
          ],
        },

        {
          statement:
            "If it were a reference though, it will still work as 'number' is now external to the object, and does not alter the object state.",
          codes: [
            dedentStrUsing1stLineIndent(`
                    auto someFn = [&number](int anotherNumber) {
                        ++number;
                        return anotherNumber + number;
                    };`),
            dedentStrUsing1stLineIndent(`
                    // Applies to pointers too!
                    auto someFn = [pnumber](int anotherNumber) {
                        ++(*pnumber);
                        return anotherNumber + *pnumber;
                    };`),
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
