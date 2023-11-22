def is_palindrome(word):
    word = word.replace(" ", "").lower()
    if len(word) <= 1:
        return True
    else:
        if word[0] == word[-1]:
            return is_palindrome(word[1:-1])
        else:
            return False