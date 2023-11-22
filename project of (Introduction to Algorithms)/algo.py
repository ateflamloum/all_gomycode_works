def analyze_sentence(sentence):
    sentence_length = 0
    word_count = 0
    vowel_count = 0
    for char in sentence:
        sentence_length += 1
        if char == ' ':
            word_count += 1
        if char in "AEIOUaeiou":
            vowel_count += 1
    word_count += 1
    print("Length of the sentence:", sentence_length)
    print("Number of words in the sentence:", word_count)
    print("Number of vowels in the sentence:", vowel_count)