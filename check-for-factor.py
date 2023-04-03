def check_for_factor(base, factor):
    if base % factor == 0:
        return True
    else:
        return False

print(check_for_factor(17, 5), "should be false")
print(check_for_factor(15, 5), "should be true")
print(check_for_factor(0, 5), "should be true")