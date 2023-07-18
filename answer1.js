function areIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const sToT = {};  // Object to store character mappings from s to t
    const tToS = {};  // Object to store character mappings from t to s
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (sToT[charS]) {
            if (sToT[charS] !== charT) {
                return false;
            }
        } else {
            sToT[charS] = charT;
        }
        
        if (tToS[charT]) {
            if (tToS[charT] !== charS) {
                return false;
            }
        } else {
            tToS[charT] = charS;
        }
    }
    
    return true;
}

// Test Example 1
const s = "egg";
const t = "add";
console.log(areIsomorphic(s, t));  // Output: true
