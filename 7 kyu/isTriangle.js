function isTriangular(t) {
    // Your code here
    for (i = 0; i <= t; i++) {

        if (t == i * (i + 1) / 2) {
            return true;
        }
    }

    return false;
}

//   Triangular number is the amount of points that can fill equilateral triangle.

// Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

// alt text

// Hint!
// T(n) = n * (n + 1) / 2,
// n - is the size of one side.
// T(n) - is the triangular number.
// Given a number 'T' from interval [1; 2147483646], find if it is triangular number or not.