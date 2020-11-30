/**
 * There is an open jar and a fly inside it.
 * That fly is flying from side to side frantically because it really wants to get away
 * from there. Your task is to estimate whether it will succeed in its attempts (return True)
 * or not (return False).
 * 
 * Input: Two lists of integers:
 * the first contains jar's dims [W, H, d]
 * the second contains fly's characteristics [x0, y0, vx, vy]
 * Output: True or False.
 */
function escape(jar: number[], fly: number[]): boolean {
    const [W, H, d] = jar;
    const [x0, y0, v0x, v0y] = fly;
    const eps = 0.001;
    
    // extreme cases
    if (v0y == 0) return false;
    if (v0x == 0) {
        if ((x0 < (W + d) / 2) && (x0 > (W - d) / 2)) return true;
        return false;
    }

    let [vx, vy] = [v0x, v0y];
    for (let t = 0, x = x0, y = y0, i = 0; i < 20; i++) {
        if (Math.abs(y - H) < eps && x < (W + d) / 2 && x > (W - d) / 2) return true;

        t = Math.min(((vx > 0) ? (W - x) : x) / Math.abs(vx), ((vy > 0) ? (H - y) : y) / Math.abs(vy));
        x += vx * t;
        y += vy * t;
        // collisions
        if (Math.abs(x) < eps || Math.abs(W - x) < eps) vx *= -1;
        if (Math.abs(y) < eps || Math.abs(y - H) < eps) vy *= -1;
    }
    return false;
}