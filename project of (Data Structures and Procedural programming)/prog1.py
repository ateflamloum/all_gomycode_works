def find_sum_of_distinct_elements(set1, set2):
    combined_list = set1 + set2
    distinct_elements = []
    for element in combined_list:
        if element not in distinct_elements:
            distinct_elements.append(element)
    sum_of_distinct_elements = sum(distinct_elements)
    return sum_of_distinct_elements