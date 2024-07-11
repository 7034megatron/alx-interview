#!/usr/bin/python3

def minOperations(n):
    if n <= 1:
        return 0
    numbr, index, operations = n, 2, 0

    while numbr > 1:
        if numbr % index == 0:
            numbr = numbr / index
            operations = operations + index
        else:
            index += 1
    return operations
