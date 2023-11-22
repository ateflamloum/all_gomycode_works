Algorithm: Determine Orthogonality Using a Procedure

Input: 
- n (number of vector pairs)
- v1 and v2 (lists of vectors of real numbers)

Output:
- For each vector pair, print whether the vectors are orthogonal or not

Procedure dot_product(v1, v2):
    ps = 0 
    for i from 0 to length(v1) - 1 do:
        ps = ps + (v1[i] * v2[i])
    return ps 

Begin:
    Read n 
    for each pair in 1 to n do:
        Read v1, v2  
        result = dot_product(v1, v2)  
        if result == 0:
            Print "Vectors are orthogonal"
        else:
            Print "Vectors are not orthogonal"
End
