/*///////////////////////////////

Use  --nouse_escape_analysis flag for this test

*/////////////

var N = 50000;
function foo(a, b) {
    // noinline
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================
    // =========================================================

   var k = Array(10, 4, 5, 6);
   return k[1];
}

var k = 1;
for (var i = 0; i < N; i++) {
    k = foo(12, 1);
//    print(k);
}

print (k);

