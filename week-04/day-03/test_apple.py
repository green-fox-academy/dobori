import unittest
from apple import Apple

class TestApple(unittest.TestCase):
    def test_isit_any(self):
        my_tiny_apple = Apple()
        self.assertEqual(my_tiny_apple.get_apple(), "apple")



if __name__ == '__main__':
    unittest.main()