import unittest
from anagram import is_anagram

class TestIsAnagram(unittest.TestCase):
    def test_empty(self):
        self.assertTrue(is_anagram("", ""))
    
    def test_is_anagram(self):
        self.assertTrue(is_anagram("ablak", "balak"))

    def test_not_anagram(self):
        self.assertFalse(is_anagram("ablak", "korol"))


if __name__ == '__main__':
    unittest.main()