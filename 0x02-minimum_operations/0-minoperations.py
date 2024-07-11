#!/usr/bin/python3

""" Has a single character H with two operations: Copy All and Paste
    Give number n, write a method that calculates operations to result
    in exactly n H.
    Prototype: def minOperations(n)
    Return an integer
    if n is impossible to achieve, return 0
    """


def minOperations(n):
    """
    Single character H
    Fewest number of operations
    """

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
